import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";

import { SendingLoader } from "../components/SendingLoader";
import { SendingCoinTo } from "../components/SendingCoinTo";
import { useEffect, useState } from "react";
import { SendingToKnow } from "../components/SendingToKnow";
import { SendingNotifications } from "../components/SendingNotifications";
import { SendingOrderNumber } from "../components/SendingOrderNumber";
import { SendingQr } from "../components/SendingQr";
import { SendingInfo } from "../components/SendingInfo";
import { api } from "../utils/api";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setOrder } from "../store/actions";

export const SendingPage = () => {
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

  const dispatch = useDispatch();

  const [isWaiting, setIsWaiting] = useState(false);
  const [isAprroved, setIsApproved] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const [sorder, setSorder] = useState({
    "id": "KZ9ZUZ",
    "type": "float",
    "email": "",
    "status": "NEW",
    "time": {
        "reg": 1701433496,
        "start": null,
        "finish": null,
        "update": 1701433496,
        "expiration": 1701435296,
        "left": 1744
    },
    "from": {
        "code": "LTC",
        "coin": "LTC",
        "network": "LTC",
        "name": "Litecoin",
        "alias": "litecoin",
        "amount": "0.55185700",
        "address": "ltc1qxhtlaj79j5kehz6mxdnqxj75upch330qgxa3ft",
        "addressAlt": null,
        "tag": "",
        "tagName": null,
        "reqConfirmations": 2,
        "maxConfirmations": 12,
        "tx": {
            "id": null,
            "amount": null,
            "fee": null,
            "ccyfee": null,
            "timeReg": null,
            "timeBlock": null,
            "confirmations": null
        }
    },
    "to": {
        "code": "ETH",
        "coin": "ETH",
        "network": "ETH",
        "name": "Ethereum",
        "alias": "ethereum",
        "amount": "0.01776490",
        "address": "0xa3A7913d2e76bBaE4B1b597B45F0D960f7141375",
        "tag": "",
        "tagName": null,
        "tx": {
            "id": null,
            "amount": null,
            "fee": null,
            "ccyfee": null,
            "timeReg": null,
            "timeBlock": null,
            "confirmations": null
        }
    },
    "back": {
        "code": "",
        "coin": null,
        "network": null,
        "name": null,
        "alias": null,
        "amount": null,
        "address": "",
        "tag": "",
        "tagName": null,
        "tx": {
            "id": null,
            "amount": null,
            "fee": null,
            "ccyfee": null,
            "timeReg": null,
            "timeBlock": null,
            "confirmations": null
        }
    },
    "emergency": {
        "status": [],
        "choice": "NONE",
        "repeat": "0"
    },
    "token": "Uu7Dum9wvcb9OajDkJ0zQBE2zo1X84zHR16mJVox"
});

  const id = useParams().id;
  console.log(id)

  useEffect(() => {
    // api.createOrder({"fromCcy":"LTC", "toCcy":"ETH", "amount":0.551857, "direction":"from", "type":"float", "toAddress":"0xa3A7913d2e76bBaE4B1b597B45F0D960f7141375"})
    // .then((response) => {
    //   console.log(response);
    //   dispatch(setOrder(response.data))
    // })
    // .catch((error) => {
    //   console.log(error);
    // })
    api.getOrder({id: "KZ9ZUZ", token: "Uu7Dum9wvcb9OajDkJ0zQBE2zo1X84zHR16mJVox"})
    .then((response) => {
      console.log(response);
      dispatch(setOrder(response.data))
    })
    .catch((error) => {
      console.log(error);
    })
    
    console.log(1);
  }, []);

  return (
    <section
      className={classNames(
        "flex flex-col self-center mx-auto w-full space-y-8 pb-12",
        {
          "px-14": macbook || ipadMini,
          "max-w-[1328px]": desctop,
          // "px-14": ipadMini,
          "px-4": iphone,
          "items-left": miniSending,
          "items-center": !miniSending,
        }
      )}
    >
      <SendingCoinTo />
      {/* <div className={classNames("")}></div> */}
      {!miniTop && (
        <div className="flex flex-row w-full space-x-6">
          <SendingOrderNumber />
          <SendingInfo />
          <SendingQr />
        </div>
      )}
      {miniTop && (
        <div className="flex flex-col w-full space-y-6">
          <div
            className={classNames("flex w-full", {
              "flex-row  space-x-6": !phone,
              "flex-col space-y-6": phone,
            })}
          >
            <SendingOrderNumber />
            <SendingQr />
          </div>
          <SendingInfo />
        </div>
      )}
      {miniSending && (
        <div className="flex flex-col space-y-6">
          <SendingNotifications />
          <SendingLoader />
          <SendingToKnow />
        </div>
      )}
      {!miniSending && (
        <>
          <SendingLoader />
          <div className="flex flex-row space-x-6">
            <SendingToKnow />
            <SendingNotifications />
          </div>
        </>
      )}
    </section>
  );
};
