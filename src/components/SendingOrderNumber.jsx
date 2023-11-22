import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";

import { useState } from "react";
import squaresImg from "../images/icons/squares.svg";

export const SendingOrderNumber = ({time = '29:52', rateType = 'Плавающий', crearedAt = '30.06.2023 06:21'}) => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const iphone = useMediaQuery(
    "only screen and (min-width : 320px) and (max-width : 744px)"
  );
  const ipadMini = useMediaQuery(
    "only screen and (min-width : 744px) and (max-width : 1024px)"
  );
  const macbook = useMediaQuery(
    "only screen and (min-width : 1024px) and (max-width : 1440px)"
  );
  const desctop = useMediaQuery("only screen and (min-width : 1440px)");
  const miniSending = useMediaQuery(
    "only screen and (min-width : 320px) and (max-width : 911px)"
  );
  const miniTop = useMediaQuery(
    "only screen and (min-width : 320px) and (max-width : 1210px)");
    const phone = useMediaQuery(
        "only screen and (min-width : 320px) and (max-width : 585px)"
      );

  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
  };

  return (
    <div
      className={classNames("flex flex-col bg-order pl-6 py-8 rounded-3xl text-left ", {
          'w-1/4': desctop || macbook,
          "w-1/2": miniTop && !phone,
          "w-full": phone
      })}
      onSubmit={handleSubmit}
    >
      <p className="text-2xl font-semibold">Номер заказа</p>
      <div className="flex flex-row items-center">
        <p className="text-3xl font-semibold text-blue-200">9ZAA46HG</p>
        <img src={squaresImg} alt="иконка квадраты" />
      </div>
      <p className="text-2xl font-semibold">Времени осталось</p>
      <p className="text-5xl font-bold text-blue-200">{time}</p>
      <p className="text-2xl font-semibold">Тип курса</p>
      <p className="text-2xl font-semibold text-blue-200">{rateType}</p>
      <p className="text-2xl font-semibold">Время создания</p>
      <p className="text-2xl font-semibold text-blue-200">{crearedAt}</p>
    </div>
  );
};