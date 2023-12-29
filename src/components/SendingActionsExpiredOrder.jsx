// img
import warning from "../images/icons/warningRed.svg";
import qr from "../images/icons/qr.svg";
import squares from "../images/icons/squares.svg";
import unselectedRadio from "../images/icons/unselectedRadio.svg";
import selectedRadio from "../images/icons/selectedRadio.svg";
import close from "../images/icons/close.svg";

// lib
import "@splidejs/react-splide/css/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import QrReader from "react-qr-scanner";
import classNames from "classnames";
import { useMediaQuery } from "@uidotdev/usehooks"; 
import { useParams } from "react-router-dom";

import { addToOrders, withdrawFromOrders } from "../utils/helpers";
import { api } from "../utils/api";
import { setOrder } from "../store/actions";

export const SendingActionsExpiredOrder = () => {
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


  const dispatch = useDispatch();

  const [isReturn, setIsReturn] = useState(true);
  const [coinAddress, setCoinAddress] = useState("");
  const [openQR, setOpenQR] = useState(false);
  const order = useSelector((state) => state.order);
  const [memoTag, setMemoTag] = useState("");
  const [localOrder, setLocalOrder] = useState(
    withdrawFromOrders(useParams().id) || {}
  );

  const previewStyle = {
    height: "100%",
    width: "80vw",
  };

  return (
    <div
      className={classNames("bg-account rounded-3xl", {
        "px-12 py-10": !iphone,
        "px-4 py-10": iphone,
      })}
    >
      <div
        className={classNames("flex items-center text-[32px] font-bold mb-6", {
          "text-xl": iphone,
        })}
      >
        <img className="mr-2 w-10 h-10" src={warning} alt="" />Я отправил
        средства для обмена, но мой заказ истёк, что делать?
      </div>
      <p
        className={classNames("text-left font-semibold text-2xl mb-6", {
          " text-base": iphone,
        })}
      >
        Мы еще не получили вашу транзакцию, но вы можете сделать выбор, что
        сделать если средства по данному адресу поступят к нам на счет в течение
        24 часов. Выберите 1 из вариантов:
      </p>
      <form
        className="flex flex-col items-start"
        onSubmit={(ev) => {
          ev.preventDefault();
          // SUBMIT
          isReturn
            ? api
                .cancelOrder((memoTag === "") ?
                  {
                    id: order.id,
                    token: order.token,
                    choice: "REFUND",
                    address: coinAddress,
                  } :
                  {
                    id: order.id,
                    token: order.token,
                    choice: "REFUND",
                    address: coinAddress,
                    tag: memoTag,
                  }
                )
                .then((res) => {
                  if (res.msg === "OK") {
                    order &&
                      api
                        .getOrder({
                          id: localOrder.id,
                          token: localOrder.token,
                        })
                        .then((response) => {
                          console.log(response);
                          dispatch(setOrder(response.data));
                          localStorage.setItem(
                            "order",
                            JSON.stringify(response.data)
                          );
                          addToOrders(response.data);
                        });
                  }
                  console.log(res);
                })
                .catch((err) => {
                  console.log(err);
                })
            : api
                .cancelOrder({
                  id: order.id,
                  token: order.token,
                  choice: "EXCHANGE",
                })
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => {
                  console.log(err);
                });
        }}
      >
        <label
          htmlFor="continue"
          className={classNames(
            "flex items-center text-left font-semibold mb-4 mb-4 cursor-pointer",
            {
              "text-xl": !iphone,
              "text-base": iphone,
            }
          )}
          onClick={() => setIsReturn(false)}
        >
          <input className="hidden" type="radio" name="action" id="continue" />
          <img
            className="mr-2"
            src={isReturn ? unselectedRadio : selectedRadio}
            alt=""
          />
          Продолжить мой обмен (по текущему рыночному курсу)
        </label>
        <label
          htmlFor="return"
          className={classNames(
            "flex items-center text-left font-semibold mb-4 cursor-pointer",
            {
              "text-xl": !iphone,
              "text-base": iphone,
            }
          )}
          onClick={() => setIsReturn(true)}
        >
          <input className="hidden" type="radio" name="action" id="return" />
          <img
            className="mr-2"
            src={isReturn ? selectedRadio : unselectedRadio}
            alt=""
          />
          Совершить возврат суммы отправленной для обмена за вычетом комиссии
          сети
        </label>

        {!isReturn && (
          <button
            className="bg-btns rounded-xl text-xl px-4 py-3 font-semibold"
            type="submit"
          >
            Продолжить обмен
          </button>
        )}

        {isReturn && (
          <div className={classNames("flex w-full justify-between", { "flex-col": !desctop })}>
            <div
              className={classNames(
                "bg-[#08035B] flex flex-row py-3 px-6 rounded-xl justify-between",
                {
                  "w-[62%]": desctop && order.from.tag,
                  "w-[80%]": desctop && !order.from.tag,
                  "mb-4 w-[90%]": macbook,
                  "mb-4 w-full": ipadMini,
                  "mb-4": iphone,
                }
              )}
            >
              <input
                className="bg-[#08035B] text-white focus:outline-none w-3/4"
                type="text"
                value={coinAddress}
                placeholder={`Ваш ${order.from.name} адрес`}
                onChange={(ev) => {
                  setCoinAddress(
                    ev.target.value.replace(/[^\d\a-zA-Z\:]/g, "")
                  );
                }}
              />
              <div className="flex flex-row">
                {coinAddress === '' && (
                  <>
                    <img
                      onClick={() => setOpenQR(true)}
                      className="mr-3 cursor-pointer"
                      src={qr}
                      alt="QR"
                    />
                    <img
                      className="cursor-pointer"
                      onClick={() => {
                        navigator.clipboard
                          .readText()
                          .then((clipText) => setCoinAddress(clipText))
                          .catch((err) => {
                            alert(
                              "Вам нужно дать браузеру разрешение на использование вашего буфера обмена"
                            );
                          });
                      }}
                      src={squares}
                      alt="Paste"
                    />
                  </>
                )}
                {coinAddress !== '' && (
                  <img
                    onClick={() => setCoinAddress('')}
                    className="cursor-pointer w-6 h-6"
                    src={close}
                    alt='отмена ввода'
                  />
                )}
              </div>
            </div>
            {order.from.tag && (
              <div
                className={classNames(
                  "bg-[#08035B] flex flex-row py-3 px-6 rounded-xl justify-between",
                  {
                    "mb-4 w-[30%]": macbook,
                    "mb-4 w-[50%]": ipadMini,
                    "mb-4": iphone,
                    // "mx-4": desctop,
                  }
                )}
              >
                <input
                  className="bg-[#08035B] text-white focus:outline-none w-[160px]"
                  type="text"
                  value={memoTag}
                  placeholder={`Destination tag`}
                  onChange={(ev) => setMemoTag(ev.target.value)}
                  maxLength={20}
                />
                <div className="flex flex-row">
                  {memoTag === '' && (
                    <img
                      className="cursor-pointer"
                      onClick={() => {
                        navigator.clipboard
                          .readText()
                          .then((clipText) => {
                            setMemoTag(clipText);
                          })
                          .catch((err) => {
                            alert(
                              "Вам нужно дать браузеру разрешение на использование вашего буфера обмена"
                            );
                          });
                      }}
                      src={squares}
                      alt="Paste"
                    />
                  )}
                  {memoTag !== '' && (
                    <img
                      onClick={() => setMemoTag('')}
                      className="cursor-pointer w-6 h-6 "
                      src={close}
                      alt='отмена ввода'
                    />
                  )}
                </div>
              </div>
            )}
            <button
              className="self-start bg-btns rounded-xl text-xl px-4 py-3 font-semibold whitespace-nowrap"
              type="submit"
            >
              Сделать возврат
            </button>
          </div>
        )}
      </form>
      {openQR && (
        <div className="fixed flex justify-center items-center top-0 left-0 w-screen h-screen bg-black z-20">
          <button
            className="absolute top-10 right-10"
            onClick={() => setOpenQR(false)}
          >
            <img src={close} alt="X" />
          </button>
          <QrReader
            delay={500}
            style={previewStyle}
            onError={(err) => {
              console.log(err);
            }}
            onScan={(data) => {
              if (data !== null) {
                setCoinAddress(data.text);
                setOpenQR(false);
              }
            }}
          />
        </div>
      )}
    </div>
  );
};
