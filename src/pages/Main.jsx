import { FaqSection } from "../components/FaqSection";
import { Intro } from "../components/Intro";
import { Transactions } from "../components/Transactions";
import { News } from "../components/News";
import { Instructions } from "../components/Instructions";

export const Main = () => {
    return (
        <div className="flex flex-col ">
            <Intro/>
            <Transactions/>
            <FaqSection/>
            <News/>
            <Instructions/>
        </div>
    );
}