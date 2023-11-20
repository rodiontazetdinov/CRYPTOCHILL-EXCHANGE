// Components
import { BlockNews } from "../components/BlockNews";

// img
import newsImg from "../images/news.png";
import arrowUp from "../images/arrow-up.svg";
import arrowDown from "../images/arrow-down.svg";

// Libraries
import classNames from "classnames";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useState } from "react";


export const Blog = ({ dropdownTagsOpen, setDropdownTagsOpen }) => {
    const iphone = useMediaQuery("only screen and (min-width : 343px) and (max-width : 744px)");
    const ipadMini = useMediaQuery("only screen and (min-width : 744px) and (max-width : 1024px)");
    const macbook = useMediaQuery("only screen and (min-width : 1024px) and (max-width : 1328px)");
    const desctop = useMediaQuery("only screen and (min-width : 1328px)");

    const [lastOpen, setLastOpen] = useState(true);
    const [manualOpen, setManualOpen] = useState(false);
    const [newsOpen, setNewsOpen] = useState(false);
    const [aboutCryptoOpen, setAboutCryptoOpen] = useState(false);
    const [exchangeOpen, setExchangeOpen] = useState(false);

    const [currentTag, setCurrentTag] = useState('Tег 1');

    function handleOpen(setCurrentAbout) {
        [
            setLastOpen,
            setManualOpen,
            setNewsOpen,
            setAboutCryptoOpen,
            setExchangeOpen
        ].forEach((setAbout) => setAbout(false));
        setCurrentAbout(true);
    }

    const invalidDataJSON = [
        {
            'title': 'Новости криптовалют 3 недели июня 2023 года',
            'description': "Bitcoin достиг $31000 23 июня цена BTC преодолела отметку в $31 000, продемонстрировав рост на 4,2% за последние 24 часа, согласно свежим данным CoinGecko. На данный момент стоимость криптовалюты удерживается выше психологической отметки в $31 400. Важно отметить, что положительную динамику наблюдают и другие активы из топ-10 по капитализации.",
            'img': newsImg,
            'tags': ['название тега', 'название тега', 'название тега', 'название тега'],
        },
        {
            'title': 'Новости криптовалют 3 недели июня 2023 года',
            'description': "Bitcoin достиг $31000 23 июня цена BTC преодолела отметку в $31 000, продемонстрировав рост на 4,2% за последние 24 часа, согласно свежим данным CoinGecko. На данный момент стоимость криптовалюты удерживается выше психологической отметки в $31 400. Важно отметить, что положительную динамику наблюдают и другие активы из топ-10 по капитализации.",
            'img': newsImg,
            'tags': ['название тега', 'название тега', 'название тега', 'название тега'],
        },
        {
            'title': 'Новости криптовалют 3 недели июня 2023 года',
            'description': "Bitcoin достиг $31000 23 июня цена BTC преодолела отметку в $31 000, продемонстрировав рост на 4,2% за последние 24 часа, согласно свежим данным CoinGecko. На данный момент стоимость криптовалюты удерживается выше психологической отметки в $31 400. Важно отметить, что положительную динамику наблюдают и другие активы из топ-10 по капитализации.",
            'img': newsImg,
            'tags': ['название тега', 'название тега', 'название тега', 'название тега'],
        },
        {
            'title': 'Новости криптовалют 3 недели июня 2023 года',
            'description': "Bitcoin достиг $31000 23 июня цена BTC преодолела отметку в $31 000, продемонстрировав рост на 4,2% за последние 24 часа, согласно свежим данным CoinGecko. На данный момент стоимость криптовалюты удерживается выше психологической отметки в $31 400. Важно отметить, что положительную динамику наблюдают и другие активы из топ-10 по капитализации.",
            'img': newsImg,
            'tags': ['название тега', 'название тега', 'название тега', 'название тега'],
        },
        {
            'title': 'Новости криптовалют 3 недели июня 2023 года',
            'description': "Bitcoin достиг $31000 23 июня цена BTC преодолела отметку в $31 000, продемонстрировав рост на 4,2% за последние 24 часа, согласно свежим данным CoinGecko. На данный момент стоимость криптовалюты удерживается выше психологической отметки в $31 400. Важно отметить, что положительную динамику наблюдают и другие активы из топ-10 по капитализации.",
            'img': newsImg,
            'tags': ['название тега', 'название тега', 'название тега', 'название тега'],
        },
        {
            'title': 'Новости криптовалют 3 недели июня 2023 года',
            'description': "Bitcoin достиг $31000 23 июня цена BTC преодолела отметку в $31 000, продемонстрировав рост на 4,2% за последние 24 часа, согласно свежим данным CoinGecko. На данный момент стоимость криптовалюты удерживается выше психологической отметки в $31 400. Важно отметить, что положительную динамику наблюдают и другие активы из топ-10 по капитализации.",
            'img': newsImg,
            'tags': ['название тега', 'название тега', 'название тега', 'название тега'],
        },
    ];

    return (
        <section className={classNames(
            "mx-auto max-w-1328 text-white font-semibold text-left", {
            "max-w-1328 min-h-section-page-desctop": desctop,
            "max-w-main-container min-h-section-page-desctop": macbook,
            "max-w-tablet-container": ipadMini,
            "max-w-mobile-container": iphone,
        })}>
            <h3 className={classNames(
                "inline-block font-bold text-transparent bg-text bg-clip-text mb-8 mt-10 text-5xl")
            }>Блог</h3>

            {/* Навигация по разделам  Блог */}
            <div className="flex items-center mb-16 flex-wrap">
                <ul className="flex items-center flex-wrap">
                    <li className="mr-2 whitespace-nowrap">
                        <button
                            className={
                                "text-2xl px-3 pt-1 pb-2 rounded-lg " +
                                (lastOpen ? "bg-btns" : "")
                            }
                            onClick={() => handleOpen(setLastOpen)}
                        >Последние</button>
                    </li>
                    <li className="mr-2 whitespace-nowrap">
                        <button
                            className={
                                "text-2xl px-3 pt-1 pb-2 rounded-lg " +
                                (manualOpen ? "bg-btns" : "")
                            }
                            onClick={() => handleOpen(setManualOpen)}
                        >Руководства</button>
                    </li>
                    <li className="mr-2 whitespace-nowrap">
                        <button
                            className={
                                "text-2xl px-3 pt-1 pb-2 rounded-lg " +
                                (newsOpen ? "bg-btns" : "")
                            }
                            onClick={() => handleOpen(setNewsOpen)}
                        >Новости</button>
                    </li>
                    <li className="mr-2 whitespace-nowrap">
                        <button
                            className={
                                "text-2xl px-3 pt-1 pb-2 rounded-lg " +
                                (aboutCryptoOpen ? "bg-btns" : "")
                            }
                            onClick={() => handleOpen(setAboutCryptoOpen)}
                        >О криптовалютах</button>
                    </li>
                    <li className="mr-2 whitespace-nowrap">
                        <button
                            className={
                                "text-2xl px-3 pt-1 pb-2 rounded-lg " +
                                (exchangeOpen ? "bg-btns" : "")
                            }
                            onClick={() => handleOpen(setExchangeOpen)}
                        >Инструкции по обмену</button>
                    </li>
                </ul>
                
                {/* DROPDOWN с тегами */}
                <div
                    id="dropdown-tags"
                    className={classNames("w-72 relative cursor-pointer", {
                        "ml-6": desctop,
                        'mt-6': !desctop,
                    }
                )}>
                    <div
                        onClick={(ev) => {
                            setDropdownTagsOpen((prev) => !prev);
                            ev.stopPropagation();
                        }}
                        className="flex justify-between border border-solid border-solid rounded-lg h-12 py-2 px-3 text-2xl"
                    >
                        <span>{currentTag}</span>
                        <img 
                            src={dropdownTagsOpen ? arrowUp : arrowDown}
                            alt=""
                        />
                    </div>
                    {dropdownTagsOpen && (
                        <div className="absolute w-[100%] top-[100%] border border-solid border-solid border-t-0 rounded-b-lg py-2 px-3 text-2xl">
                            <div
                                onClick={(ev) => {
                                    setCurrentTag(ev.target.textContent);
                                    setDropdownTagsOpen(false);
                                    ev.stopPropagation();
                                }}
                                className="mb-2"
                            >Tег 1</div>
                            <div
                                onClick={(ev) => {
                                    setCurrentTag(ev.target.textContent);
                                    setDropdownTagsOpen(false);
                                    ev.stopPropagation();
                                }}
                                className="mb-2"
                            >Tег 2</div>
                            <div
                                onClick={(ev) => {
                                    setCurrentTag(ev.target.textContent);
                                    setDropdownTagsOpen(false);
                                    ev.stopPropagation();
                                }}
                                className="mb-2"
                            >Tег 3</div>
                            <div
                                onClick={(ev) => {
                                    setCurrentTag(ev.target.textContent);
                                    setDropdownTagsOpen(false);
                                    ev.stopPropagation();
                                }}
                                className="mb-2 last:mb-0"
                            >Tег 4</div>
                        </div>
                    )}
                </div>
            </div>

            <BlockNews listNews={invalidDataJSON}/>

            <h3 className={classNames(
                "inline-block font-bold text-transparent bg-text bg-clip-text mb-8 mt-10", {
                "text-3xl": iphone,
                "text-5xl": ipadMini,
                "text-5xl ": macbook,
                "text-5xl  ": desctop,
            })}>Полезные инструкции</h3>

            <BlockNews listNews={invalidDataJSON}/>

        </section>
    );
}