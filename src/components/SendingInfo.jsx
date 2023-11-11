import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";

import { useState } from "react";
import qr from "../images/sending-icons/qr.svg";
import squares from "../images/icons/squares.svg";

export const SendingInfo = ({
  time = "29:52",
  rateType = "Плавающий",
  crearedAt = "30.06.2023 06:21",
  coin = "24.000 BTC",
  adressFrom = "agt43267hyt87jhopoliyt89hg7tr656",
  adressTo = "5hgjyth653589bvgrwsd342bk9875ggh7",
}) => {
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
    "only screen and (min-width : 320px) and (max-width : 1210px)"
  );
  const phone = useMediaQuery(
    "only screen and (min-width : 320px) and (max-width : 585px)"
  );

  const [isActive, setIsActive] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
  };

  return (
    <div
      className={classNames(
        "flex flex-col bg-order rounded-3xl text-left justify-between",
        {
          "w-2/4": !miniTop,
          "w-full": miniTop,
          "text-xl p-6 space-y-4": phone,
            "p-8": !phone
        }
      )}
      onSubmit={handleSubmit}
    >
      <div>
        <p className="text-3xl font-semibold">
          {`Отправьте `}{phone && <br/>}
          <span className="font-mono text-blue-200">{coin}</span>{phone && <br/>} {` на адрес`}
        </p>
        <div className={classNames("flex flex-row font-semibold space-x-2  mt-6",{
            "text-xl items-start": phone,
            "text-2xl items-center": !phone
        })}>
          <p className="break-all">{adressFrom}</p>
          <img src={squares} alt="иконка квадраты" />
        </div>
        <p className={classNames("text-blue-200 mt-4 text-base",{

        })}>
          Курс будет зафиксирован после получения подтверждений сети
        </p>
      </div>
      <div>
        <p className={classNames("text-blue-200 text-xl font-semibold",{
            "text-2xl": phone,
            "text-3xl": !phone
        })}>
          Адрес получения BTC
        </p>
        <div className={classNames("flex flex-row font-semibold space-x-2 mt-6",{
            "text-xl items-start": phone,
            "text-2xl items-center": !phone
        })}>
          <p className="break-all">{adressTo}</p>
          <img src={squares} alt="иконка квадраты" />
        </div>
      </div>
    </div>
  );
};
