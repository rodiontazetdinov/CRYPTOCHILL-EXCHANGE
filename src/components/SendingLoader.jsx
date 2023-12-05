import "@splidejs/react-splide/css/core";

import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";
import { useSelector } from "react-redux";

import wait from "../images/loader-images/waitforcoin.svg";
import loader from "../images/loader-images/loader_1.svg";
import loaderM from "../images/loader-images/loader_m_1.svg";
import loaderS from "../images/loader-images/loader_s_1.svg";
import aprove from "../images/loader-images/waitingforaprove.svg";
import loaderAprove from "../images/loader-images/loader_2.svg";
import loaderAproveM from "../images/loader-images/loader_m_2.svg";
import loaderAproveS from "../images/loader-images/loader_s_2.svg";
import exchanging from "../images/loader-images/exchanging.svg";
import loaderExchanging from "../images/loader-images/loader_3.svg";
import loaderExchangingM from "../images/loader-images/loader_m_3.svg";
import loaderExchangingS from "../images/loader-images/loader_s_3.svg";
import done from "../images/loader-images/done.svg";
import loaderDone from "../images/loader-images/loader_4.svg";
import loaderDoneM from "../images/loader-images/loader_m_4.svg";
import loaderDoneS from "../images/loader-images/loader_s_4.svg";

export const SendingLoader = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const iphone = useMediaQuery(
    "only screen and (min-width : 320px) and (max-width : 744px)"
  );
  const ipadMini = useMediaQuery(
    "only screen and (min-width : 744px) and (max-width : 1150px)"
  );
  const macbook = useMediaQuery(
    "only screen and (min-width : 1024px) and (max-width : 1280px)"
  );
  const desctop = useMediaQuery("only screen and (min-width : 1440px)");

  const order = useSelector((state) => state.order);

  return (
    <div className="flex flex-col w-full items-center bg-order rounded-3xl py-[32px] mt-8">
      {order && order.status === "NEW" && (
        <>
          <div className="flex flex-row items-center justify-center">
            <img
              className={classNames("mr-3", {
                "w-12 h-12": !iphone,
                "w-6 h-6": iphone,
              })}
              src={wait}
              alt="иконка ожидания обмена"
            />
            <p
              className={classNames("", {
                "text-base font-normal": iphone,
                "text-2xl font-semibold": !iphone,
              })}
            >
              Ожидаем поступления средств
            </p>
          </div>
          <img
            className=" max-w-[1023px] mt-6"
            src={ipadMini ? loaderM : iphone ? loaderS : loader}
            alt="загрузка"
          />
        </>
      )}
      {order && order.status === "PENDING" && (
        <>
          <div className="flex flex-row items-center justify-center">
            <img
              className={classNames("mr-3", {
                "w-12 h-12": !iphone,
                "w-6 h-6": iphone,
              })}
              src={aprove}
              alt="иконка ожидания обмена"
            />
            <p
              className={classNames("", {
                "text-base font-normal": iphone,
                "text-2xl font-semibold": !iphone,
              })}
            >
              Ожидаем подтверждения сети
            </p>
          </div>
          <img
            className=" max-w-[1023px] mt-6"
            src={
              ipadMini ? loaderAproveM : iphone ? loaderAproveS : loaderAprove
            }
            alt="загрузка"
          />
        </>
      )}
      {order &&
        (order.status === "EXCHANGE" || order.status === "WITHDRAW") && (
          <>
            <div className="flex flex-row items-center justify-center">
              <img
                className={classNames("mr-3", {
                  "w-12 h-12": !iphone,
                  "w-6 h-6": iphone,
                })}
                src={exchanging}
                alt="иконка ожидания обмена"
              />
              <p
                className={classNames("", {
                  "text-base font-normal": iphone,
                  "text-2xl font-semibold": !iphone,
                })}
              >
                Ожидаем подтверждения сети
              </p>
            </div>
            <img
              className=" max-w-[1023px] mt-6"
              src={
                ipadMini
                  ? loaderExchangingM
                  : iphone
                  ? loaderExchangingS
                  : loaderExchanging
              }
              alt="загрузка"
            />
          </>
        )}
      {order && order.status === "DONE" && (
        <>
          <div className="flex flex-row items-center justify-center">
            <img
              className={classNames("mr-3", {
                "w-12 h-12": !iphone,
                "w-6 h-6": iphone,
              })}
              src={done}
              alt="иконка ожидания обмена"
            />
            <p
              className={classNames("", {
                "text-base font-normal": iphone,
                "text-2xl font-semibold": !iphone,
              })}
            >
              Обмен завершен
            </p>
          </div>
          <img
            className=" max-w-[1023px] mt-6"
            src={ipadMini ? loaderDoneM : iphone ? loaderDoneS : loaderDone}
            alt="загрузка"
          />
        </>
      )}
      {/* <img className=" max-w-[1023px] mt-6" src={ipadMini ? loaderM : iphone ? loaderS : loader} alt="загрузка"/> */}
    </div>
  );
};
