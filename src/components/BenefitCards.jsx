import { OrderItem } from "./OrderItem";

import fast from '../images/icons/fast.svg';
import comfort from '../images/icons/comfortable.svg';
import profit from '../images/icons/profitably.svg';
import { BenefitCard } from "./BenefitCard";

export const BenefitCards = () => {
    return (
        <div className=" flex flex-row items-center mt-8 max-w-screen-xl mb-12">
            <BenefitCard imageSrc={fast} title={"Быстро"} description={'Максимальная скорость обмена за счет полной автоматизации'}/>
            <BenefitCard imageSrc={comfort} title={"Удобно"} description={'Выбирайте оптимальную стратегию и совершайте выгодные обмены'}/>
            <BenefitCard imageSrc={profit} title={"Выгодно"} description={'Лучшие обменные курсы и минимальные комиссии'}/>
        </div>
    );
}