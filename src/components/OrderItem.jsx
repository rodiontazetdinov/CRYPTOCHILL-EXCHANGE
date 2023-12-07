import { OrderItemCoin } from "./OrderItemCoin";
import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";
import { DropdownListCoins } from "./DropdownListCoins";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import warning from "../images/icons/warning.svg";

export const OrderItem = ({ title, amount, stateCoin, setStateCoin, dropdownState, setDropdownState, nameCoinTo, warningShow, float, setAmountCoin=(() => {}) }) => {
  const ipadMini = useMediaQuery("only screen and (max-width : 1024px)");
  const miniOrder = useMediaQuery("only screen and (max-width : 610px)");
  const laptop = useMediaQuery(
    "only screen and (min-width : 1024px)"
  );

  const iphone = useMediaQuery("only screen and (max-width : 410px)");

  const [ isFocusInput,  setFocusInput ] = useState(false);

  const isFixed = useSelector(state => state.isFixed);
  const orderFrom = useSelector(state => state.creatingOrder.from);

  let isWarning = false;
  let warningSum = null;
  if (warningShow) {
    if (Number(orderFrom.max) < amount) {
        isWarning = true;
        warningSum = `Максимальная сумма для обмена ${orderFrom.max} ${orderFrom.code}`;
    } else if (Number(orderFrom.min) > amount) {
        isWarning = true;
        warningSum = `Минимальная сумма для обмена ${orderFrom.min} ${orderFrom.code}`
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
                // {
                //   "max-w-[180px]": laptop,
                //   "max-w-[140px]": ipadMini,
                //   "max-w-[60%]": miniOrder,
                //   "max-w-[45%]": iphone,
                // }
              )}
              onFocus={() => setFocusInput(true)}
              onBlur={() => setFocusInput(false)}
              onChange={(ev) => setAmountCoin(ev)}
              value={`${float ? '≈' : ''}${amount}`}
              maxLength={17}
            />
          </div>
        )}
        <div className={classNames("min-w-[120px]", {
          "w-full": dropdownState
        })}>
          <DropdownListCoins
            dropdownState={dropdownState}
            setDropdownState={setDropdownState}
            selectName='main-sent-coin'
            stateCoin={stateCoin}
            setStateCoin={setStateCoin}
            amount={amount}
          />
        </div>
        {(isWarning && !dropdownState) && (
        <div className="absolute top-14 flex justify-between items-center px-3 py-1 bg-[#FF5454] w-[90%] mx-auto rounded-lg mb-2">
            <img src={warning} alt="" />
            <p className="text-[#08035B]">{warningSum}</p>
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
            onClick={() => {
              setAmountCoin(stateCoin.max);
              console.log(stateCoin.max);
            }}
          >{`max: ${stateCoin.max}`}</p>
        </div>
      )}
    </div>
  );
};
