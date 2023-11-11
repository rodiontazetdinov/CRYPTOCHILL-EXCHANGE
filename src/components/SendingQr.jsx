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

  const miniTop = useMediaQuery(
    "only screen and (min-width : 320px) and (max-width : 1210px)");
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
      className={classNames("flex flex-col bg-order px-8 py-8 rounded-3xl text-left space-y-4",{
          "w-1/2": miniTop && !phone,
          "w-1/4": !miniTop,
          'w-full': phone,
      })}
      onSubmit={handleSubmit}
    >
      <img className="" src={qr} />
      <div className="flex flex-row items-center w-full px-2 py-1 bg-purple-800 rounded-2xl space-x-2 h-12">
        <button className={classNames("text-xl font-semibold flex items-center w-full text-center justify-center h-full",{
            'bg-btns rounded-xl': !isActive
        })} onClick={() => setIsActive((prev) => !prev)}>адрес</button>
        <button className={classNames("text-xl font-semibold flex items-center w-full text-center justify-center h-full",{
            'bg-btns rounded-xl': isActive
        })} onClick={() => setIsActive((prev) => !prev)}>с суммой</button>
      </div>
    </div>
  );
};
