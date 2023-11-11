//  comp
import { TableActiveExchanges } from "./TableActiveExchanges";

// img
import ETHicon from "../../images/coins/eth.svg";
import BTCicon from "../../images/coins/btc.svg";
import squaresIcon from "../../images/icons/squares.svg";
import orderSwitch from "../../images/order-switch.svg";
import qrIcon from "../../images/icons/qr.svg";

// lib
import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";

export const PageMoneyBack = ({ user }) => {
    const iphone = useMediaQuery("only screen and (min-width : 343px) and (max-width : 744px)");
    const ipadMini = useMediaQuery("only screen and (min-width : 744px) and (max-width : 1024px)");
    const macbook = useMediaQuery("only screen and (min-width : 1024px) and (max-width : 1328px)");
    const desctop = useMediaQuery("only screen and (min-width : 1328px)");

    return (
        
        <section className={classNames("w-full", {
            "pt-6 pb-10 pl-10": (desctop || macbook),
            'pl-0 pt-0 pb-10': ipadMini,
            'pl-0 pt-6 pb-6': iphone,
        })}>
            <h2 className={classNames(
                "inline-block font-bold text-transparent bg-text bg-clip-text mb-6 leading-tight", {
                "text-3xl": iphone,
                "text-5xl": !iphone,
            })}>Вывод</h2>

            <div className={classNames("w-full bg-order rounded-2xl", {
                "px-8 py-6 mb-8": desctop,
                "px-6 py-6 mb-6": macbook || ipadMini,
                "px-4 py-4 mb-6": iphone,

            })}>
                <p className="mb-2">Заработано</p>

                <div className="flex items-center mb-2">
                    <span className="mr-2 text-3xl">0.001</span>
                    <span className="mr-2 text-3xl">BTC</span>
                    <img src={BTCicon} alt="" />
                </div>

                <p className="text-base font-normal text-[#FFFFFFCC] mb-6">Меньше минимальной суммы для вывода в 0.001 BTC</p>
                
                <div className={classNames("flex", {
                    "flex-col items-start": !desctop,
                })}>
                    <div className={classNames("flex bg-input rounded-xl px-4 py-3 mr-4", {
                        "w-[726px]": desctop,
                        "mb-3 w-5/6": macbook,
                        "mb-3 w-full": ipadMini,
                        "mb-3 w-full ": iphone,
                    })}>
                        <input
                            className="bg-transparent flex-grow outline-none pr-2 placeholder:text-[#D7DFFF]"
                            type="text"
                            placeholder="Ваш Bitcoin адрес"
                        />
                        <button>
                            <img src={squaresIcon} alt="" />
                        </button>
                        <button className="ml-3">
                            <img src={qrIcon} alt="" />
                        </button>
                    </div>
                    <button className="inline-block bg-btns rounded-xl h-12 px-4">Вывод средств</button>
                </div>
            </div>

            <h2 className={classNames(
                "inline-block font-bold text-transparent bg-text bg-clip-text mb-6 leading-tight", {
                "text-3xl": iphone,
                "text-5xl": !iphone,
            })}>Последние вывод средств</h2>

            <TableActiveExchanges exchanges={user.addresBook}/>
        </section>
    );
}