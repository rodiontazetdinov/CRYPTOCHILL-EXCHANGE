import { BenefitCards } from "./BenefitCards";
import { Order } from "./Order";
import classNames from "classnames";
import { useMediaQuery } from "@uidotdev/usehooks";

export const Intro = () => {
    const iphone = useMediaQuery(
        "only screen and (min-width : 320px) and (max-width : 744px)"
      );
      const ipadMini = useMediaQuery(
        "only screen and (min-width : 744px)"
      );
      const laptop = useMediaQuery(
        "only screen and (min-width : 1024px)"
      );
      const macbook = useMediaQuery("only screen and (min-width : 1024px)");
      const desctop = useMediaQuery("only screen and (min-width : 1280px)");
      
    return (
        <section className="bg-main-bg-img flex flex-col items-center bg-cover bg-center bg-no-repeat">
            <h1 className={classNames("text-center font-bold font-segoe bg-gradient-to-r from-[#FBE3F1] to-[#CAAEFF] bg-clip-text text-transparent mt-10",{
                "text-2xl": iphone,
                "text-5xl": !iphone,
            })}>Моментальный обмен криптовалют</h1>
            <Order/>
            <h2 className={classNames(" mt-20 bg-gradient-to-r from-[#FBE3F1] to-[#CAAEFF] bg-clip-text text-transparent font-bold",{
                "text-2xl": iphone,
                "text-5xl": !iphone,
            })}>Нам доверяют с 2018 года</h2>
            <BenefitCards/>
        </section>
    );
}