import { FaqSection } from "../components/FaqSection";
import { Intro } from "../components/Intro";
import { Transactions } from "../components/Transactions";
import { News } from "../components/News";
import { Instructions } from "../components/Instructions";
import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";

export const Main = () => {
    const iphone = useMediaQuery(
        "only screen and (min-width : 320px) and (max-width : 744px)"
      );
      const ipadMini = useMediaQuery(
        "only screen and (min-width : 744px) and (max-width : 1024px)"
      );
      const laptop = useMediaQuery(
        "only screen and (min-width : 1024px) and (max-width : 1280px)"
      );
      const macbook = useMediaQuery("only screen and (min-width : 1280px) and (max-width : 1328px)");
      const desctop = useMediaQuery("only screen and (min-width : 1328px)");

    return (
        <div className="flex flex-col w-full">
            <Intro/>
            <div className={classNames("mx-auto",{
                "min-w-[1328px] max-w-[1328px]": desctop,
                "max-w-main-container": macbook || laptop,
                "max-w-tablet-container": ipadMini,
                "max-w-mobile-container": iphone,
            })}>
            <Transactions/>
            <FaqSection/>
            <News/>
            <Instructions/>
            </div>
        </div>
    );
}