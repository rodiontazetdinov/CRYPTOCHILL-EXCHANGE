import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { formatSeconds, formatDate, handleClickCopy } from "../utils/helpers";

import squaresImg from "../images/icons/squares.svg";

export const SendingOrderNumber = () => {
  // const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  // const iphone = useMediaQuery("only screen and (min-width : 320px) and (max-width : 744px)");
  // const ipadMini = useMediaQuery("only screen and (min-width : 744px) and (max-width : 1024px)");
  // const macbook = useMediaQuery("only screen and (min-width : 1024px) and (max-width : 1440px)");
  // const desctop = useMediaQuery("only screen and (min-width : 1440px)");
  // const miniSending = useMediaQuery("only screen and (min-width : 320px) and (max-width : 911px)");
  // const miniTop = useMediaQuery("only screen and (min-width : 320px) and (max-width : 1210px)");
  // const phone = useMediaQuery("only screen and (min-width : 320px) and (max-width : 585px)");

  // const [email, setEmail] = useState("");
  const [isIdCopied, setIdCopied] = useState(false);
  const order = useSelector((state) => state.order);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    setTimer(order && order.time.left);
  }, [order]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(timeout);
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
  };

  return (
    <div
      className={classNames(
        "flex flex-col bg-order px-6 py-8 rounded-3xl text-left space-y-4 min-w-[255px] flex-grow"
      )}
    >
      <p className="text-2xl font-semibold">Номер заказа</p>
      <div
        className="flex flex-row items-center cursor-pointer"
        onClick={() => handleClickCopy(order.id, setIdCopied)}
      >
        <p className={classNames("text-3xl font-semibold mr-1", {
          "text-blue-200": !isIdCopied,
          "text-[#95FF54]": isIdCopied,
        })}>
          {order && order.id}
        </p>
        <img
          src={squaresImg}
          alt="иконка квадраты"
        />
      </div>
      {order && order.status === "NEW" && (
        <div>
          <p className="text-2xl font-semibold">Времени осталось</p>
          <p className="text-5xl font-bold text-blue-200">
            {formatSeconds(order && timer)}
          </p>
        </div>
      )}
      {order && (order.status === "PENDING" || order.status === "EXCHANGE" || order.status === "WITHDRAW") && (
        <div>
          <p className="text-2xl font-semibold">Статус заказа</p>
          <p className="text-2xl font-bold text-blue-200">
            {"Получено"}
          </p>
        </div>
      )}
      {order && order.status === "DONE" && (
        <div>
          <p className="text-2xl font-semibold">Статус заказа</p>
          <p className="text-2xl font-bold text-lime-300">
            {order.emergency.choice === "REFUND" ? "Возвращено" :"Завершено"}
          </p>
        </div>
      )}
      {order && order.status === "EXPIRED" && (
        <div>
          <p className="text-2xl font-semibold">Статус заказа</p>
          <p className="text-2xl font-bold text-red-500">
            {"Заказ истёк"}
          </p>
        </div>
      )}
      {order && order.status === "EMERGENCY" && (
        <div>
          <p className="text-2xl font-semibold">Статус заказа</p>
          <p className="text-2xl font-bold text-red-500">
            {"Ответ пользователя"}
          </p>
        </div>
      )}
      <div>
        <p className="text-2xl font-semibold">Тип курса</p>
        <p className="text-2xl font-semibold text-blue-200">
          {order && order.type === "float" ? "Плавающий" : "Фиксированный"}
        </p>
      </div>
      <div>
        <p className="text-2xl font-semibold">Время создания</p>
        <p className="text-2xl font-semibold text-blue-200">
          {formatDate(order && order.time.reg)}
        </p>
      </div>
      {order && (order.status === "PENDING" || order.status === "EMERGENCY") && (
        <div>
          <p className="text-2xl font-semibold">Время получения</p>
          <p className="text-2xl font-semibold text-blue-200">
            {formatDate(order && order.time.start)}
          </p>
        </div>
      )}
      {order && order.status === "DONE" && (
        <div>
          <p className="text-2xl font-semibold">Время выполнения</p>
          <p className="text-2xl font-semibold text-blue-200">
            {formatDate(order && order.time.finish)}
          </p>
        </div>
      )}
    </div>
  );
};
