import btc from "../images/coins/btc.svg";
import arrowDown from '../images/arrow-down.svg';
import arrowUp from '../images/arrow-up.svg';
import { useState } from "react";

export const OrderItemCoin = ({ title }) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#08035B] flex flex-row items-center px-6 py-1 rounded-lg mt-3">
      <p>3123213213</p>
      <div className="flex flex-row items-center ml-3">
        <img className="mr-1"src={btc} alt="btc" />
        <p className="mr-2">BTC</p>
        <img className="cursor-pointer w-4 h-4" src={isOpen ? arrowUp : arrowDown} alt="arrow" onClick={() => setIsOpen((prev) => !prev)}/>
      </div>
    </div>
  );
};
