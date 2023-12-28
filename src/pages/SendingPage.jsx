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
import { SendingError } from "../components/SendingError";
import { api } from "../utils/api";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setOrder } from "../store/actions";
import { SendingTransactionInfo } from "../components/SendingTransactionInfo";
import { SendingTransactionDone } from "../components/SendingTransactionDone";
import { SendingActionsExpiredOrder } from "../components/SendingActionsExpiredOrder";
import { addToOrders, withdrawFromOrders } from "../utils/helpers";
import { SendingTransactionBack } from "../components/SendingTransactionBack";
import { SendingAllert } from "../components/SendingAllert";
import { SendingPopupEmail } from "../components/SendingPopupEmail";
import { SendingPopupXRPWarning } from "../components/SendingPopupXRPWarning";

export const SendingPage = () => {
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

  const [localOrder, setLocalOrder] = useState(
    withdrawFromOrders(useParams().id) || {}
  );
  const [popupEmailOpen, setPopupEmailOpen] = useState(true);
  const [popupXRPWarning, setPopupXRPWarning] = useState(false);
  const order = useSelector((state) => state.order);

  // setPopupXRPWarning(order.from.code === "XRP" ? true : false);

  useEffect(() => {
    const timer = setTimeout(() => {
      order &&
        api
          .getOrder({ id: localOrder.id, token: localOrder.token })
          .then((response) => {
            console.log(response);
            dispatch(setOrder(response.data));
            localStorage.setItem("order", JSON.stringify(response.data));
            addToOrders(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
    }, 1000);
    return () => clearTimeout(timer);
  }, [order]);

  useEffect(() => {
    setPopupXRPWarning(order.from.code === "XRP" ? true : false);
    order &&
      api
        .getOrder({ id: localOrder.id, token: localOrder.token })
        .then((response) => {
          console.log(response);
          dispatch(setOrder(response.data));
          localStorage.setItem("order", JSON.stringify(response.data));
          addToOrders(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);

  switch (order && order.status) {
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
          {popupEmailOpen && (
            <SendingPopupEmail setPopupEmailOpen={setPopupEmailOpen} />
          )}
          {(popupXRPWarning && !popupEmailOpen) && (
            <SendingPopupXRPWarning setPopupXRPWarning={setPopupXRPWarning} />
          )}
          <SendingCoinTo />
          <SendingAllert />
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
          {!miniTop && (
            <div className="flex flex-row w-full space-x-6">
              <SendingOrderNumber />
              <SendingTransactionInfo
                title={"Информация об отправленной транзакции"}
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
              </div>
              <SendingTransactionInfo
                title={"Информация об отправленной транзакции"}
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
    case "WITHDRAW":
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
          <SendingAllert />
          {!miniTop && (
            <div className="flex flex-row w-full space-x-6">
              <SendingOrderNumber />
              <SendingTransactionInfo
                title={"Информация об отправленной транзакции"}
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
              </div>
              <SendingTransactionInfo
                title={"Информация об отправленной транзакции"}
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
              "px-4": iphone,
              "items-left": miniSending,
              "items-center": !miniSending,
            }
          )}
        >
          <SendingCoinTo />
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
          <div
            className={classNames("flex justify-between w-full", {
              "flex-col": ipadMini || iphone,
            })}
          >
            <div
              className={classNames("", {
                "mr-6": desctop || macbook,
                "mb-6": ipadMini || iphone,
              })}
            >
              <SendingTransactionInfo
                title={"Информация об отправленной транзакции"}
                dataCoin={order.from}
              />
            </div>
            {order && order.emergency.choice !== "REFUND" && (
              <SendingTransactionInfo
                title={"Информация о принятой транзакции"}
                dataCoin={order.to}
              />
            )}
            {order && order.emergency.choice === "REFUND" && (
              <SendingTransactionBack order={order} />
            )}
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
              "px-4": iphone,
              "items-left": miniSending,
              "items-center": !miniSending,
            }
          )}
        >
          <SendingCoinTo />
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
              {order && order.emergency.choice === "NONE" && (
                <SendingActionsExpiredOrder />
              )}
              {order && order.emergency.choice !== "NONE" && <SendingAllert />}
              <SendingToKnow />
            </div>
          )}
          {!miniSending && (
            <>
              {order && order.emergency.choice === "NONE" && (
                <SendingActionsExpiredOrder />
              )}
              {order && order.emergency.choice !== "NONE" && <SendingAllert />}
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
          <SendingError />
          {!miniTop && (
            <div className="flex flex-row w-full space-x-6">
              <SendingOrderNumber />
              <SendingTransactionInfo
                title={"Информация о транзакции"}
                dataCoin={order.from}
              />
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
              </div>
              <SendingTransactionInfo
                title={"Информация о транзакции"}
                dataCoin={order.from}
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
  }
};
