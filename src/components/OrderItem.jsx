import { OrderItemCoin } from "./OrderItemCoin";
import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";
import { DropdownListCoins } from "./DropdownListCoins";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const OrderItem = ({ title, stateCoin, stateSumm, dropdownState, setDropdownState}) => {
  const ipadMini = useMediaQuery("only screen and (max-width : 1024px)");
  const miniOrder = useMediaQuery("only screen and (max-width : 610px)");
  const laptop = useMediaQuery(
    "only screen and (min-width : 1024px)"
  );

  const [summ, setSumm] = stateSumm;

  function validateInput(input) {
    // Убираем все символы, кроме цифр, точек и запятых
    const sanitizedInput = input.replace(/[^0-9.,]/g, '');
  
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
  
  const handleChange = (event) => {
    setSumm(validateInput(event.target.value));
  }

  return (
    <div
      className={classNames(
        "bg-white bg-opacity-20 flex flex-col items-center p-3 rounded-[24px]",
        {
          "mt-2 w-[288px]": ipadMini,
          "mt-2 w-full max-w-mobile-container": miniOrder,
          "w-[347px]": laptop,
        }
      )}
    >
      <h3 className="text-3xl w-full text-left">{title}</h3>
      {/* <OrderItemCoin /> */}
      <div className="flex w-full h-12 z-10 mt-3 rounded-xl bg-input">
        {!dropdownState && (
          <input
            type="text"
            className={classNames(
              "flex-grow block bg-transparent outline-none font-mono text-2xl py-2 pl-6 pr-1 text-[#D7DFFF] no-scrollbar",
              {
                "max-w-[170px]": laptop,
                "min-w-[140px]": ipadMini,
              }
            )}
            onChange={(ev) => {
              handleChange(ev);
            }}
            value={summ}
          />
        )}
        <div className="flex-grow min-w-[110px]">
          <DropdownListCoins
            dropdownState={dropdownState}
            setDropdownState={setDropdownState}
            selectName='main-sent-coin'
            stateCoin={stateCoin}
          />
        </div>
      </div>
      <div className="flex flex-row justify-between w-full">
        <p className="text-left text-base mt-2">1 BTC ≈ 15.9754668 ETH</p>
        <p className="text-left text-base mt-2">51$</p>
      </div>
    </div>
  );
};
