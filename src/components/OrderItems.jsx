// comp
import { OrderItem } from "./OrderItem";

// img
import orderSwitch from '../images/order-switch.svg';
import orderSwitchMini from '../images/order-switch-mini.svg';

// lib
import { useEffect, useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { closeDropdown, openDropdown, setOrderCreationState } from "../store/actions";
import { api } from "../utils/api";


export const OrderItems = ({
  numberOfCoinsSent,
  setNumberOfCoinsSent,
}) => {
      const ipadMini = useMediaQuery("only screen and (max-width : 744px)");

      const state = useSelector(state => state);

      const [ coinSend, setCoinSent ] = useState(state.creatingOrder.from.code);
      const [ coinRecv, setCoinRecv ] = useState(state.creatingOrder.to.code);
      
      const dropdownSent = state.dropdowns.coinSentOrder;
      const dropdownReceived = state.dropdowns.coinReceivedOrder;

      const dispatch = useDispatch();

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
        const amount = numberOfCoinsSent;
        let fromCcy = coinSend;
        let toCcy = coinRecv;

        // Если название коинов одинаковое, меняем их местами:
        if (fromCcy === state.creatingOrder.to.code) {
          toCcy = state.creatingOrder.from.code;
        } else if (toCcy === state.creatingOrder.from.code) {
          fromCcy = state.creatingOrder.to.code;
        }

        const timer = setTimeout(() => {
          if (Number(amount) > 0) {
            const type = state.isFixed ? 'fixed' : 'float';

            api.getPrice({ fromCcy, toCcy, amount, direction: "from", type })
              .then((response) => {
                if (response.data === null) {
                  alert('Упс, что-то пошло не так(');
                } else {
                  dispatch(setOrderCreationState(response.data));
                  if (response.data.to.amount < 0 || response.data.from.amount < response.data.from.min) {
                    setAmountCoin(response.data.from.min);
                  }
                }
              })
              .catch((err) => console.error(err));
          }
        }, 1000);
        return () => clearTimeout(timer);
        
      }, [numberOfCoinsSent, coinSend, coinRecv]);

      const setAmountCoin = (amount) => {
          setNumberOfCoinsSent(validateInput(amount));
      }

      const swapCoin = () => {
        setNumberOfCoinsSent(state.creatingOrder.to.amount);
        setCoinSent(state.creatingOrder.to.code);
        setCoinRecv(state.creatingOrder.from.code)
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
              setStateCoin={setCoinSent}
              setAmountCoin={setAmountCoin}
              nameCoinTo={state.creatingOrder.to.code}
              amount={numberOfCoinsSent}
              which="FROM"
            />
            {!ipadMini && <img onClick={() => swapCoin([state.creatingOrder.to.amount, state.creatingOrder.to.code], state.creatingOrder.from.code)} src={orderSwitch} alt="switch" className="cursor-pointer"/>}
            {ipadMini && <img onClick={() => swapCoin([state.creatingOrder.to.amount, state.creatingOrder.to.code], state.creatingOrder.from.code)} src={orderSwitchMini} alt="switch" className="cursor-pointer absolute right-3.5 top-[353px]"/>}
            <OrderItem
              title="Получаете"
              dropdownState={dropdownReceived}
              setDropdownState={() => dispatch(dropdownReceived ? closeDropdown('coinReceivedOrder') : openDropdown('coinReceivedOrder'))}
              stateCoin={state.creatingOrder.to}
              setStateCoin={setCoinRecv}
              nameCoinTo={state.creatingOrder.from.code}
              amount={state.creatingOrder.to.amount}
              which="TO"
              float={!state.isFixed}
            />
        </div>
    );
}