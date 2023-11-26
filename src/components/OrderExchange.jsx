// comp
import { OrderItem } from "./OrderItem";

// img
import qr from "../images/icons/qr.svg";
import squares from "../images/icons/squares.svg";

// lib
import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const OrderExchange = ({ receivedCoin }) => {
  const miniOrder = useMediaQuery("only screen and (max-width : 610px)");
  const navigate = useNavigate();
  const [ coinAddress, setCoinAddress ] = useState();

  return (
    <form
      className={classNames(
        "flex flex-col justify-start w-full text-left",
        {
          "mt-5": !miniOrder,
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
          value={coinAddress}
          placeholder={`Ваш ${receivedCoin.name} адрес`}
          onChange={(ev) => { setCoinAddress(ev.target.value) }}
        />
        <div className="flex flex-row">
          <img className="mr-3" src={qr} alt='QR'/>
          <img
            className="cursor-pointer"
            onClick={() => {
              navigator.clipboard.readText()
                .then((clipText) => setCoinAddress(clipText))
                .catch((err) => {
                  alert('Вам нужно дать браузеру разрешение на использование вашего буфера обмена');
                })
            }}
            src={squares}
            alt='Paste'
          />
        </div>
      </div>
      <button type="submit" className="bg-btns py-3 text-xl rounded-xl mt-4">
        Начать обмен
      </button>
    </form>
  );
};
