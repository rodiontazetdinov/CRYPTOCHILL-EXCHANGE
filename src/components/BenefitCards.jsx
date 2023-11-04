import { OrderItem } from "./OrderItem";

import fast from '../images/icons/fast.svg';
import comfort from '../images/icons/comfortable.svg';
import profit from '../images/icons/profitably.svg';
import classNames from "classnames";
import { useMediaQuery } from "@uidotdev/usehooks";
import { BenefitCard } from "./BenefitCard";

export const BenefitCards = () => {
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
        <div className=" flex flex-row items-center mt-8 max-w-screen-xl mb-12">
            <BenefitCard imageSrc={fast} title={"Быстро"} description={'Максимальная скорость обмена за счет полной автоматизации'}/>
            <BenefitCard imageSrc={comfort} title={"Удобно"} description={'Выбирайте оптимальную стратегию и совершайте выгодные обмены'}/>
            <BenefitCard imageSrc={profit} title={"Выгодно"} description={'Лучшие обменные курсы и минимальные комиссии'}/>
        </div>
    );
}