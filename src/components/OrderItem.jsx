import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { DropdownListCoins } from "./DropdownListCoins";
import { OrderItemCoin } from "./OrderItemCoin";
import { processOrderErrors, extractAmountFromString } from "../utils/helpers";

import warning from "../images/icons/warning.svg";

export const OrderItem = ({
  title,
  amount,
  stateCoin,
  setStateCoin,
  dropdownState,
  setDropdownState,
  nameCoinTo,
  which,
  float,
  setAmountCoin=(() => {})
}) => {
  const ipadMini = useMediaQuery("only screen and (max-width : 1024px)");
  const miniOrder = useMediaQuery("only screen and (max-width : 610px)");
  const laptop = useMediaQuery("only screen and (min-width : 1024px)");
  const iphone = useMediaQuery("only screen and (max-width : 410px)");

  const [ isFocusInput,  setFocusInput ] = useState(false);

  const errors = useSelector(state => state.creatingOrder.errors);
  const isFixed = useSelector(state => state.isFixed);
  const orderFrom = useSelector(state => state.creatingOrder.from);
  
  const errorsWhich = errors && errors.filter((err) => err.split('_')[1] === which);

  let isWarningSum = null;
  let textWarningSum = null;
  if (which === 'FROM') {
    if (Number(orderFrom.max) < amount) {
        textWarningSum = <span
          className="cursor-pointer"
          onClick={() => setAmountCoin(orderFrom.max)}
        >Максимальная сумма для обмена <span className="underline">{orderFrom.max}</span> <span>{orderFrom.code}</span></span>
        isWarningSum = true;
    } else if (Number(orderFrom.min) > amount) {
        textWarningSum = <span
          className="cursor-pointer"
          onClick={() => setAmountCoin(orderFrom.min)}
        >Минимальная сумма для обмена <span className="underline">{orderFrom.min}</span> <span>{orderFrom.code}</span></span>
        isWarningSum = true;
    }
  }

  return (
    <div
      className={classNames(
        "bg-white bg-opacity-20 flex flex-col items-center p-3 rounded-[24px] ",
        {
          "mt-2 w-[288px]": ipadMini,
          "mt-2 w-full max-w-mobile-container": miniOrder,
          "w-[347px]": laptop,
        }
      )}
    >
      <h3 className="text-3xl w-full text-left">{title}</h3>
      {/* <OrderItemCoin /> */}
      <div className={classNames(
        "flex h-12 justify-between w-full mt-3 rounded-xl bg-input relative",
        {
          'z-10': dropdownState
        }
      )}>
        {!dropdownState && (
          <div className="flex-grow">
            <input
              type="text"
              className={classNames(
                "w-full bg-transparent outline-none font-mono text-2xl py-2 pl-6 pr-1 text-[#D7DFFF] no-scrollbar",
                {
                  'text-[#d9d6ff80]': errorsWhich && errorsWhich.length > 0
                }
              )}
              onFocus={() => setFocusInput(true)}
              onBlur={(ev) => {
                setTimeout(() => {
                  setFocusInput(false);
                }, 1000);
              }}
              onChange={(ev) => setAmountCoin(ev.target.value)}
              value={`${float ? '≈' : ''}${amount}`}
              maxLength={17}
            />
          </div>
        )}
        <div className={classNames("min-w-[125px]", {
          "w-full": dropdownState
        })}>
          <DropdownListCoins
            dropdownState={dropdownState}
            setDropdownState={setDropdownState}
            selectName='main-sent-coin'
            stateCoin={stateCoin}
            setStateCoin={setStateCoin}
            amount={amount}
            which={which}
          />
        </div>
        {(((errorsWhich && errorsWhich.length > 0) || isWarningSum) && !dropdownState) && (
        <div className="absolute top-14 flex justify-between items-center px-3 py-1 bg-[#FF5454] w-[90%] mx-[5%] rounded-lg mb-2">
            <img src={warning} alt="" />
            <p className="text-[#08035B]">
              {(!isWarningSum && (errorsWhich.length > 0)) && processOrderErrors(errorsWhich)}
              {isWarningSum && (
                textWarningSum
              )}
            </p>
        </div>
        )}
      </div>

      {!isFocusInput && (
        <div className="flex flex-row justify-between w-full">
          <p className="text-left text-base mt-2">{`1 ${stateCoin.code} ${isFixed ? '=' : '≈'} ${stateCoin.rate} ${nameCoinTo}`}</p>
          <p className="text-left text-base mt-2">{`${stateCoin.usd}$`}</p>
        </div>
      )}
      {isFocusInput && (
        <div className="flex flex-row justify-between w-full">
          <p 
            className="text-left text-base mt-2 cursor-pointer"
            onClick={() => setAmountCoin(stateCoin.min)}
          >{`min: ${stateCoin.min}`}</p>
          <p
            className="text-left text-base mt-2 cursor-pointer"
            onClick={() => setAmountCoin(stateCoin.max)}
          >{`max: ${stateCoin.max}`}</p>
        </div>
      )}
    </div>
  );
};
