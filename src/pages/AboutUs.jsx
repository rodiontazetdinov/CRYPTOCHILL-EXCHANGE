// Components

// img
import logoImg from "../images/logo.svg";
import blockchainImg from "../images/about-us-img/blockchain scheme.png";
import targetImg from "../images/about-us-img/target.png";
import classImg from "../images/about-us-img/class.svg";
import strongImg from "../images/about-us-img/strong.svg";
import timeImg from "../images/about-us-img/time.svg";
import cryptoImg1 from "../images/about-us-img/cryptocurrencies/1.svg";
import cryptoImg2 from "../images/about-us-img/cryptocurrencies/2.svg";
import cryptoImg3 from "../images/about-us-img/cryptocurrencies/3.svg";
import cryptoImg4 from "../images/about-us-img/cryptocurrencies/4.svg";
import cryptoImg5 from "../images/about-us-img/cryptocurrencies/5.svg";
import cryptoImg6 from "../images/about-us-img/cryptocurrencies/6.svg";

// Libraries
import classNames from "classnames";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useSelector } from "react-redux";

export const AboutUs = () => {
    const iphone = useMediaQuery("only screen and (min-width : 343px) and (max-width : 744px)");
    const ipadMini = useMediaQuery("only screen and (min-width : 744px) and (max-width : 1024px)");
    const macbook = useMediaQuery("only screen and (min-width : 1024px) and (max-width : 1328px)");
    const desctop = useMediaQuery("only screen and (min-width : 1328px)");

    const cryptocurrencies = [
        {
            name: 'Aave (ERC20)',
            img: cryptoImg1
        },
        {
            name: 'Cardano',
            img: cryptoImg2
        },
        {
            name: 'Cardano (BEP2)',
            img: cryptoImg3
        },
        {
            name: 'Cardano (BEP20)',
            img: cryptoImg4
        },
        {
            name: 'Cosmos',
            img: cryptoImg5
        },
        {
            name: 'Avalanche (C-Chain)',
            img: cryptoImg6
        },
        {
            name: 'Aave (ERC20)',
            img: cryptoImg1
        },
        {
            name: 'Cardano',
            img: cryptoImg2
        },
        {
            name: 'Cardano (BEP2)',
            img: cryptoImg3
        },
        {
            name: 'Cardano (BEP20)',
            img: cryptoImg4
        },
        {
            name: 'Cosmos',
            img: cryptoImg5
        },
        {
            name: 'Avalanche (C-Chain)',
            img: cryptoImg6
        },
        {
            name: 'Aave (ERC20)',
            img: cryptoImg1
        },
        {
            name: 'Cardano',
            img: cryptoImg2
        },
        {
            name: 'Cardano (BEP2)',
            img: cryptoImg3
        },
        {
            name: 'Cardano (BEP20)',
            img: cryptoImg4
        },
        {
            name: 'Cosmos',
            img: cryptoImg5
        },
        {
            name: 'Avalanche (C-Chain)',
            img: cryptoImg6
        },
        {
            name: 'Aave (ERC20)',
            img: cryptoImg1
        },
        {
            name: 'Cardano',
            img: cryptoImg2
        },
        {
            name: 'Cardano (BEP2)',
            img: cryptoImg3
        },
        {
            name: 'Cardano (BEP20)',
            img: cryptoImg4
        },
        {
            name: 'Cosmos',
            img: cryptoImg5
        },
        {
            name: 'Avalanche (C-Chain)',
            img: cryptoImg6
        },
        {
            name: 'Aave (ERC20)',
            img: cryptoImg1
        },
        {
            name: 'Cardano',
            img: cryptoImg2
        },
        {
            name: 'Cardano (BEP2)',
            img: cryptoImg3
        },
        {
            name: 'Cardano (BEP20)',
            img: cryptoImg4
        },
        {
            name: 'Cosmos',
            img: cryptoImg5
        },
        {
            name: 'Avalanche (C-Chain)',
            img: cryptoImg6
        },
        {
            name: 'Aave (ERC20)',
            img: cryptoImg1
        },
        {
            name: 'Cardano',
            img: cryptoImg2
        },
        {
            name: 'Cardano (BEP2)',
            img: cryptoImg3
        },
        {
            name: 'Cardano (BEP20)',
            img: cryptoImg4
        },
        {
            name: 'Cosmos',
            img: cryptoImg5
        },
        {
            name: 'Avalanche (C-Chain)',
            img: cryptoImg6
        },
        {
            name: 'Aave (ERC20)',
            img: cryptoImg1
        },
        {
            name: 'Cardano',
            img: cryptoImg2
        },
        {
            name: 'Cardano (BEP2)',
            img: cryptoImg3
        },
        {
            name: 'Cardano (BEP20)',
            img: cryptoImg4
        },
        {
            name: 'Cosmos',
            img: cryptoImg5
        },
        {
            name: 'Avalanche (C-Chain)',
            img: cryptoImg6
        },

    ]

    const coins = useSelector(state => state.coins);

    return (
        <section>
            <div className={classNames(
                "mx-auto max-w-1328 text-white font-semibold text-left mb-16", {
                "max-w-1328 min-h-section-page-desctop": desctop,
                "max-w-main-container min-h-section-page-desctop": macbook,
                "max-w-tablet-container": ipadMini,
                "max-w-tablet-container ": iphone,
            })}>
                {/* О нАс */}
                <div className={classNames("flex mt-10 min-h-[475px]", {
                    "flex-col": (ipadMini || iphone)
                })}>
                    <div className={classNames("w-3/5", {
                        "w-2/3": macbook,
                        "w-full": ipadMini || iphone
                    })}>
                        <h3 className={classNames(
                            "inline-block font-bold text-transparent bg-text bg-clip-text mb-5 mt-10", {
                            "text-3xl": iphone,
                            "text-5xl": !iphone,
                        })}>О нас</h3>
                        <p className={classNames("text-transparent bg-text bg-clip-text", {
                            "text-2xl": !iphone,
                            "text-base": iphone
                        })}>Cryptochill был запущен командой блокчейн специалистов c большим опытом в разработке многофункциональных веб-приложений. Нас объединяет идея создания лучшей в своем классе платформы обмена цифровых активов, отвечающей всем потребностям криптосообщества.</p>
                    </div>
                    
                    <div className={classNames("w-2/5 flex pt-2 pb-6", {
                        "justify-center": desctop,
                        "w-1/3 justify-center": macbook,
                        "justify-end w-full": ipadMini,
                        "justify-center w-full": iphone
                    })}>
                        <div className={classNames("relative", {
                            "w-[325px]": desctop || macbook,
                            "w-44 mr-10 mt-4": ipadMini,
                            "w-44 mt-4": iphone
                        })}>
                            <img className="w-full" src={logoImg} alt=""/>
                            <img 
                                className={classNames("w-full absolute", {
                                    "top-24": desctop || macbook,
                                    "top-12": ipadMini || iphone
                                })} 
                                src={blockchainImg}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                
                <h3 className={classNames(
                    "inline-block font-bold text-transparent bg-text bg-clip-text mb-5 mt-10 leading-[65px]", {
                    "text-3xl": iphone,
                    "text-5xl": !iphone,
                })}>Преимущества</h3>

                {/* Преимущества */}
                <div className={classNames(
                    "flex flex-wrap mb-4 justify-between", {
                })}>

                    <div className={classNames(
                        "bg-gradient-to-br from-[#38096780] to-[#7811C580] rounded-2xl px-4 py-6", {
                        "max-w-other-news-cagd": (desctop || macbook),
                        "mb-6 w-full": (ipadMini || iphone),
                    })}>
                        <img src={classImg} alt="Иконка соцсети" />
                        <p className="mb-4">Максимальная простота совершения обмена и возможность выбора стратегии, позволят Вам совершать выгодный обмен</p>
                    </div>
                    <div className={classNames(
                        "bg-gradient-to-br from-[#38096780] to-[#7811C580] rounded-2xl px-4 py-6", {
                        "max-w-other-news-cagd": (desctop || macbook),
                        "mb-6 w-full": (ipadMini || iphone),
                    })}>
                        <img src={strongImg} alt="Иконка соцсети" />
                        <p className="mb-4">Максимальная простота совершения обмена и возможность выбора стратегии, позволят Вам совершать выгодный обмен</p>
                    </div>
                    <div className={classNames(
                        "bg-gradient-to-br from-[#38096780] to-[#7811C580] rounded-2xl px-4 py-6", {
                        "max-w-other-news-cagd": (desctop || macbook),
                        "mb-6 w-full": (ipadMini || iphone),
                    })}>
                        <img src={timeImg} alt="Иконка соцсети" />
                        <p className="mb-4">Максимальная простота совершения обмена и возможность выбора стратегии, позволят Вам совершать выгодный обмен</p>
                    </div>
                    
                </div>
            </div>

            {/* Миссия */}
            {(desctop || macbook) && (
                <div className="h-[314px] bg-order">
                    <div className={classNames("mx-auto flex h-full", {
                        "max-w-1328": desctop,
                        "max-w-main-container": macbook,
                        "max-w-tablet-container": ipadMini,
                        "max-w-tablet-container ": iphone,
                    })}>
                        <div className="w-3/5 flex flex-col items-start">
                            <h3 className={classNames(
                                "inline-block font-bold text-transparent bg-text bg-clip-text mb-5 mt-10 leading-[65px]", {
                                "text-3xl": iphone,
                                "text-5xl": !iphone,
                            })}>Миссия</h3>
                            <p className="text-left text-2xl text-transparent bg-text bg-clip-text font-semibold">Наша миссия состоит в том, чтобы упростить процесс обмена с помощью практичных и масштабируемых решений, которые позволят криптоэкономике работать для наших пользователей.</p>
                        </div>
                        <div className="w-2/5 relative flex justify-center">
                            <img className="absolute bottom-0" src={targetImg} alt=""/>
                        </div>

                    </div>
                </div>
            )}

            <div className="bg-main-bg w-full pb-4">
                <div className={classNames(
                    "mx-auto max-w-1328 text-white font-semibold text-left", {
                    "max-w-1328 min-h-[657px]": desctop,
                    "max-w-main-container min-h-[657px]": macbook,
                    "max-w-tablet-container": ipadMini,
                    "max-w-tablet-container ": iphone,
                })}>
                    <h3 className={classNames(
                        "inline-block font-bold text-transparent bg-text bg-clip-text mb-5 mt-10 leading-1", {
                        "text-3xl": iphone,
                        "text-5xl": !iphone,
                    })}>Поддерживаемые криптовалюты</h3>

                    <ul className={classNames("flex flex-wrap justify-between", {
                        "justify-evenly": !desctop,
                    })}>
                        {coins.map((crypto, index) => {
                            return (<li className={classNames(" bg-order rounded-2xl flex flex-col items-center mb-6 pt-6 pb-5", {
                                'w-[200px]': desctop,
                                'mx-2 w-[200px]': macbook,
                                'mx-2 w-[200px] ': ipadMini,
                                "mx-0 w-full": iphone
                            })}>
                                <img className="inline-block w-14 h-14 mb-4" src={crypto.logo} alt="" />
                                <p className="inline-block">{crypto.name}</p>
                            </li>)
                        })}
                    </ul>
                </div>
            </div>

        </section>

        
    );
}