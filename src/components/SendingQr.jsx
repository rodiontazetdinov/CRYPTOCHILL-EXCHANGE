import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";

import { useState } from "react";
import qr from "../images/sending-icons/qr.svg";

export const SendingQr = ({
  time = "29:52",
  rateType = "Плавающий",
  crearedAt = "30.06.2023 06:21",
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

  const [isActive, setIsActive] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
  };

  return (
    <div
      className="flex flex-col bg-order px-8 py-8 rounded-3xl text-left w-full"
      onSubmit={handleSubmit}
    >
      <img className="p-8" src={qr} />
      <div className="flex flex-row items-center w-full px-2 py-1">
        <button className={classNames("bg-btns")}>адрес</button>
        <button className={classNames("bg-btns")}>с суммой</button>
      </div>
    </div>
  );
};
