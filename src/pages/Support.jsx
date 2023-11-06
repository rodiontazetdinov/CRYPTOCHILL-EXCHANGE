// Components
import { SuppportCard } from "../components/SuppportCard";
// Icons
import chatIcon from "../images/support-icons/chat.svg";
import emailIcon from "../images/support-icons/email.svg";
import telegramIcon from "../images/support-icons/telegram.svg";
import twitterIcon from "../images/support-icons/twitter.svg";
// Libraries
import classNames from "classnames";
import { useMediaQuery } from "@uidotdev/usehooks";


export const Support = () => {
    const iphone = useMediaQuery("only screen and (min-width : 343px) and (max-width : 744px)");
    const ipadMini = useMediaQuery("only screen and (min-width : 744px) and (max-width : 1024px)");
    const macbook = useMediaQuery("only screen and (min-width : 1024px) and (max-width : 1328px)");
    const desctop = useMediaQuery("only screen and (min-width : 1328px)");

    return (
        <section className={classNames(
            "mx-auto text-white font-semibold text-left", {
            "max-w-1328 min-h-[657px]": desctop,
            "max-w-main-container min-h-[657px] ": macbook,
            "max-w-tablet-container": ipadMini,
            "max-w-mobile-container w-[696px]": iphone,
        })}>
            <h3 className={classNames(
                "inline-block font-bold text-transparent bg-gradient-to-r from-[#FBE3F1] to-[#CAAEFF] bg-clip-text mb-5 mt-10", {
                "text-3xl": iphone,
                "text-5xl": ipadMini,
                " text-5xl": macbook,
                "text-5xl  ": desctop,
            })}>Подержка</h3>
            <p className={classNames(
                "mb-10 text-2xl", {
                "text-base": iphone,
                "text-2xl": ipadMini,
                "text-2xl ": macbook,
                "text-2xl  ": desctop,
            })}>Нужна помощь? Мы готовы помочь вам 24 часа, 7 дней в неделю.</p>

            <ul className={classNames(
                "flex flex-wrap items-start mb-4", {
                "min-w-[652px]": ipadMini,
                "flex-col items-center": iphone,
            })}>
                <SuppportCard
                    title="Чат на сайте"
                    text="Начните диалог прямо сейчас" 
                    icon={chatIcon}
                    onClick={() => {}}
                />
                <SuppportCard
                    title="Telegram"
                    text="Время ответа 10 минут" 
                    icon={telegramIcon}
                    onClick={() => {}}
                />
                <SuppportCard
                    title="Twitter"
                    text="Время ответа 24 часа" 
                    icon={twitterIcon}
                    onClick={() => {}}
                />
                <SuppportCard
                    title="Email"
                    text="Время ответа 24 часа" 
                    icon={emailIcon}
                    onClick={() => {}}
                    mr="mr-0"
                    mb="mb-0"
                />
            </ul>
        </section>
    );
}