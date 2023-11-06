// Components

// img
import logoImg from "../images/logo.svg";
import blockchainImg from "../images/about-us-img/blockchain scheme.png";
import targetImg from "../images/about-us-img/target.png";
import classImg from "../images/about-us-img/class.svg";
import strongImg from "../images/about-us-img/strong.svg";
import timeImg from "../images/about-us-img/time.svg";

// Libraries
import classNames from "classnames";
import { useMediaQuery } from "@uidotdev/usehooks";

export const AboutUs = () => {
    const iphone = useMediaQuery("only screen and (min-width : 343px) and (max-width : 744px)");
    const ipadMini = useMediaQuery("only screen and (min-width : 744px) and (max-width : 1024px)");
    const macbook = useMediaQuery("only screen and (min-width : 1024px) and (max-width : 1328px)");
    const desctop = useMediaQuery("only screen and (min-width : 1328px)");
    return (
        <section className={classNames(
            "mx-auto max-w-1328 text-white font-semibold text-left", {
            "max-w-1328 min-h-[657px]": desctop,
            "max-w-main-container min-h-[657px]": macbook,
            "max-w-tablet-container": ipadMini,
            "max-w-mobile-container": iphone,
        })}>

            {/* О нАс */}
            <div className="flex mt-10 min-h-[475px]">
                <div className="w-2/4">
                    <h3 className={classNames(
                        "inline-block font-bold text-transparent bg-text bg-clip-text mb-8 text-5xl")
                    }>О нас</h3>
                    <p className="text-2xl text-transparent bg-text bg-clip-text">Cryptochill был запущен командой блокчейн специалистов c большим опытом в разработке многофункциональных веб-приложений. Нас объединяет идея создания лучшей в своем классе платформы обмена цифровых активов, отвечающей всем потребностям криптосообщества.</p>
                </div>
                <div className="w-2/4 flex justify-center pt-2">
                    <div className="relative w-[325px]">
                        <img className="w-full" src={logoImg} alt=""/>
                        <img className="w-full absolute top-24" src={blockchainImg} alt="" />
                    </div>
                </div>
            </div>

            <h3 className="inline-block font-bold text-transparent bg-text bg-clip-text mb-8 text-5xl leading-[65px]">Преимущества</h3>

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

            {/* Миссия */}
            {(desctop || macbook) && (
                <div className="flex h-[314px] mt-20 bg-order">
                    <div className="w-2/4">
                        <h3 className="inline-block font-bold text-transparent bg-text bg-clip-text mb-8 text-5xl leading-[65px]">Преимущества</h3>
                        <p>Наша миссия состоит в том, чтобы упростить процесс обмена с помощью практичных и масштабируемых решений, которые позволят криптоэкономике работать для наших пользователей.</p>
                    </div>
                    <div className="w-2/4 relative flex justify-center">
                        <img className="absolute bottom-0" src={targetImg} alt=""/>
                    </div>
                </div>
            )}

        </section>
    );
}