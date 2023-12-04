// comp
import { OrderItem } from "./OrderItem";

// img
import orderSwitch from '../images/order-switch.svg';

// lib
import { useEffect, useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { closeDropdown, openDropdown, setOrderCoins } from "../store/actions";
import { api } from "../utils/api";

export const OrderItems = ({ numberOfCoinsSent, setNumberOfCoinsSent }) => {

      const ipadMini = useMediaQuery("only screen and (max-width : 744px)");

      const state = useSelector(state => state);

      const dropdownSent = state.dropdowns.coinSentOrder;
      const dropdownReceived = state.dropdowns.coinReceivedOrder;

      const dispatch = useDispatch();

      const getPrice = (from, to) => {
        const [amount, name] = from.split(' ');
        const type = state.isFixed ? 'fixed' : 'float';
        return api.getPrice({
          fromCcy: name,
          toCcy: to,
          amount,
          direction: "from",
          type
        });
      }

      function checkLimit(amount) {
        if (amount < Number(state.order.from.min)) return false
        else if (amount > Number(state.order.from.max)) return false
        return true;
      }

      const setStateSentCoin = (name, amount) => {
        const from =`${amount ? amount : state.order.from.amount} ${name}`;
        const to = state.order.to.code;
        getPrice(from, to)
          .then((response) => {
            if (response.data === null) {
              alert('Упс, что-то пошло не так(');
            } else {
              dispatch(setOrderCoins(response.data));
            }
          })
          .catch((err) => console.error(err));
      }

      const setStateReceivedCoin = (name) => {
        const from = `${state.order.from.amount} ${state.order.from.code}`;
        const to = name;
        getPrice(from, to)
        .then((response) => {
          if (response.data === null) {
            alert('Упс, что-то пошло не так(');
          } else {
            dispatch(setOrderCoins(response.data));
          }
        })
          .catch((err) => console.error(err));
      }

      function validateInput(input) {
        // Убираем все символы, кроме цифр, точек и запятых
        const sanitizedInput = input.replace(/[^0-9.,]/g, '');
        if (sanitizedInput === '') return '';

        // Если первый символ в строке точка, перед ней ставим 0
        if (sanitizedInput.startsWith('.')) {
          return `0${sanitizedInput.replace(/\./g, '')}`;
        }

        // Если первая цифра 0, после неё ставим точку
        if (sanitizedInput.startsWith('0') && sanitizedInput.length > 1) {
          const restOfInput = sanitizedInput.slice(1);
          return `0.${restOfInput.replace(/[.,]/g, '')}`;
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

      useEffect(() => {
        const timer = setTimeout(() => {
          if (Number(numberOfCoinsSent) > 0 && checkLimit(numberOfCoinsSent)) {
            setStateSentCoin(state.order.from.code, numberOfCoinsSent);
          }
        }, 1000);
        return () => clearTimeout(timer);
      }, [numberOfCoinsSent]);

      const setAmountCoin = (event) => {
        setNumberOfCoinsSent(validateInput(event.target.value));
      }

      const swapCoin = (from, to) => {
        getPrice(`${from[0]} ${from[1]}`, to)
        .then((response) => {
          if (response.data === null) {
            alert('Упс, что-то пошло не так(');
          } else {
            dispatch(setOrderCoins(response.data));
          }
        })
          .catch((err) => console.error(err));
      }
      
    return (
        <div className={classNames(" flex flex-row items-center mt-10 w-full",{
            "flex-col": ipadMini,
        })}>
            <OrderItem
              title="Отправляете"
              dropdownState={dropdownSent}
              setDropdownState={() => dispatch(dropdownSent ? closeDropdown('coinSentOrder') : openDropdown('coinSentOrder'))}
              stateCoin={state.order.from}
              setStateCoin={(name) => setStateSentCoin(name, state.order.from.amount)}
              setAmountCoin={setAmountCoin}
              nameCoinTo={state.order.to.code}
              amount={numberOfCoinsSent}
              warningShow={true}
            />
            {!ipadMini && <img onClick={() => swapCoin([state.order.to.amount, state.order.to.code], state.order.from.code)} src={orderSwitch} alt="switch" className="cursor-pointer"/>}
            {/* <img src={orderSwitch} alt="switch"/> */}
            <OrderItem
              title="Получаете"
              dropdownState={dropdownReceived}
              setDropdownState={() => dispatch(dropdownReceived ? closeDropdown('coinReceivedOrder') : openDropdown('coinReceivedOrder'))}
              stateCoin={state.order.to}
              setStateCoin={setStateReceivedCoin}
              nameCoinTo={state.order.from.code}
              amount={state.order.to.amount}
              warningShow={false}
              float={!state.isFixed}
            />
        </div>
    );
}