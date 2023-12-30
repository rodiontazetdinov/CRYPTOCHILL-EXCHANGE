import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { api } from "../utils/api";

import qr from "../images/sending-icons/qr.svg";

export const SendingQr = () => {

  const miniTop = useMediaQuery(
    "only screen and (min-width : 320px) and (max-width : 1210px)");
    const phone = useMediaQuery(
        "only screen and (min-width : 320px) and (max-width : 585px)"
      );

  const order = useSelector((state) => state.order);
  const [counterQr, setCounterQr] = useState(false);

  const [listOfQRs, setListOfQRs] = useState([{
      "title": "QR еще не сгенерирован",
      "src": qr,
      "checked": true
  }]);

  const handleActiveQR = (nameQR) => {
    setListOfQRs(listOfQRs.map((item) => {
      if (item.title === nameQR) {
        item.checked = true;
      } else {
        item.checked = false;
      }
      return item;
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
  };

  useEffect(() => {
    order && !counterQr &&
    api.getQr({id: order.id, token: order.token})
    .then((response) => {
      const listQR = response.data.map((item, index) => {
          item.checked = index === 0 ? true : false;
          return item;
      });
      console.log(listQR);
      setListOfQRs(listQR);
      setCounterQr(true);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [order]);

  return (
    <div
      className={classNames("flex flex-col bg-order px-6 py-8 rounded-3xl text-left space-y-4", {
          "w-1/2": miniTop && !phone,
          "w-1/4": !miniTop,
          'w-full': phone,
      })}
      onSubmit={handleSubmit}
    >
      <img className="bg-white p-6 rounded-2xl" src={listOfQRs.find((qr) => qr.checked)?.src} alt="qr код"/>
      <div className="flex flex-row items-center w-full px-1 py-1 bg-purple-800 rounded-2xl space-x-2 h-12">
        {listOfQRs.map((item) => {
          return (
            <button
              key={item.title}
              className={classNames(" font-semibold flex items-center w-full text-center justify-center h-full", {
                'bg-btns rounded-xl': item.checked,
                'text-xl': listOfQRs.length < 3,
                'text-sm': listOfQRs.length >= 3,
              })} 
              onClick={() => handleActiveQR(item.title)}
            >{item.title === "With amount" ? "С суммой" : item.title === "Address" ? "Адрес" : item.title}</button>
          );
        })}
      </div>
    </div>
  );
};
