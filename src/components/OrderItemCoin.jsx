import btc from "../images/coins/btc.svg";
import arrowDown from "../images/arrow-down.svg";
import arrowUp from "../images/arrow-up.svg";
import { useState } from "react";
import classNames from "classnames";
import { useMediaQuery } from "@uidotdev/usehooks";

export const OrderItemCoin = ({ title }) => {
  const miniOrder = useMediaQuery("only screen and (max-width : 610px)");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={classNames(
        "bg-[#08035B] flex flex-row items-center px-6 py-1 rounded-lg mt-3",
        {
          "w-full max-w-mobile-container": miniOrder,
        }
      )}
    >
      <p>3123213213</p>
      <div className={classNames("flex flex-row items-center ml-3",{
        "justify-between": miniOrder,
        // "items-center": !miniOrder,
      })}>
        <img className="mr-1" src={btc} alt="btc" />
        <p className="mr-2">BTC</p>
        <img
          className="cursor-pointer w-4 h-4"
          src={isOpen ? arrowUp : arrowDown}
          alt="arrow"
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>
    </div>
  );
};
