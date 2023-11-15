// Components
import { FAQItem } from "../components/FAQItem";

// Libraries
import classNames from "classnames";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useState } from "react";

export const Faq = () => {
    const iphone = useMediaQuery("only screen and (min-width : 343px) and (max-width : 744px)");
    const ipadMini = useMediaQuery("only screen and (min-width : 744px) and (max-width : 1024px)");
    const macbook = useMediaQuery("only screen and (min-width : 1024px) and (max-width : 1328px)");
    const desctop = useMediaQuery("only screen and (min-width : 1328px)");

    const [aboutCryptochillOpen, setAboutCryptochillOpen] = useState(true);
    const [aboutExchangeOpen, setAboutExchangeOpen] = useState(false);
    const [aboutOrderOpen, setAboutOrderOpen] = useState(false);

    function handleOpen(setCurrentAbout) {
        [setAboutCryptochillOpen, setAboutExchangeOpen, setAboutOrderOpen].forEach((setAbout) => setAbout(false));
        setCurrentAbout(true);
    }

    return (
        <section className={classNames(
            "mx-auto max-w-1328 text-white font-semibold text-left", {
            "max-w-1328 min-h-section-page-desctop": desctop,
            "max-w-main-container min-h-section-page-desctop": macbook,
            "max-w-tablet-container": ipadMini,
            "max-w-mobile-container": iphone,
        })}>
            <h3 className={classNames(
                "inline-block font-bold text-transparent bg-gradient-to-r from-[#FBE3F1] to-[#CAAEFF] bg-clip-text mb-8 mt-10", {
                "text-3xl": iphone,
                "text-5xl": ipadMini,
                "text-5xl ": macbook,
                "text-5xl  ": desctop,
            })}>FAQ</h3>

            {/* Навигация по разделам FAQ */}
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
                    <FAQItem
                        question={"Что такое Cryptochill?"}
                        account='1'
                    >
                        <p>Cryptochill — это полностью автоматизированный сервис для обмена криптовалют и токенов на выгодных условиях. FixedFloat не является кастодиальным. Обмен происходит сразу после получения монет и необходимого количества подтверждений сети. FixedFloat был запущен в 2018 году командой блокчейн специалистов c большим опытом в разработке многофункциональных веб-приложений. Стремясь предоставлять удобную платформу для обменов криптовалют, FixedFloat постоянно активно развивается и совершенстуется для своих клиентов.</p>
                    </FAQItem>
                    <FAQItem
                        question={"Почему Cryptochill это самый удобный способ обменять криптовалюту?"}
                        account='2'
                    >
                        <p>Нашим главным приоритетом является предоставление высококачественного сервиса для обмена криптовалют с помощью наших уникальных решений, которые не ставят под угрозу скорость и безопасность.</p>
                        <ol className="list-decimal pl-5">
                            <li>Экономьте ваши деньги.Совершайте обмен по самым выгодным курсам с прозрачной комиссией. У нас всегда есть лучшее предложение.</li>
                            <li>Экономьте ваше время.Наш процессинг полностью автоматизирован, что позволяет проводить транзакции с максимальной скоростью.</li>
                            <li>Совершайте обмен без сложностей.Никакой регистрации и ненужных деталей, это просто как 1-2-3.</li>
                            <li>Меняйте на любых устройствах.FixedFloat спроектирован для производительности и великолепно работает на всех типах устройств.</li>
                        </ol>
                    </FAQItem>
                    <FAQItem
                        question={"Почему я могу доверять Cryptochill?"}
                        account='3'
                    >
                        <p>За 4 года Crytpochill завоевал доверие более миллиона пользователей со всего мира. Мы уважаем анонимность и безопасность наших клиентов — для совершение обменов не требуется оставлять какие-либо данные. Crytpochill работает полностью автоматически, а поддержка доступна в Live Chat кругослуточно и без выходных.
                        Лояльность наших клиентов в полной мере отражена на популярных площадках Trustpilot и BestChange.
                        <br></br>
                        Crytpochill в социальных сетях:
                        <ul className="list-disc pl-7 text-indigo-200 underline">
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                        Crytpochill на форумах:
                        <ul className="list-disc pl-7 text-indigo-200 underline">
                            <li><a href="#">Reddit</a></li>
                            <li><a href="#">Bitcointalk</a></li>
                            <li><a href="#">Medium</a></li>
                            <li><a href="#">Steemit</a></li>
                        </ul>
                        </p>
                    </FAQItem>
                    <FAQItem
                        question={"Как совершить обмен?"}
                        account='3'
                    >
                        <p>Для примера представим, что вам нужно обменять Bitcoin на Ethereum.</p>
                        <ol className="list-decimal pl-6">
                            <li>Шаг 1. На главной странице, в поле "Отправляете", выберите Bitcoin и введите сумму, которую вы хотите обменять.</li>
                            <li>Шаг 2. Выберите фиксированный или плавающий курс, введите или отсканируйте адрес на который вы хотите получить Ethereum, и нажмите кнопку "Начать обмен".</li>
                            <li>Шаг 3. Отправьте Bitcoin на кошелек указанный на странице заказа и после получения нескольких подтверждений сети, Ethereum моментально будет отправлен на адрес, который вы указали в Шаге 2. Также доступно подробное руководство по созданию заказа на Cryptochill</li>
                        </ol>
                    </FAQItem>
                </ul>
            }
            {aboutExchangeOpen &&
                <ul>
                    <FAQItem
                        question={"Как совершить обмен?"}
                        account='1'
                    >
                        <p>Для примера представим, что вам нужно обменять Bitcoin на Ethereum.</p>
                        <ol className="list-decimal pl-6">
                            <li>Шаг 1. На главной странице, в поле "Отправляете", выберите Bitcoin и введите сумму, которую вы хотите обменять.</li>
                            <li>Шаг 2. Выберите фиксированный или плавающий курс, введите или отсканируйте адрес на который вы хотите получить Ethereum, и нажмите кнопку "Начать обмен".</li>
                            <li>Шаг 3. Отправьте Bitcoin на кошелек указанный на странице заказа и после получения нескольких подтверждений сети, Ethereum моментально будет отправлен на адрес, который вы указали в Шаге 2. Также доступно подробное руководство по созданию заказа на Cryptochill</li>
                        </ol>
                    </FAQItem>
                </ul>
            }
            {aboutOrderOpen &&
                <ul>
                    <FAQItem
                        question={"Как отследить мой заказ?"}
                        account='1'
                    >
                        <p>Тремя способами: в реальном времени на нашем сайте, через подписку на email уведомления или путем просмотра транзакций в блокчейн по ссылкам из вашего заказа.</p>
                    </FAQItem>
                </ul>
            }

        </section>
    );
}