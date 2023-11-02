import { OrderItem } from "./OrderItem";

import qr from "../images/icons/qr.svg";
import squares from "../images/icons/squares.svg";

export const OrderExchange = () => {
  return (
    <div className=" flex flex-col justify-start mt-2 w-full text-left">
      <h3 className="text-3xl">Назначение</h3>
      <div className="bg-[#08035B] flex flex-row w-full py-3 px-6 rounded-lg justify-between mt-2">
        <input
          className="bg-[#08035B] text-white focus:outline-none w-3/4"
          type="text"
          placeholder="Ваш Bitcoin адрес"
        />
        <div className="flex flex-row">
          <img className="mr-3" src={qr} />
          <img src={squares} />
        </div>
      </div>
      <button className="bg-btns py-3 text-xl rounded-lg mt-4">Начать обмен</button>
    </div>
  );
};
