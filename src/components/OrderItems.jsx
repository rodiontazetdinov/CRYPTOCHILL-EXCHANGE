// comp
import { OrderItem } from "./OrderItem";

// img
import orderSwitch from '../images/order-switch.svg';

// lib
import { useEffect, useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { closeDropdown, openDropdown, setOrderCreationState } from "../store/actions";
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
        if (amount < Number(state.creatingOrder.from.min)) return false
        else if (amount > Number(state.creatingOrder.from.max)) return false
        return true;
      }
      
      const setStateCoin = (name, which='from') => {
        let from, to;
        switch (which) {
          case 'to':
            // Если монеты одинаковые прост меняем местами
            const fromCoinName = name === state.creatingOrder.from.code ? state.creatingOrder.to.code : state.creatingOrder.from.code;
            from = `${numberOfCoinsSent} ${fromCoinName}`;
            to = name;
            break;
          default:
            const toCoinName = name === state.creatingOrder.to.code ? state.creatingOrder.from.code : state.creatingOrder.to.code;
            from =`${numberOfCoinsSent} ${name}`;
            to = toCoinName;
            break;
        }

        console.log(from, to);

        getPrice(from, to)
        .then((response) => {
          if (response.data === null) {
            alert('Упс, что-то пошло не так(');
          } else {
            dispatch(setOrderCreationState(response.data));
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
            setStateCoin(state.creatingOrder.from.code);
          }
        }, 1000);
        return () => clearTimeout(timer);
      }, [numberOfCoinsSent]);

      const setAmountCoin = (amount) => {
        setNumberOfCoinsSent(validateInput(amount));
      }

      const swapCoin = (from, to) => {
        getPrice(`${numberOfCoinsSent} ${from[1]}`, to)
        .then((response) => {
          if (response.data === null) {
            alert('Упс, что-то пошло не так(');
          } else {
            dispatch(setOrderCreationState(response.data));
          }
        })
        .catch((err) => console.error(err))
      }

      
    return (
        <div className={classNames(" flex flex-row items-center mt-10 w-full",{
            "flex-col": ipadMini,
        })}>
            <OrderItem
              title="Отправляете"
              dropdownState={dropdownSent}
              setDropdownState={() => dispatch(dropdownSent ? closeDropdown('coinSentOrder') : openDropdown('coinSentOrder'))}
              stateCoin={state.creatingOrder.from}
              setStateCoin={setStateCoin}
              setAmountCoin={setAmountCoin}
              nameCoinTo={state.creatingOrder.to.code}
              amount={numberOfCoinsSent}
              which="FROM"
            />
            {!ipadMini && <img onClick={() => swapCoin([state.creatingOrder.to.amount, state.creatingOrder.to.code], state.creatingOrder.from.code)} src={orderSwitch} alt="switch" className="cursor-pointer"/>}
            {/* <img src={orderSwitch} alt="switch"/> */}
            <OrderItem
              title="Получаете"
              dropdownState={dropdownReceived}
              setDropdownState={() => dispatch(dropdownReceived ? closeDropdown('coinReceivedOrder') : openDropdown('coinReceivedOrder'))}
              stateCoin={state.creatingOrder.to}
              setStateCoin={(name) => setStateCoin(name, 'to')}
              nameCoinTo={state.creatingOrder.from.code}
              amount={state.creatingOrder.to.amount}
              which="TO"
              float={!state.isFixed}
            />
        </div>
    );
}