// comp
import { OrderItem } from "./OrderItem";

// img
import ETHicon from "../images/coins/eth.svg";
import BTCicon from "../images/coins/btc.svg";
import orderSwitch from '../images/order-switch.svg';

// lib
import { useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";

export const OrderItems = () => {
    const iphone = useMediaQuery(
        "only screen and (min-width : 320px) and (max-width : 744px)"
      );
      const miniOrder = useMediaQuery(
        "only screen and (max-width : 610px)"
      );
      const ipadMini = useMediaQuery(
        "only screen and (max-width : 744px)"
      );
      const laptop = useMediaQuery(
        "only screen and (min-width : 1024px)"
      );
      const macbook = useMediaQuery("only screen and (min-width : 1024px)");
      const desctop = useMediaQuery("only screen and (min-width : 1280px)");

      const [dropdownSendingCoin, setDropdownSendingCoin] = useState(false);
      const [dropdownReceivingCoin, setDropdownReceivingCoin] = useState(false);
      const [sentCoin, setSentCoin] = useState({name: "BTC", img: BTCicon});
      const [receivedCoin, setReceivedCoin] = useState({name: "ETH", img: ETHicon});
      const [sendingSumm, setSendingSumm] = useState(0.0);
      const [receivedSumm, setReceivedSumm] = useState(0.0);

      function dropdownCoinsMenuOpenHandler(setState, state) {
        if (dropdownSendingCoin) setDropdownSendingCoin(false);
        if (dropdownReceivingCoin) setDropdownReceivingCoin(false);
        setState(state);
      }

      function swapCoin(params) {
        const tmp = [sentCoin, sendingSumm];
        setSentCoin(receivedCoin);
        setSendingSumm(receivedSumm);
        setReceivedCoin(tmp[0]);
        setReceivedSumm(tmp[1]);
      }

    return (
        <div className={classNames(" flex flex-row items-center mt-10  w-full",{
            "flex-col": ipadMini,
        })}>
            <OrderItem
              title="Отправляете"
              stateSumm={[sendingSumm, setSendingSumm]}
              stateCoin={[sentCoin, setSentCoin]}
              dropdownState={dropdownSendingCoin}
              setDropdownState={(state) => dropdownCoinsMenuOpenHandler(setDropdownSendingCoin, state)}
            />
            {!ipadMini && <img onClick={swapCoin} src={orderSwitch} alt="switch" className="cursor-pointer"/>}
            {/* <img src={orderSwitch} alt="switch"/> */}
            <OrderItem
              title="Получаете"
              stateSumm={[receivedSumm, setReceivedSumm]}
              stateCoin={[receivedCoin, setReceivedCoin]}
              dropdownState={dropdownReceivingCoin}
              setDropdownState={(state) => dropdownCoinsMenuOpenHandler(setDropdownReceivingCoin, state)}
            />
        </div>
    );
}