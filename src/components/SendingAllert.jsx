import warning from "../images/icons/warningRed.svg";

import { useSelector } from "react-redux";
import classNames from "classnames";
import { useMediaQuery } from "@uidotdev/usehooks";

export const SendingAllert = () => {
  const iphone = useMediaQuery(
    "only screen and (min-width : 320px) and (max-width : 744px)"
  );

  const order = useSelector((state) => state.order);

  return (
    <div
      className={classNames("bg-order rounded-3xl w-full", {
        "px-12 py-10": !iphone,
        "px-4 py-10": iphone,
      })}
    >
      {order && order.status === "NEW" && (
        <>
          <div
            className={classNames(
              "flex items-start text-[32px] font-bold mb-6",
              {
                "text-xl": iphone,
              }
            )}
          >
            <img
              className="mr-2 w-10 h-10 self-baseline"
              src={warning}
              alt="warning"
            />
            <p className="text-left text-2xl font-semibold">
              Ждём появления транзакции в сети блокчейн
            </p>
          </div>
          <div className="flex flex-col items-start text-left text-base font-normal">
            На адрес указанный в заказе, ещё не поступили средтсва. Мы
            осуществим обмен средств после поступления транзакции и получения
            необходимого количества подтверждений сети блокчейн.
          </div>
        </>
      )}
      {order && order.status === "WITHDRAW" && (
        <>
          <div
            className={classNames(
              "flex items-start text-[32px] font-bold mb-6",
              {
                "text-xl": iphone,
              }
            )}
          >
            <img
              className="mr-2 w-10 h-10 self-baseline"
              src={warning}
              alt="warning"
            />
            <p className="text-left text-2xl font-semibold">
              Скоро мы осуществим возврат суммы вашего заказа
            </p>
          </div>
          <div className="flex flex-col items-start text-left text-base font-normal">
            Мы получили вашу транзакцию, после получения необходимого количества
            подтверждений сети блокчейн, возврат будет осуществлен на адрес{" "}
            {
              <span className="font-semibold text-blue-200">
                {order.back.address}
              </span>
            }
          </div>
        </>
      )}
      {order && (order.status === "PENDING" || order.status === "EXCHANGE") && (
        <>
          <div
            className={classNames(
              "flex items-start text-[32px] font-bold mb-6",
              {
                "text-xl": iphone,
              }
            )}
          >
            <img
              className="mr-2 w-10 h-10 self-baseline"
              src={warning}
              alt="warning"
            />
            <p className="text-left text-2xl font-semibold">
              Ваш заказ скоро будет выполнен
            </p>
          </div>
          <div className="flex flex-col items-start text-left text-base font-normal">
            Мы получили вашу транзакцию, после получениия необходимого
            количества подтверждений сети блокчейн, мы осуществим обмен средств
          </div>
        </>
      )}
      {order &&
        order.status === "EXPIRED" &&
        order.emergency.choice === "EXCHANGE" && (
          <>
            <div
              className={classNames(
                "flex items-start text-[32px] font-bold mb-6",
                {
                  "text-xl": iphone,
                }
              )}
            >
              <img
                className="mr-2 w-10 h-10 self-baseline"
                src={warning}
                alt="warning"
              />
              <p className="text-left text-2xl font-semibold">
                Ждем появления транззакции в сети блокчейн
              </p>
            </div>
            <div className="flex flex-col items-start text-left text-base font-normal">
              На адрес указанный в заказе, ещё не поступили средтсва. Мы
              осуществим обмен средств после поступления транзакции и получения
              необходимого количества подтверждений сети блокчейн.
            </div>
          </>
        )}
      {order &&
        order.status === "EXPIRED" &&
        order.emergency.choice === "REFUND" && (
          <>
            <div
              className={classNames(
                "flex items-start text-[32px] font-bold mb-6",
                {
                  "text-xl": iphone,
                }
              )}
            >
              <img
                className="mr-2 w-10 h-10 self-baseline"
                src={warning}
                alt="warning"
              />
              <p className="text-left text-2xl font-semibold">
                Ждем появления транззакции в сети блокчейн
              </p>
            </div>
            <div className="flex flex-col items-start text-left text-base font-normal">
              На адрес, указанный в заказе, ещё не поступили средства. Когда мы
              получим нужное количество подтверждений сети блокчейн, средства
              будут возвращены на адрес{" "}
            {
              <span className="font-semibold text-blue-200">
                {order.back.address}
              </span>
            }
            </div>
          </>
        )}
    </div>
  );
};
