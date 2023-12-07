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
import { useDispatch, useSelector } from "react-redux";
import { setOrder } from "../store/actions";
import { SendingTransactionInfo } from "../components/SendingTransactionInfo";
import { SendingTransactionDone } from "../components/SendingTransactionDone";
import { SendingActionsExpiredOrder } from "../components/SendingActionsExpiredOrder";



export const SendingPage = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const iphone = useMediaQuery("only screen and (min-width : 320px) and (max-width : 744px)");
  const ipadMini = useMediaQuery("only screen and (min-width : 744px) and (max-width : 1024px)");
  const macbook = useMediaQuery("only screen and (min-width : 1024px) and (max-width : 1440px)");
  const desctop = useMediaQuery("only screen and (min-width : 1440px)");
  const miniSending = useMediaQuery("only screen and (min-width : 320px) and (max-width : 911px)");
  const miniTop = useMediaQuery("only screen and (min-width : 320px) and (max-width : 1210px)");
  const phone = useMediaQuery("only screen and (min-width : 320px) and (max-width : 585px)");

  const dispatch = useDispatch();

  const [localOrder, setLocalOrder] = useState(JSON.parse(localStorage.getItem('order')) || {});
  const order = useSelector(state => state.order);
  const id = useParams().id;

  // useEffect(() => {
    // api.createOrder({"fromCcy":"LTC", "toCcy":"ETH", "amount":0.551857, "direction":"from", "type":"float", "toAddress":"0xa3A7913d2e76bBaE4B1b597B45F0D960f7141375"})
    // .then((response) => {
    //   console.log(response);
    //   dispatch(setOrder(response.data))
    // })
    // .catch((error) => {
    //   console.log(error);
    // })
    // api.getOrder({id: order && order.id, token: order && order.token})
    // api.getOrder({id: "22GG5Q", token: "MVq6IAbZ6W3nsWDq3xXDEfxCXcoL58KrZMMRAsxL"})
    // .then((response) => {
    //   console.log(response);
    //   dispatch(setOrder(response.data))
    // })
    // .catch((error) => {
    //   console.log(error);
    // })
    
    // console.log(1);
  // }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      order &&
      api.getOrder({id: localOrder.id, token: localOrder.token})
    .then((response) => {
      console.log(response);
      dispatch(setOrder(response.data));
      localStorage.setItem("order", JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    })
    }, 15000);
    return () => clearTimeout(timer);
  }, [order]);

  // switch (order.status) {
  switch (order.status) {
    case "NEW":
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
    case "PENDING":
    case "EXCHANGE":
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
              <SendingTransactionInfo
                title={'Информация об отправленной транзакции'}
                dataCoin={order.from}
                dataCoinTo={order.to}
              />
            </div>
          )}
          {miniTop && (
            <div className="flex flex-col w-full space-y-6">
              <div
                className={classNames("flex w-full items-stretch", {
                  "flex-row  space-x-6": !phone,
                  "flex-col space-y-6": phone,
                })}
              >
                <SendingOrderNumber />
                {/* <SendingQr /> */}
                {/* <SendingTransactionInfo
                title={'Информация об отправленной транзакции'}
                dataCoin={order.from}
                dataCoinTo={order.to}
              /> */}
                
              </div>
              <SendingTransactionInfo
                title={'Информация об отправленной транзакции'}
                dataCoin={order.from}
                dataCoinTo={order.to}
              />
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
    case "DONE":
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
              <SendingTransactionDone />
            </div>
          )}
          {miniTop && (
            <div className="flex flex-col w-full space-y-6">
                <SendingOrderNumber />
                <SendingTransactionDone />
            </div>
          )}
          <div className={classNames("flex justify-between w-full", {
            "flex-col": ipadMini || iphone
          })}>
            <div className={classNames("", {
              "mr-6": desctop || macbook,
              "mb-6": ipadMini || iphone
            })}>
              <SendingTransactionInfo
                title={'Информация об отправленной транзакции'}
                dataCoin={order.from}
              />
            </div>
            <div className="">
              <SendingTransactionInfo
                title={'Информация о принятой транзакции'}
                dataCoin={order.to}
              />
            </div>
          </div>
          <SendingLoader />
          {miniSending && (
            <div className="flex flex-col space-y-6">
              <SendingNotifications />
              <SendingToKnow />
            </div>
          )}
          {!miniSending && (
            <>
              <div className="flex flex-row space-x-6">
                <SendingToKnow />
                <SendingNotifications />
              </div>
            </>
          )}
        </section>
      );
    case "EXPIRED":
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
              <SendingActionsExpiredOrder />
              <SendingToKnow />
            </div>
          )}
          {!miniSending && (
            <>
              <SendingActionsExpiredOrder />
              <div className="flex flex-row space-x-6">
                <SendingToKnow />
                <SendingNotifications />
              </div>
            </>
          )}
        </section>
      );
    default:
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
  }
};

// PENDING
// {
//   "id": "1HZPQP",
//   "type": "float",
//   "email": "",
//   "status": "PENDING",
//   "time": {
//       "reg": 1701777259,
//       "start": 1701777348,
//       "finish": null,
//       "update": 1701777680,
//       "expiration": 1701779059,
//       "left": 1368
//   },
//   "from": {
//       "code": "LTC",
//       "coin": "LTC",
//       "network": "LTC",
//       "name": "Litecoin",
//       "alias": "litecoin",
//       "amount": "0.01631000",
//       "address": "ltc1qvyffzgz7l7meq56xlag7kkgrghpqpfrr2sdhx6",
//       "addressAlt": null,
//       "tag": "",
//       "tagName": null,
//       "reqConfirmations": 2,
//       "maxConfirmations": 12,
//       "tx": {
//           "id": "d368a9398be6f8b9a2867d33bad28ca86189ae321369c211a63b49127132b5a0",
//           "amount": "0.01631000",
//           "fee": "0.00000169",
//           "ccyfee": "LTC",
//           "timeReg": 1701777348,
//           "timeBlock": null,
//           "confirmations": "0"
//       }
//   },
//   "to": {
//       "code": "TRX",
//       "coin": "TRX",
//       "network": "TRX",
//       "name": "Tron",
//       "alias": "tron",
//       "amount": "10.44900000",
//       "address": "TFmiVeSoRg5kzLtHrmdmrpyrTXB3Xgh2xv",
//       "tag": "",
//       "tagName": null,
//       "tx": {
//           "id": null,
//           "amount": null,
//           "fee": null,
//           "ccyfee": null,
//           "timeReg": null,
//           "timeBlock": null,
//           "confirmations": null
//       }
//   },
//   "back": {
//       "code": "",
//       "coin": null,
//       "network": null,
//       "name": null,
//       "alias": null,
//       "amount": null,
//       "address": "",
//       "tag": "",
//       "tagName": null,
//       "tx": {
//           "id": null,
//           "amount": null,
//           "fee": null,
//           "ccyfee": null,
//           "timeReg": null,
//           "timeBlock": null,
//           "confirmations": null
//       }
//   },
//   "emergency": {
//       "status": [],
//       "choice": "NONE",
//       "repeat": "0"
//   },
//   "token": "WOY0pdz4Fy50KaRiCjQWsjE9hxhs5VHx9uvN8PwQ"
// }

// DONE
// {
//   "id": "1HZPQP",
//   "type": "float",
//   "email": "",
//   "status": "DONE",
//   "time": {
//       "reg": 1701777259,
//       "start": 1701778512,
//       "finish": 1701778533,
//       "update": 1701778533,
//       "expiration": 1701779059,
//       "left": 222
//   },
//   "from": {
//       "code": "LTC",
//       "coin": "LTC",
//       "network": "LTC",
//       "name": "Litecoin",
//       "alias": "litecoin",
//       "amount": "0.01631000",
//       "address": "ltc1qvyffzgz7l7meq56xlag7kkgrghpqpfrr2sdhx6",
//       "addressAlt": null,
//       "tag": "",
//       "tagName": null,
//       "reqConfirmations": 2,
//       "maxConfirmations": 12,
//       "tx": {
//           "id": "d368a9398be6f8b9a2867d33bad28ca86189ae321369c211a63b49127132b5a0",
//           "amount": "0.01631000",
//           "fee": "0.00000169",
//           "ccyfee": "LTC",
//           "timeReg": 1701777348,
//           "timeBlock": 1701778241,
//           "confirmations": "6"
//       }
//   },
//   "to": {
//       "code": "TRX",
//       "coin": "TRX",
//       "network": "TRX",
//       "name": "Tron",
//       "alias": "tron",
//       "amount": "10.44800000",
//       "address": "TFmiVeSoRg5kzLtHrmdmrpyrTXB3Xgh2xv",
//       "tag": "",
//       "tagName": null,
//       "tx": {
//           "id": "bccc316c9c51a0a7c5b83fa1b4c4759f675c47b417a2e7cbf958ecf45bd763f4",
//           "amount": "10.44800000",
//           "fee": "0.00000000",
//           "ccyfee": "TRX",
//           "timeReg": 1701778526,
//           "timeBlock": 1701778527,
//           "confirmations": "5"
//       }
//   },
//   "back": {
//       "code": "",
//       "coin": null,
//       "network": null,
//       "name": null,
//       "alias": null,
//       "amount": null,
//       "address": "",
//       "tag": "",
//       "tagName": null,
//       "tx": {
//           "id": null,
//           "amount": null,
//           "fee": null,
//           "ccyfee": null,
//           "timeReg": null,
//           "timeBlock": null,
//           "confirmations": null
//       }
//   },
//   "emergency": {
//       "status": [],
//       "choice": "NONE",
//       "repeat": "0"
//   },
//   "token": "WOY0pdz4Fy50KaRiCjQWsjE9hxhs5VHx9uvN8PwQ"
// }

// EXCHANGE
// {
//   "id": "1HZPQP",
//   "type": "float",
//   "email": "",
//   "status": "EXCHANGE",
//   "time": {
//       "reg": 1701777259,
//       "start": 1701778512,
//       "finish": null,
//       "update": 1701778512,
//       "expiration": 1701779059,
//       "left": 540
//   },
//   "from": {
//       "code": "LTC",
//       "coin": "LTC",
//       "network": "LTC",
//       "name": "Litecoin",
//       "alias": "litecoin",
//       "amount": "0.01631000",
//       "address": "ltc1qvyffzgz7l7meq56xlag7kkgrghpqpfrr2sdhx6",
//       "addressAlt": null,
//       "tag": "",
//       "tagName": null,
//       "reqConfirmations": 2,
//       "maxConfirmations": 12,
//       "tx": {
//           "id": "d368a9398be6f8b9a2867d33bad28ca86189ae321369c211a63b49127132b5a0",
//           "amount": "0.01631000",
//           "fee": "0.00000169",
//           "ccyfee": "LTC",
//           "timeReg": 1701777348,
//           "timeBlock": 1701778241,
//           "confirmations": "3"
//       }
//   },
//   "to": {
//       "code": "TRX",
//       "coin": "TRX",
//       "network": "TRX",
//       "name": "Tron",
//       "alias": "tron",
//       "amount": "10.44800000",
//       "address": "TFmiVeSoRg5kzLtHrmdmrpyrTXB3Xgh2xv",
//       "tag": "",
//       "tagName": null,
//       "tx": {
//           "id": null,
//           "amount": null,
//           "fee": null,
//           "ccyfee": null,
//           "timeReg": null,
//           "timeBlock": null,
//           "confirmations": null
//       }
//   },
//   "back": {
//       "code": "",
//       "coin": null,
//       "network": null,
//       "name": null,
//       "alias": null,
//       "amount": null,
//       "address": "",
//       "tag": "",
//       "tagName": null,
//       "tx": {
//           "id": null,
//           "amount": null,
//           "fee": null,
//           "ccyfee": null,
//           "timeReg": null,
//           "timeBlock": null,
//           "confirmations": null
//       }
//   },
//   "emergency": {
//       "status": [],
//       "choice": "NONE",
//       "repeat": "0"
//   },
//   "token": "WOY0pdz4Fy50KaRiCjQWsjE9hxhs5VHx9uvN8PwQ"
// }

// WITHDRAW
// {
//   "id": "23G1SP",
//   "type": "float",
//   "email": "rodiontazetdinov@yandex.ru",
//   "status": "WITHDRAW",
//   "time": {
//       "reg": 1701779082,
//       "start": 1701779828,
//       "finish": null,
//       "update": 1701779828,
//       "expiration": 1701780882,
//       "left": 1054
//   },
//   "from": {
//       "code": "LTC",
//       "coin": "LTC",
//       "network": "LTC",
//       "name": "Litecoin",
//       "alias": "litecoin",
//       "amount": "0.01632000",
//       "address": "ltc1qp9dt2h5lcr8qkyctmdm0tlhgrd30rxz707fdml",
//       "addressAlt": null,
//       "tag": "",
//       "tagName": null,
//       "reqConfirmations": 2,
//       "maxConfirmations": 12,
//       "tx": {
//           "id": "7271aed187159698d36372a2e84d484ae595e289076f27d33e298be7443ae770",
//           "amount": "0.01632000",
//           "fee": "0.00000169",
//           "ccyfee": "LTC",
//           "timeReg": 1701779219,
//           "timeBlock": 1701779611,
//           "confirmations": "2"
//       }
//   },
//   "to": {
//       "code": "TRX",
//       "coin": "TRX",
//       "network": "TRX",
//       "name": "Tron",
//       "alias": "tron",
//       "amount": "10.46700000",
//       "address": "TFmiVeSoRg5kzLtHrmdmrpyrTXB3Xgh2xv",
//       "tag": "",
//       "tagName": null,
//       "tx": {
//           "id": "099d8f7ee5f07a4e764a75be60b7a7ef6e659304b66ec1b697b7e5c81fa05812",
//           "amount": "10.46700000",
//           "fee": "0.00000000",
//           "ccyfee": "TRX",
//           "timeReg": 1701779828,
//           "timeBlock": 1701779828,
//           "confirmations": "0"
//       }
//   },
//   "back": {
//       "code": "",
//       "coin": null,
//       "network": null,
//       "name": null,
//       "alias": null,
//       "amount": null,
//       "address": "",
//       "tag": "",
//       "tagName": null,
//       "tx": {
//           "id": null,
//           "amount": null,
//           "fee": null,
//           "ccyfee": null,
//           "timeReg": null,
//           "timeBlock": null,
//           "confirmations": null
//       }
//   },
//   "emergency": {
//       "status": [],
//       "choice": "NONE",
//       "repeat": "0"
//   },
//   "token": "MTusuMJgiAB3foQo23g4MqvOSAHKSAXtDBVtex6f"
// }
