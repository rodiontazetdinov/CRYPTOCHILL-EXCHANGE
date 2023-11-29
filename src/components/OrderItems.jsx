// comp
import { OrderItem } from "./OrderItem";

// img
import orderSwitch from '../images/order-switch.svg';

// lib
import { useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { closeDropdown, openDropdown, setOrderCoins } from "../store/actions";

export const OrderItems = () => {

      const ipadMini = useMediaQuery(
        "only screen and (max-width : 744px)"
      );

      let timerIdSetAmoumtCoin;

      const state = useSelector(state => state);

      const [ numberOfCoinsSent, setNumberOfCoinsSent ] = useState(state.order.from.amount);

      const dropdownSent = state.dropdowns.coinSentOrder;
      const dropdownReceived = state.dropdowns.coinReceivedOrder;

      const dispatch = useDispatch();

      const getPrice = async (from, to, type = 'float') => {
        const response = await fetch("http://localhost:5000/getPrice", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from,
            to,
            type
          })
        });
        return response.json();
      }

      const setStateSentCoin = (name, amount) => {
        const from =`${amount ?amount : state.order.from.amount} ${name}`;
        const to = state.order.to.currency;
        const type = state.isFixed ? 'fixed' : 'float';
        getPrice(from, to, type)
          .then((data) => dispatch(setOrderCoins(data)))
          .catch((err) => console.error(err));
      }

      function validateInput(input) {
        // Убираем все символы, кроме цифр, точек и запятых
        const sanitizedInput = input.replace(/[^0-9.,]/g, '');
        if (sanitizedInput === '') return '';
        // Если ввод пустой, возвращаем '0'
      
        // Если первая цифра 0, после неё ставим точку
        if (sanitizedInput.startsWith('0') && sanitizedInput.length > 1) {
          const restOfInput = sanitizedInput.slice(1);
          return `0.${restOfInput.replace(/\./g, '')}`;
        }
      
        // Заменяем запятые на точки
        const commaToDot = sanitizedInput.replace(',', '.');
      
        // Ограничиваем длину строки до 17 символов
        const truncatedInput = commaToDot.slice(0, 17);
      
        // Удаляем все точки, кроме первой
        const dotCount = truncatedInput.split('.').length - 1;
        if (dotCount > 1) {
          const firstDotIndex = truncatedInput.indexOf('.');
          const beforeFirstDot = truncatedInput.slice(0, firstDotIndex);
          const afterFirstDot = truncatedInput.slice(firstDotIndex + 1);
          return `${beforeFirstDot}.${afterFirstDot.replace(/\./g, '')}`;
        }
      
        return truncatedInput;
      }

      const setAmountCoin = (event) => {
        clearTimeout(timerIdSetAmoumtCoin);
        setNumberOfCoinsSent(validateInput(event.target.value));
        timerIdSetAmoumtCoin = setTimeout(setStateSentCoin, 3000, state.order.from.currency, numberOfCoinsSent);
      }

      const setStateReceivedCoin = (name) => {
        const from = `${state.order.from.amount} ${state.order.from.currency}`;
        const to = name;
        const type = state.isFixed ? 'fixed' : 'float';
        getPrice(from, to, type)
          .then((data) => dispatch(setOrderCoins(data)))
          .catch((err) => console.error(err));
      }

      const swapCoin = (from, to) => {
        getPrice(`${from[0]} ${from[1]}`, to, state.orderRate)
          .then((data) => dispatch(setOrderCoins(data)))
          .catch((err) => console.error(err));
      }

    return (
        <div className={classNames(" flex flex-row items-center mt-10  w-full",{
            "flex-col": ipadMini,
        })}>
            <OrderItem
              title="Отправляете"
              dropdownState={dropdownSent}
              setDropdownState={() => dispatch(dropdownSent ? closeDropdown('coinSentOrder') : openDropdown('coinSentOrder'))}
              stateCoin={state.order.from}
              setStateCoin={(name) => setStateSentCoin(name, state.order.from.amount)}
              setAmountCoin={setAmountCoin}
              nameCoinTo={state.order.to.currency}
              amount={numberOfCoinsSent}
            />
            {!ipadMini && <img onClick={() => swapCoin([state.order.to.amount, state.order.to.currency], state.order.from.currency)} src={orderSwitch} alt="switch" className="cursor-pointer"/>}
            {/* <img src={orderSwitch} alt="switch"/> */}
            <OrderItem
              title="Получаете"
              dropdownState={dropdownReceived}
              setDropdownState={() => dispatch(dropdownReceived ? closeDropdown('coinReceivedOrder') : openDropdown('coinReceivedOrder'))}
              stateCoin={state.order.to}
              setStateCoin={setStateReceivedCoin}
              nameCoinTo={state.order.from.currency}
              amount={state.order.to.amount}
            />
        </div>
    );
}