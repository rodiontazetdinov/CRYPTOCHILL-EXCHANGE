import { SuppportCard } from "../components/SuppportCard";

import chatIcon from "../images/support-icons/chat.svg";
import emailIcon from "../images/support-icons/email.svg";
import telegramIcon from "../images/support-icons/telegram.svg";
import twitterIcon from "../images/support-icons/twitter.svg";

export const Support = () => {
    return (
        <section className="container mx-auto w-1328 text-white font-semibold text-left min-h-[657px]">
            <h3 className="inline-block font-bold text-5xl text-transparent bg-gradient-to-r from-[#FBE3F1] to-[#CAAEFF] bg-clip-text mb-5 mt-10">Подержка</h3>
            <p className="mb-10 text-2xl">Нужна помощь? Мы готовы помочь вам 24 часа, 7 дней в неделю.</p>
            <ul className="flex flex-wrap">
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
                />
            </ul>
        </section>
    );
}