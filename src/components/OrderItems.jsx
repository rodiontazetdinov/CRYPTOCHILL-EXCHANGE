// comp
import { OrderItem } from "./OrderItem";

// img
import orderSwitch from '../images/order-switch.svg';

// lib
import { useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { closeDropdown, openDropdown } from "../store/actions";

export const OrderItems = ({ stateSentCoin, stateReceivedCoin }) => {

      const ipadMini = useMediaQuery(
        "only screen and (max-width : 744px)"
      );
      
      const [sendingSumm, setSendingSumm] = useState(0.0);
      const [receivedSumm, setReceivedSumm] = useState(0.0);
      const [sentCoin, setSentCoin] = stateSentCoin;
      const [receivedCoin, setReceivedCoin] = stateReceivedCoin;

      // ТИПО КУРС
      const [ rateSentCoin, setRateSentCoin ] = useState("1 BTC ≈ 15.9754668 ETH");
      const [ rateReceivedCoin, setRateReceivedCoin ] = useState("1 ETH ≈ 0.5754668 BTC");

      const dropdownSent = useSelector(state => state.dropdowns.coinSentOrder);
      const dropdownReceived = useSelector(state => state.dropdowns.coinReceivedOrder);
      const dispatch = useDispatch();

      function swapCoin(params) {
        const tmp = [sentCoin, sendingSumm, rateSentCoin];
        setSentCoin(receivedCoin);
        setSendingSumm(receivedSumm);
        setRateSentCoin(rateReceivedCoin);
        setReceivedCoin(tmp[0]);
        setReceivedSumm(tmp[1]);
        setRateReceivedCoin(tmp[2]);
      }

    return (
        <div className={classNames(" flex flex-row items-center mt-10  w-full",{
            "flex-col": ipadMini,
        })}>
            <OrderItem
              title="Отправляете"
              dropdownState={dropdownSent}
              setDropdownState={() => dispatch(dropdownSent ? closeDropdown('coinSentOrder') : openDropdown('coinSentOrder'))}
              stateSumm={[sendingSumm, setSendingSumm]}
              stateCoin={[sentCoin, setSentCoin]}
              rate={ rateSentCoin }
            />
            {!ipadMini && <img onClick={swapCoin} src={orderSwitch} alt="switch" className="cursor-pointer"/>}
            {/* <img src={orderSwitch} alt="switch"/> */}
            <OrderItem
              title="Получаете"
              dropdownState={dropdownReceived}
              setDropdownState={() => dispatch(dropdownReceived ? closeDropdown('coinReceivedOrder') : openDropdown('coinReceivedOrder'))}
              stateSumm={[receivedSumm, setReceivedSumm]}
              stateCoin={[receivedCoin, setReceivedCoin]}
              rate={ rateReceivedCoin }
            />
        </div>
    );
}