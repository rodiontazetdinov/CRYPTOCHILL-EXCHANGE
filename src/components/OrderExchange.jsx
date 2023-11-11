import { OrderItem } from "./OrderItem";
import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";

import qr from "../images/icons/qr.svg";
import squares from "../images/icons/squares.svg";
import { useNavigate } from "react-router-dom";

export const OrderExchange = () => {
  const miniOrder = useMediaQuery("only screen and (max-width : 610px)");
  const navigate = useNavigate();
  return (
    <form
      className={classNames(
        "flex flex-col justify-start mt-2 w-full text-left",
        {
          "mt-2 w-full max-w-mobile-container": miniOrder,
        }
      )}
      onSubmit={(e) => {
        e.preventDefault();
        navigate("/sending");
      }}
    >
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
      <button type="submit" className="bg-btns py-3 text-xl rounded-lg mt-4">
        Начать обмен
      </button>
    </form>
  );
};
