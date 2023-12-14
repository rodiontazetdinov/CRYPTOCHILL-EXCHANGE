import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setOrder } from "../store/actions";
import { api } from "../utils/api";
import { Link } from "react-router-dom";

import squares from "../images/icons/squares.svg";
import blockchain from "../images/blockchain.png";

import { formatDate } from "../utils/helpers";

// import qr from "../images/sending-icons/qr.svg";

export const SendingTransactionBack = ({order}) => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const iphone = useMediaQuery("only screen and (min-width : 320px) and (max-width : 744px)");
  const ipadMini = useMediaQuery("only screen and (min-width : 744px) and (max-width : 1024px)");
  const macbook = useMediaQuery("only screen and (min-width : 1024px) and (max-width : 1440px)");
  const desctop = useMediaQuery("only screen and (min-width : 1440px)");
  const miniSending = useMediaQuery("only screen and (min-width : 320px) and (max-width : 911px)");
  const miniTop = useMediaQuery("only screen and (min-width : 320px) and (max-width : 1210px)");
  const phone = useMediaQuery("only screen and (min-width : 320px) and (max-width : 585px)");

  const dispatch = useDispatch();

  // const order = useSelector((state) => state.order);
  // const [confirmations, setConfirmations] = useState(4);

  // useEffect(() => {
  //   // setTimer(order && order.time.left);
  // }, [order]);

  const getStrData = (sec) => {
    const date = new Date(Number(sec) * 1000);

    const dateStr = date.toLocaleString("ru", {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    const timeStr = date.toLocaleString("ru", {
        hour: 'numeric',
        minute: 'numeric',
    });

    return `${dateStr}, ${timeStr}`;
  }

  return (
    <div
      className={classNames(
        "flex flex-col bg-order rounded-3xl text-left  space-y-4 w-full",
        {
          "w-2/4": !miniTop,
          "w-full": miniTop,
          "text-xl p-6 space-y-4": phone,
          "p-8": !phone,
        }
      )}
    >
      <p className="text-2xl font-semibold">
        {"Информация о возврате"}
      </p>
      <div>
        <p>TxID</p>
        <div className={classNames("flex max-w-[550px] bg-sending-input rounded-lg px-4 py-2 items-center justify-between", {
          "w-[370px]": macbook,
          "w-[300px]": iphone
        })}>
          <p className="text-xl leading-6  overflow-hidden truncate">
            {order && order.back.tx.id}
          </p>
          <img
            className="cursor-pointer ml-2"
            src={squares}
            alt="иконка квадраты"
            onClick={() => {
              navigator.clipboard
                .writeText(order && order.back.tx.id)
                .then((clipText) => console.log(clipText))
                .catch((err) => {
                  console.log(err);
                  alert(
                    "Вам нужно дать браузеру разрешение на использование вашего буфера обмена"
                  );
                });
            }}
          />
        </div>
      </div>
      <div>
        <p>Посмотреть в блокчейн:</p>
        <ul className="flex flex-row space-x-2 mt-1">
          <li>
            <Link to={"#"}>
              <img src={blockchain} alt="иконка блокчейна" />
            </Link>
          </li>
          <li>
            <Link to={"#"}>
              <img src={blockchain} alt="иконка блокчейна" />
            </Link>
          </li>
          <li>
            <Link to={"#"}>
              <img src={blockchain} alt="иконка блокчейна" />
            </Link>
          </li>
        </ul>
      </div>
      <div>
         <p>Время отправки:</p>
         <p className="text-blue-200">{order && getStrData(order.back.tx.timeReg)}</p>
      </div>
      <div>
         <p>Попадание в блок:</p>
         <p className="text-blue-200">{order && (order.back.tx.timeBlock ? getStrData(order.back.tx.timeBlock) : '-')}</p>
      </div>
      <div>
         <p>Подтверждения:</p>
         <p className={classNames("text-blue-200", {
            "text-red-500":  Number(order && order.back.tx.confirmations) <= 0,
            "text-lime-300": Number(order && order.back.tx.confirmations) > 0
         })}>{order && order.back.tx.confirmations}</p>
      </div>
      <div>
         <p>Сумма:</p>
         <p className="text-blue-200">{order && `${order.back.tx.amount} ${order.back.code}`}</p>
      </div>
      <div>
         <p>Коммисия:</p>
         <p className="text-blue-200">{order && `${order.back.tx.fee} ${order.back.code}`}</p>
      </div>
    </div>
  );
};
