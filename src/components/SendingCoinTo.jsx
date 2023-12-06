import "@splidejs/react-splide/css/core";
import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";
import { useSelector } from "react-redux";

import btc from "../images/coins/btc.svg";
import eth from "../images/coins/eth.svg";
import arrow from "../images/pink-arrow.svg";

export const SendingCoinTo = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const iphone = useMediaQuery("only screen and (min-width : 320px) and (max-width : 600px)");
  const ipadMini = useMediaQuery("only screen and (min-width : 744px) and (max-width : 1024px)");
  const macbook = useMediaQuery("only screen and (min-width : 1024px) and (max-width : 1280px)");
  const desctop = useMediaQuery("only screen and (min-width : 1440px)");
  const miniSending = useMediaQuery("only screen and (min-width : 320px) and (max-width : 1000px)");

  const order = useSelector((state) => state.order);
  const coins = useSelector((state) => state.coins);
  const coinFrom = coins.find((coin) => coin.code === order.from.code);
  const coinTo = coins.find((coin) => coin.code === order.to.code);
  
  return (
    <div
      className={classNames("flex   mt-6", {
        "flex-col self-start justify-left ml-6 relative": miniSending && !iphone,
        "flex-row mx-auto space-x-4": !miniSending,
        "flex-col justify-left ml-4 relative": iphone,
      })}
    >
      <div
        className={classNames("flex flex-row ", {
          "mb-4": miniSending,
          "space-x-4": !miniSending,
        })}
      >
        <div
          className={classNames(" flex flex-col ", {
            "order-2 text-left": miniSending,
            "order-1 text-right space-y-1": !miniSending,
          })}
        >
          <p className="text-xl font-semibold">Вы отправляете</p>
          <p className="text-xl font-semibold">
            <span className="font-mono text-2xl">{order && order.from.amount}</span> {order && order.from.code}
          </p>
          <p className="text-base">{order && order.from.address}</p>
        </div>
        <img
          className={classNames("w-20 h-20", {
            "w-20 h-20": !iphone,
            "w-8 h-8": iphone,
            "order-1 mr-4": miniSending,
            "order-2": !miniSending,
          })}
          src={coinFrom?.logo}
          alt="монета 1"
        />
      </div>
      {!miniSending && <img className="w-16 h-16" src={arrow} />}
      <div
        className={classNames("flex flex-row ", {
          "": miniSending,
          "space-x-4": !miniSending,
        })}
      >
        <img
          className={classNames("", {
            "w-20 h-20": !iphone,
            "w-8 h-8": iphone,
            "mr-4": miniSending,
            "": !miniSending,
          })}
          src={coinTo?.logo}
          alt="монета 2"
        />
        <div
          className={classNames("text-left flex flex-col ", {
            "": miniSending,
            "space-y-1": !miniSending,
          })}
        >
          <p className="text-xl font-semibold">Вы получаете</p>
          <p className="text-xl font-semibold">
            <span className="font-mono text-2xl">{order && order.to.amount}</span> {order && order.to.code}
          </p>
          <p className="text-base">{order && order.to.address}</p>
        </div>
      </div>
      {miniSending && !iphone && (
        <img
          className="w-16 h-16 absolute top-[20%] left-[500px] rotate-90"
          src={arrow}
        />
      )}
    </div>
  );
};
