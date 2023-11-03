// Components
import { FaqSeqtionItem } from "../components/FaqSeqtionItem";

// Libraries
import classNames from "classnames";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useState } from "react";

export const Faq = () => {
    const iphone = useMediaQuery("only screen and (min-width : 343px) and (max-width : 744px)");
    const ipadMini = useMediaQuery("only screen and (min-width : 744px) and (max-width : 1024px)");
    const macbook = useMediaQuery("only screen and (min-width : 1280px)");
    const desctop = useMediaQuery("only screen and (min-width : 1440px)");

    const [aboutCryptochillOpen, setAboutCryptochillOpen] = useState(true);
    const [aboutExchangeOpen, setAboutExchangeOpen] = useState(false);
    const [aboutOrderOpen, setAboutOrderOpen] = useState(false);

    function handleOpen(setAbout) {
        [setAboutCryptochillOpen, setAboutExchangeOpen, setAboutOrderOpen].forEach((setAbout) => setAbout(false));
        setAbout(true);
    }

    console.log(aboutCryptochillOpen, aboutExchangeOpen, aboutOrderOpen);
    return (
        <section className={classNames(
            "container mx-auto text-white font-semibold text-left", {
            "w-[1168px] min-h-[657px]": macbook,
            "w-[1328px] min-h-[657px]": desctop,
            "w-[696px]": ipadMini,
        })}>
            <h3 className={classNames(
                "inline-block font-bold text-transparent bg-gradient-to-r from-[#FBE3F1] to-[#CAAEFF] bg-clip-text mb-8 mt-10", {
                "text-3xl": iphone,
                "text-5xl": ipadMini,
                "text-5xl ": macbook,
                "text-5xl  ": desctop,
            })}>FAQ</h3>

            <ul className="flex items-center mb-16">
                <li className="mr-2">
                    <button
                        className={
                            "text-2xl px-3 pt-1 pb-2 rounded-lg " +
                            (aboutCryptochillOpen ? "bg-btns" : "")
                        }
                        onClick={() => handleOpen(setAboutCryptochillOpen)}
                    >О Cryptochill</button>
                </li>
                <li className="mr-2">
                    <button
                        className={
                            "text-2xl px-3 pt-1 pb-2 rounded-lg " +
                            (aboutExchangeOpen ? "bg-btns" : "")
                        }
                        onClick={() => handleOpen(setAboutExchangeOpen)}
                    >Об обмене</button>
                </li>
                <li className="mr-2">
                    <button
                        className={
                            "text-2xl px-3 pt-1 pb-2 rounded-lg " +
                            (aboutOrderOpen ? "bg-btns" : "")
                        }
                        onClick={() => handleOpen(setAboutOrderOpen)}
                    >О заказе</button>
                </li>
            </ul>

            {aboutCryptochillOpen &&
                <ul>
                    <li className="mb-8 flex">
                        <FaqSeqtionItem
                            question={"Что такое Cryptochill?"}
                            answer={"Cryptochill — это полностью автоматизированный сервис для обмена криптовалют и токенов на выгодных условиях. FixedFloat не является кастодиальным. Обмен происходит сразу после получения монет и необходимого количества подтверждений сети. FixedFloat был запущен в 2018 году командой блокчейн специалистов c большим опытом в разработке многофункциональных веб-приложений. Стремясь предоставлять удобную платформу для обменов криптовалют, FixedFloat постоянно активно развивается и совершенстуется для своих клиентов."}
                            fontSizeQuestion="text-5xl"
                            fontSizeAnswer="text-xl"
                            count='1'
                        />
                    </li>
                    <li className="mb-8 flex">
                        <FaqSeqtionItem
                            question={"Почему Cryptochill это самый удобный способ обменять криптовалюту?"}
                            answer={`Нашим главным приоритетом является предоставление высококачественного сервиса для обмена криптовалют с помощью наших уникальных решений, которые не ставят под угрозу скорость и безопасность.\n
                            1. Экономьте ваши деньги.Совершайте обмен по самым выгодным курсам с прозрачной комиссией. У нас всегда есть лучшее предложение.
                            2. Экономьте ваше время.Наш процессинг полностью автоматизирован, что позволяет проводить транзакции с максимальной скоростью.
                            3. Совершайте обмен без сложностей.Никакой регистрации и ненужных деталей, это просто как 1-2-3.
                            4. Меняйте на любых устройствах.FixedFloat спроектирован для производительности и великолепно работает на всех типах устройств.`}
                            fontSizeQuestion="text-5xl"
                            fontSizeAnswer="text-xl"
                            count='2'
                        />
                    </li>
                    <li className="mb-8 flex">
                        <FaqSeqtionItem
                            question={"Как отследить мой заказ?"}
                            answer={
                            "Тремя способами: в реальном времени на нашем сайте, через подписку на email уведомления или путем просмотра транзакций в блокчейн по ссылкам из вашего заказа."
                            }
                            fontSizeQuestion="text-5xl"
                            fontSizeAnswer="text-xl"
                            count='3'
                        />
                    </li>
                </ul>
            }
            {aboutExchangeOpen &&
                <ul>
                    <li className="mb-8 flex">
                        <FaqSeqtionItem
                            question={"Что такое Cryptochill?"}
                            answer={"Cryptochill — это полностью автоматизированный сервис для обмена криптовалют и токенов на выгодных условиях. FixedFloat не является кастодиальным. Обмен происходит сразу после получения монет и необходимого количества подтверждений сети. FixedFloat был запущен в 2018 году командой блокчейн специалистов c большим опытом в разработке многофункциональных веб-приложений. Стремясь предоставлять удобную платформу для обменов криптовалют, FixedFloat постоянно активно развивается и совершенстуется для своих клиентов."}
                            fontSizeQuestion="text-5xl"
                            fontSizeAnswer="text-xl"
                            count='1'
                        />
                    </li>
                </ul>
            }
            {aboutOrderOpen &&
                <ul>
                    <li className="mb-8 flex">
                        <FaqSeqtionItem
                            question={"Что такое Order?"}
                            answer={"Order — это полностью автоматизированный сервис для обмена криптовалют и токенов на выгодных условиях. FixedFloat не является кастодиальным. Обмен происходит сразу после получения монет и необходимого количества подтверждений сети. FixedFloat был запущен в 2018 году командой блокчейн специалистов c большим опытом в разработке многофункциональных веб-приложений. Стремясь предоставлять удобную платформу для обменов криптовалют, FixedFloat постоянно активно развивается и совершенстуется для своих клиентов."}
                            fontSizeQuestion="text-5xl"
                            fontSizeAnswer="text-xl"
                            count='1'
                        />
                    </li>
                    <li className="mb-8 flex">
                        <FaqSeqtionItem
                            question={"Как отследить мой заказ?"}
                            answer={
                            "Тремя способами: в реальном времени на нашем сайте, через подписку на email уведомления или путем просмотра транзакций в блокчейн по ссылкам из вашего заказа."
                            }
                            fontSizeQuestion="text-5xl"
                            fontSizeAnswer="text-xl"
                            count='2'
                        />
                    </li>
                </ul>
            }

        </section>
    );
}