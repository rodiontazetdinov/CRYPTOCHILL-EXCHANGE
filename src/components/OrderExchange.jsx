// comp

// img
import qr from "../images/icons/qr.svg";
import close from "../images/icons/close.svg";
import squares from "../images/icons/squares.svg";
import warning from "../images/icons/warning.svg";

// lib
import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import QrReader from 'react-qr-scanner';
import { useSelector, useDispatch } from "react-redux";
import { api } from "../utils/api";

import { setOrder } from "../store/actions";

export const OrderExchange = ({ numberOfCoinsSent }) => {
  const miniOrder = useMediaQuery("only screen and (max-width : 610px)");
  const macbook = useMediaQuery("only screen and (max-width : 1024px)");
  const iphone = useMediaQuery("only screen and (min-width : 320px) and (max-width : 744px)");
  const ipadMini = useMediaQuery("only screen and (min-width : 744px) and (max-width : 1024px)");
  const laptop = useMediaQuery("only screen and (min-width : 1024px)");
  const desctop = useMediaQuery("only screen and (min-width : 1280px)");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ coinAddress, setCoinAddress ] = useState('');
  const [ coinMemo, setCoinMemo ] = useState('');
  const [ invalidAddress, setInvalidAddress ] = useState(false);
  const [ openQR, setOpenQR ] = useState(false);

  const previewStyle = {
    height: '100%',
    width: '80vw',
  }

  const coins = useSelector(state => state.coins);
  const receivedCoin = useSelector(state => state.creatingOrder.to);
  const receivedCoinTag = coins.find((coin) => coin.code === receivedCoin.code)?.tag;
  const creatingOrder = useSelector(state => state.creatingOrder);
  const isFixed = useSelector(state => state.isFixed);

  function validationAddress(address) {
    if (address.replace(/[^\d\a-zA-Z\:]/g, '').length !== 34) {
      return false;
    }
    return true;
  }

  return (
    <form
      className={classNames(
        "flex flex-col justify-start w-full text-left",
        {
          "mt-5": !miniOrder,
          "mt-2 w-full max-w-mobile-container": miniOrder,
        }
      )}
      onSubmit={(e) => {
        e.preventDefault();

          // if (!validationAddress(coinAddress)) {
          //   setInvalidAddress(true);
          //   return
          // }

          const dataOrder = coinMemo ? {
            "fromCcy": creatingOrder.from.code,
            "toCcy": creatingOrder.to.code,
            "amount": numberOfCoinsSent,
            "direction":"from",
            "type": isFixed ? 'fixed' : 'float',
            "toAddress": coinAddress,
            "tag": coinMemo
          } : {
            "fromCcy": creatingOrder.from.code,
            "toCcy": creatingOrder.to.code,
            "amount": numberOfCoinsSent,
            "direction":"from",
            "type": isFixed ? 'fixed' : 'float',
            "toAddress": coinAddress,
          }
          
          api.createOrder(dataOrder)
            .then((data) => {
              console.log(data);
              if (data.msg === "Invalid address") {
                setInvalidAddress('неверный адрес');
              }else if (data.code > 0){
                setInvalidAddress(data.msg);
              } else {
                dispatch(setOrder(data.data));
                localStorage.setItem("order", JSON.stringify(data.data));
                navigate(`/sending/${data.data.id}`);
              }
            })
      }}
    >
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
            onError={(err) => {console.log(err)}}
            onScan={(data) => {
              if (data !== null) {
                setCoinAddress(data.text);
                setOpenQR(false);
              }
            }}
          />
        </div>
      )}
      <h3 className="text-3xl">Назначение</h3>
      <div className={classNames("flex", {
        'flex-col': macbook
      })}>
        <div className={classNames("relative bg-[#08035B] flex flex-row flex-grow py-3 px-6 rounded-xl justify-between mt-2")}>
          <input
            className="bg-[#08035B] text-white focus:outline-none w-3/4"
            type="text"
            value={coinAddress}
            placeholder={`Ваш ${receivedCoin.code} адрес`}
            onChange={(ev) => {
              setCoinAddress(ev.target.value.replace(/[^\d\a-zA-Z\:]/g, ''));
              setInvalidAddress(false);
            }}
          />
          <div className="flex flex-row">
            <img
              onClick={() => setOpenQR(true)}
              className="mr-3 cursor-pointer"
              src={qr}
              alt='QR'
            />
            <img
              className="cursor-pointer"
              onClick={() => {
                navigator.clipboard.readText()
                  .then((clipText) => {
                    console.log(clipText);
                    setCoinAddress(clipText)
                  })
                  .catch((err) => {
                    alert('Вам нужно дать браузеру разрешение на использование вашего буфера обмена');
                  })
              }}
              src={squares}
              alt='Paste'
            />
          </div>
          {invalidAddress && (
            <div className="absolute top-full left-0 flex justify-between items-center self-start px-3 py-1 bg-[#FF5454] rounded-lg mt-1">
              <img src={warning} alt="" />
              <p className="text-[#08035B] ml-2">{invalidAddress}</p>
            </div>
          )}
        </div>
        {receivedCoinTag && (
          <div className={classNames("relative bg-[#08035B] flex flex-row py-3 px-6 rounded-xl justify-between", {
            'mt-2 ml-4': !macbook,
            'mt-12': macbook
          })}>
          <p className={classNames("absolute -top-9 text-xl font-semibold whitespace-nowrap", {
            'right-0': !macbook,
            'left-0': macbook
          })}>Destination tag (optional)</p>
          <input
            className="bg-[#08035B] text-white focus:outline-none w-[160px]"
            type="text"
            value={coinMemo}
            placeholder={`Destination tag`}
            onChange={ev => setCoinMemo(ev.target.value)}
          />
          <div className="flex flex-row">
            <img
              className="cursor-pointer"
              onClick={() => {
                navigator.clipboard.readText()
                  .then((clipText) => {
                    setCoinMemo(clipText)
                  })
                  .catch((err) => {
                    alert('Вам нужно дать браузеру разрешение на использование вашего буфера обмена');
                  })
              }}
              src={squares}
              alt='Paste'
            />
          </div>
          </div>
        )}
      </div>
      <button
        disabled={Number(numberOfCoinsSent) <= 0 || coinAddress === ''}
        type="submit"
        className={classNames("py-3 text-xl rounded-xl mt-4", {
          'bg-btns': !(Number(numberOfCoinsSent) <= 0 || coinAddress === ''),
          'bg-transparent border rounded-lg border-white border-solid': (Number(numberOfCoinsSent) <= 0 || coinAddress === ''),
        })}
      >
        Начать обмен
      </button>
    </form>
  );
};
