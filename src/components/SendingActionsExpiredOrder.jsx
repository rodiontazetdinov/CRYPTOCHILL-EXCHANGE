
// img
import warning from '../images/icons/warningRed.svg';
import qr from "../images/icons/qr.svg";
import squares from "../images/icons/squares.svg";
import unselectedRadio from "../images/icons/unselectedRadio.svg";
import selectedRadio from "../images/icons/selectedRadio.svg";
import close from "../images/icons/close.svg";

// lib
import { useState } from "react";
import "@splidejs/react-splide/css/core";
import QrReader from 'react-qr-scanner';
import { useSelector } from "react-redux";
import classNames from 'classnames';
import { useMediaQuery } from '@uidotdev/usehooks';

export const SendingActionsExpiredOrder = () => {
    const miniSending = useMediaQuery("only screen and (min-width : 320px) and (max-width : 911px)");
    const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const iphone = useMediaQuery("only screen and (min-width : 320px) and (max-width : 744px)");
  const ipadMini = useMediaQuery("only screen and (min-width : 744px) and (max-width : 1024px)");
  const macbook = useMediaQuery("only screen and (min-width : 1024px) and (max-width : 1440px)");
  const desctop = useMediaQuery("only screen and (min-width : 1440px)");
  const miniTop = useMediaQuery("only screen and (min-width : 320px) and (max-width : 1210px)");
  const phone = useMediaQuery("only screen and (min-width : 320px) and (max-width : 585px)");

    const [ isReturn, setIsReturn ] = useState(true);
    const [ coinAddress, setCoinAddress ] = useState('');
    const [ openQR, setOpenQR ] = useState(false);
    const order = useSelector(state => state.order);

    const previewStyle = {
        height: '100%',
        width: '80vw',
      }

    return (
        <div className={classNames("bg-account rounded-3xl", {
            'px-12 py-10': !iphone,
            'px-4 py-10': iphone,

        })}>
            <div className={classNames("flex items-center text-[32px] font-bold mb-6", {
                "text-xl": iphone
            })}>
                <img className="mr-2 w-10 h-10" src={warning} alt="" />
                Я отправил средства для обмена, но мой заказ истёк, что делать?
            </div>
            <p className={classNames("text-left font-semibold text-2xl mb-6", {
                " text-base": iphone
            })}>Мы еще не получили вашу транзакцию, но вы можете сделать выбор, что сделать если средства по данному адресу поступят к нам на счет в течение 24 часов. Выберите 1 из вариантов:</p>
            <form 
                className="flex flex-col items-start"
                onSubmit={(ev) => {
                    ev.preventDefault();
                    // SUBMIT
                }}
            >
                <label
                    htmlFor='continue'
                    className={classNames('flex items-center text-left font-semibold mb-4', {
                        "text-xl": !iphone,
                        "text-base": iphone
                    })}
                    onClick={() => setIsReturn(false)}
                >
                    <input className='hidden' type="radio" name="action" id="continue" />
                    <img className='mr-2' src={isReturn ? unselectedRadio : selectedRadio} alt="" />
                    Продолжить мой обмен (по текущему рыночному курсу)
                </label>
                <label
                    htmlFor='return'
                    className={classNames('flex items-center text-left font-semibold mb-4', {
                        "text-xl": !iphone,
                        "text-base": iphone
                    })}
                    onClick={() => setIsReturn(true)}
                >
                    <input className='hidden' type="radio" name="action" id="return" />
                    <img
                        className='mr-2'
                        src={isReturn ? selectedRadio : unselectedRadio} alt=""
                    />
                    Совершить возврат суммы отправленной для обмена за вычетом комиссии сети
                </label>

                {!isReturn && (
                <button className="bg-btns rounded-xl text-xl px-4 py-3 font-semibold" type="submit">Продолжить обмен</button>
                )}

                {isReturn && (
                <div className={classNames('flex w-full', { "flex-col": miniSending })}>
                    <div className={classNames("relative bg-[#08035B] flex flex-row w-full py-3 px-6 rounded-xl justify-between", {
                        "mr-8": !miniSending,
                        "mb-4": miniSending
                    })}>
                        <input
                        className="bg-[#08035B] text-white focus:outline-none w-3/4"
                        type="text"
                        value={coinAddress}
                          placeholder={`Ваш ${order.from.name} адрес`}
                        onChange={(ev) => {
                            setCoinAddress(ev.target.value.replace(/[^\d\a-zA-Z\:]/g, ''));
                            // setInvalidAddress(false);
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
                                .then((clipText) => setCoinAddress(clipText))
                                .catch((err) => {
                                alert('Вам нужно дать браузеру разрешение на использование вашего буфера обмена');
                                })
                            }}
                            src={squares}
                            alt='Paste'
                        />
                        </div>
                        {/* {invalidAddress && (
                        <div className="absolute top-full left-0 flex justify-between items-center self-start px-3 py-1 bg-[#FF5454] rounded-lg mt-1">
                            <img src={warning} alt="" />
                            <p className="text-[#08035B] ml-2">{`Неверный адрес`}</p>
                        </div>
                        )} */}
                    </div>
                    <button className="self-start bg-btns rounded-xl text-xl px-4 py-3 font-semibold whitespace-nowrap" type="submit">Сделать возврат</button>
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
        </div>
    );
}