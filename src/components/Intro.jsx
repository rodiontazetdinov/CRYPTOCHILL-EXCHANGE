import { BenefitCards } from "./BenefitCards";
import { Order } from "./Order";

export const Intro = () => {
    return (
        <section className="bg-main-bg-img flex flex-col items-center bg-cover bg-center bg-no-repeat">
            <h1 className="text-center font-bold text-4xl font-segoe bg-gradient-to-r from-[#FBE3F1] to-[#CAAEFF] bg-clip-text text-transparent mt-10">Моментальный обмен криптовалют</h1>
            <Order/>
            <h2 className="text-5xl mt-20 bg-gradient-to-r from-[#FBE3F1] to-[#CAAEFF] bg-clip-text text-transparent font-bold">Нам доверяют с 2018 года</h2>
            <BenefitCards/>
        </section>
    );
}