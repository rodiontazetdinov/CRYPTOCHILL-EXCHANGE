import { ExchangeTable } from "./TableActiveExchanges";
import { DropdownListCoins } from "../DropdownListCoins";

// img
import ETHicon from "../../images/coins/eth.svg";
import BTCicon from "../../images/coins/btc.svg";
import squaresIcon from "../../images/icons/squares.svg";
import orderSwitch from "../../images/order-switch.svg";

// lib
import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";
import { useState } from "react";
import { TablePartnerExchanges } from "./TablePartnerExchanges";
import { PopupPartnerLink } from "./PopupPartnerLink";

export const PagePartner = ({ user }) => {
    const iphone = useMediaQuery("only screen and (min-width : 343px) and (max-width : 744px)");
    const ipadMini = useMediaQuery("only screen and (min-width : 744px) and (max-width : 1024px)");
    const macbook = useMediaQuery("only screen and (min-width : 1024px) and (max-width : 1280px)");
    const desctop = useMediaQuery("only screen and (min-width : 1280px)");

    const link = false;

    const coins = [
        {name: 'Bitcoin', img: BTCicon, shortTeg: 'BTC'},
        {name: 'Ethereum', img: ETHicon, shortTeg: 'ETH'},
        {name: 'Tether (ERC20)', img: BTCicon, shortTeg: 'USDT'},
    ]

    const [sentCoin, setSentCoin] = useState("BTC");
    const [getCoin, setGetCoin] = useState("ETH");
    const [popupOpen, setPopupOpen] = useState(false);

    return (
        <section className={classNames("py-6 flex-grow text-xl w-full", {
            "pl-10": desctop || macbook,
            "pl-0": iphone || ipadMini
        })}>
            <div className={classNames("flex justify-between", {
                "items-center mb-6": desctop,
                "items-start flex-col mb-6": macbook || ipadMini,
                "items-start flex-col mb-4": iphone,
            })}>
                <h2 className={classNames(
                    "inline-block font-bold text-transparent bg-text bg-clip-text leading-tight", {
                    "text-3xl": iphone,
                    "text-5xl": !iphone,
                })}>Партнерская статистика</h2>
                <button className={classNames("bg-btns rounded-xl h-12 px-4", {
                    "mt-6": macbook || ipadMini,
                    "mt-4": iphone,
                })}>Выводы средств</button>
            </div>

            {/* Партнерская статистика */}
            <div className={classNames("flex justify-between w-full bg-order rounded-2xl px-8 py-6", {
                "items-center mb-10": desctop,
                "flex-col items-start mb-8": macbook || ipadMini,
                "flex-col items-start mb-6": iphone,
            })}>
                <div className={classNames("null", {
                    "mb-3": ipadMini || iphone
                })}>
                    <p className="mb-2">Расчетный баланс</p>
                    <div className="flex items-center">
                        <span className="mr-2 text-3xl">0.001</span>
                        <img src={BTCicon} alt="" />
                    </div>
                </div>
                <div className={classNames("flex justify-between", {
                    "w-[65%]": desctop,
                    "w-full": macbook,
                    "w-full flex-col": ipadMini,
                    "w-full flex-col ": iphone,
                })}>
                    <div className={classNames("null", {
                        "mb-3": ipadMini || iphone
                    })}>
                        <p className="mb-2">В ожидании выплаты</p>
                        <div className="flex items-center">
                            <span className="mr-2 text-3xl">0.001</span>
                            <img src={BTCicon} alt="" />
                        </div>
                    </div>
                    <div>
                        <p className="mb-2">Минимум для выплаты</p>
                        <div className="flex items-center">
                            <span className="mr-2 text-3xl">0.001</span>
                            <img src={BTCicon} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className={classNames("flex justify-between mb-6", {
                "items-center": desctop,
                "items-start flex-col": !desctop
            })}>
                <h2 className={classNames(
                    "inline-block font-bold text-transparent bg-text bg-clip-text leading-tight", {
                    "text-3xl": iphone,
                    "text-5xl": !iphone,
                })}>Партнерский код и ссылка</h2>
                <button
                    onClick={() => {
                        document.body.style.overflow = 'hidden';
                        setPopupOpen(true);
                    }}
                    className={classNames("bg-btns rounded-xl h-12 px-4", {
                    "mt-6": macbook || ipadMini,
                    "mt-4": iphone,
                })}>Добавить новый код</button>
            </div>

            {popupOpen && (
                <PopupPartnerLink setPopupOpen={setPopupOpen}/>
            )}

            {/* Партнерский код и ссылка */}
            <div className={classNames("w-full bg-order rounded-2xl px-8 py-6", {
                "mb-10": desctop, 
                "mb-8": macbook || ipadMini,
                "mb-6": iphone
            })}>
                <div className={classNames("flex mb-4", {
                    "items-center": !iphone,
                    "flex-col items-start ": iphone
                })}>
                    <button className="flex mr-6">
                        <span className="mr-1">Код 34Trg45B</span>
                        <img src={ squaresIcon } alt="" />
                    </button>
                    <span className="text-base font-normal text-[#FFFFFFCC]">40% за обмен по ссылке</span>
                </div>

                <div className={classNames("inline-block ", {
                    'w-full': !desctop,
                    'w-[85%]': desctop
                })}>
                    <div className={classNames("flex mb-4", {
                        "justify-between items-center": desctop,
                        "flex-col": !desctop
                    })}>
                        <span className="whitespace-nowrap">Простая ссылка</span>
                        <div className={classNames("flex bg-input rounded-xl px-4 py-3", {
                            "ml-2 w-[560px]": desctop,
                            "mt-3  w-[560px]": macbook,
                            "mt-3 w-full": ipadMini || iphone,
                        })}>
                            <input
                                className={classNames("bg-transparent flex-grow outline-none", {
                                    "w-[210px] overflow-hidden": iphone
                                })}
                                type="text"
                            />
                            <button>
                                <img src={squaresIcon} alt="" />
                            </button>
                        </div>
                    </div>

                    <div className={classNames("flex relative", {
                        "justify-between items-center": desctop,
                        "flex-col": !desctop
                    })}>
                        <span className="whitespace-nowrap">Ссылка с выбором валют</span>
                        {link && (
                            <div className={classNames("flex bg-input rounded-xl px-4 py-3", {
                                "ml-2 w-[560px]": desctop,
                                "mt-3  w-[560px]": macbook,
                                "mt-3 w-full": ipadMini || iphone,
                            })}>
                                <div className="flex">
                                    <img className="w-6 mr-1" src={BTCicon} alt="" />
                                    <img className="w-6 mr-1" src={orderSwitch} alt="" />
                                    <img className="w-6" src={ETHicon} alt="" />
                                </div>
                                <input
                                    className={classNames("bg-transparent flex-grow outline-none", {
                                        "w-[130px]": iphone
                                    })}
                                    type="text"
                                />
                                <button>
                                    <img src={squaresIcon} alt="" />
                                </button>
                            </div>
                        )}

                        {!link && (
                            <form className={classNames("flex h-12 bg-input rounded-xl", {
                                "ml-2 w-[560px]": desctop,
                                "mt-3  w-[560px]": macbook,
                                "mt-3 w-full": ipadMini || iphone,
                            })}>
                                <div className="w-[50%]">
                                    <DropdownListCoins />
                                </div>
                                <div className="w-[50%]">
                                    <DropdownListCoins />
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            <h2 className={classNames(
                "inline-block font-bold text-transparent bg-text bg-clip-text mb-6 leading-tight", {
                "text-3xl": iphone,
                "text-5xl": !iphone,
            })}>Партнерские заказы</h2>

            <TablePartnerExchanges exchanges={user.addresBook}/>

        </section>
    );
}