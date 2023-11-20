import { OrderItemCoin } from "./OrderItemCoin";
import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";
import { DropdownListCoins } from "./DropdownListCoins";
import { useState } from "react";

export const OrderItem = ({ title, stateCoin, stateSumm, dropdownState, setDropdownState}) => {
  const ipadMini = useMediaQuery("only screen and (max-width : 1024px)");
  const miniOrder = useMediaQuery("only screen and (max-width : 610px)");
  const laptop = useMediaQuery(
    "only screen and (min-width : 1024px)"
  );

  const [summ, setSumm] = stateSumm;

  return (
    <div
      className={classNames(
        "bg-white bg-opacity-20 flex flex-col items-center p-3 rounded-[24px]",
        {
          "mt-2 w-[288px]": ipadMini,
          "mt-2 w-full max-w-mobile-container": miniOrder,
          "w-[347px]": laptop,
        }
      )}
    >
      <h3 className="text-3xl w-full text-left">{title}</h3>
      {/* <OrderItemCoin /> */}
      <div className="flex w-full h-12 z-10 mt-3 rounded-xl bg-input">
        {!dropdownState && (
          <input
            type="number"
            className={classNames(
              "flex-grow block bg-transparent outline-none font-mono text-2xl py-3 pl-6 pr-1 text-[#D7DFFF]",
              {
                "max-w-[170px]": laptop,
                "min-w-[140px]": ipadMini,
              }
            )}
            onChange={(ev) => {
              console.log(ev);
              setSumm(ev.target.value);
            }}
            value={summ}
          />
        )}
        <div className="flex-grow min-w-[110px]">
          <DropdownListCoins
            selectName='main-sent-coin'
            stateCoin={stateCoin}
            dropdownState={dropdownState}
            setDropdownState={setDropdownState}
          />
        </div>
      </div>
      <div className="flex flex-row justify-between w-full">
        <p className="text-left text-base mt-2">1 BTC ≈ 15.9754668 ETH</p>
        <p className="text-left text-base mt-2">51$</p>
      </div>
    </div>
  );
};
