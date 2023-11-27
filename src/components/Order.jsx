import { OrderExchange } from "./OrderExchange";
import { OrderItems } from "./OrderItems";
import { Percents } from "./Percents";
import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";

// img
import ETHicon from "../images/coins/eth.svg";
import BTCicon from "../images/coins/btc.svg";
import { useState } from "react";

export const Order = () => {
  const iphone = useMediaQuery(
    "only screen and (min-width : 320px) and (max-width : 744px)"
  );
  const ipadMini = useMediaQuery(
    "only screen and (min-width : 744px) and (max-width : 1024px)"
  );
  const laptop = useMediaQuery(
    "only screen and (min-width : 1024px)"
  );
  const macbook = useMediaQuery("only screen and (min-width : 1024px)");
  const desctop = useMediaQuery("only screen and (min-width : 1280px)");

  const [sentCoin, setSentCoin] = useState({name: 'Bitcoin', img: BTCicon, shortTeg: 'BTC'});
  const [receivedCoin, setReceivedCoin] = useState({name: 'Ethereum', img: ETHicon, shortTeg: 'ETH'});


  
  return (
    <div className={classNames("flex flex-col items-center",{
      "max-w-[696px] px-6 rounded-[64px]": ipadMini,
      "w-[912px] px-24 rounded-[80px]": macbook,
      "px-24 rounded-[80px]": desctop,
      "bg-order mt-14 py-6": !iphone,
      "bg-transparent mt-6 py-0 max-w-tablet-container": iphone,
    })}>
      <h2 className="text-center text-3xl">Тип заказа</h2>
      <Percents />
      <OrderItems
        stateSentCoin={[sentCoin, setSentCoin]}
        stateReceivedCoin={[receivedCoin, setReceivedCoin]}
      />
      <OrderExchange receivedCoin={receivedCoin} />
      <p className="text-base font-light mt-4">
        Используя сайт и создавая обмен, вы соглашаетесь<br/> с <a href="#" className="font-normal">Условиями
        использования</a> и <a href="#" className="font-normal">Политикой конфиденциальности</a>
      </p>
    </div>
  );
};
