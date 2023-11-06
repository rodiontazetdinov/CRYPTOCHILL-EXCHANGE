import "@splidejs/react-splide/css/core";

import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";

import wait from "../images/waitforcoin.svg";
import loader from "../images/loader_1.svg";
import loaderM from "../images/loader_m_1.svg";

export const SendingLoader = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const iphone = useMediaQuery(
    "only screen and (min-width : 320px) and (max-width : 744px)"
  );
  const ipadMini = useMediaQuery(
    "only screen and (min-width : 744px) and (max-width : 1150px)"
  );
  const macbook = useMediaQuery(
    "only screen and (min-width : 1024px) and (max-width : 1280px)"
  );
  const desctop = useMediaQuery("only screen and (min-width : 1440px)");

  return (
    <div className="flex flex-col w-full items-center bg-order rounded-3xl py-[32px] mt-8">
      <div className="flex flex-row items-center justify-center">
        <img className="mr-3" src={wait} alt="иконка ожидания обмена"/>
        <p className="text-2xl font-semibold">Ожидаем поступления средств</p>
      </div>
      <img className=" max-w-[1023px] mt-6" src={ipadMini ? loaderM : loader} alt="загрузка"/>
    </div>
  );
};
