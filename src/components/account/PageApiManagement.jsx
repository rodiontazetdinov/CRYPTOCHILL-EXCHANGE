
// img
import squaresIcon from "../../images/icons/squares.svg";
import orderSwitch from "../../images/order-switch.svg";

import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";

export const PageApiManagement = ({ user }) => {
    const iphone = useMediaQuery("only screen and (min-width : 343px) and (max-width : 744px)");
    const ipadMini = useMediaQuery("only screen and (min-width : 744px) and (max-width : 1024px)");
    const macbook = useMediaQuery("only screen and (min-width : 1024px) and (max-width : 1328px)");
    const desctop = useMediaQuery("only screen and (min-width : 1328px)");

    return (
        <section className={classNames("w-full", {
            "pt-6 pb-10 pl-10": (desctop || macbook),
            'pl-0 pt-10 pb-10': ipadMini,
            'pl-0 pt-6 pb-6': iphone,
        })}>
            <h2 className={classNames(
                "inline-block font-bold text-transparent bg-text bg-clip-text leading-tight", {
                "text-3xl mb-4": iphone,
                "text-5xl mb-6": !iphone,
            })}>Генерация API key</h2>

            <div className={classNames("w-full bg-order rounded-2xl", {
                "px-4 py-6 mb-4": iphone,
                "p-8 mb-10": !iphone 
            })}>
                <p className={classNames("font-bold mb-3", {
                    "text-xl": iphone,
                    "text-3xl": !iphone
                })}>Получите ключ, чтобы пользоваться API</p>
                <p className="text-base font-normal text-[#FFFFFFCC] mb-4">Вы можете иметь только один API ключ на аккаунт. Если у вас уже есть другой ключ, он будет заблокирован.</p>
                <button className="bg-btns rounded-xl h-12 px-4">Сгенерировать</button>  
            </div>

            <h2 className={classNames(
                "inline-block font-bold text-transparent bg-text bg-clip-text leading-tight", {
                "text-3xl mb-4": iphone,
                "text-5xl mb-6": !iphone,
            })}>API management</h2>

            <div className={classNames("w-full bg-order rounded-2xl", {
                "px-4 py-6": iphone,
                "p-8": !iphone 
            })}>
                <div className={classNames("flex items-center mb-6", {
                    "text-base font-semibold": iphone,
                    "text-3xl font-bold": !iphone
                })}>
                    <span className="mr-2">API key:</span>
                    <span className="mr-1">34Trg45B</span>
                    <button className={classNames(null, {
                        "h-[24px]": iphone,
                        "h-[36px]": !iphone
                    })}>
                        <img className="h-full" src={ squaresIcon } alt="" />
                    </button>
                </div>
                <div className={classNames("flex items-center mb-6", {
                    "text-base font-semibold": iphone,
                    "text-3xl font-bold": !iphone
                })}>
                    <span className="mr-2">API secret:</span>
                    <span className="mr-1">sgsfgr566543</span>
                    <button className={classNames(null, {
                        "h-[24px]": iphone,
                        "h-[36px]": !iphone
                    })}>
                        <img className="h-full" src={ squaresIcon } alt="" />
                    </button>
                </div>
            </div>
            
        </section>
    );
}