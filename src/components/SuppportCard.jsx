import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";


export const SuppportCard = ({ title, text, icon, onClick }) => {
    const iphone = useMediaQuery("only screen and (min-width : 343px) and (max-width : 744px)");
    const ipadMini = useMediaQuery("only screen and (min-width : 744px) and (max-width : 1024px)");
    const macbook = useMediaQuery("only screen and (min-width : 1024px) and (max-width : 1280px)");
    const desctop = useMediaQuery("only screen and (min-width : 1280px)");

    return (
        <li className={classNames(
            "bg-gradient-to-br from-[#38096780] to-[#7811C580] rounded-2xl w-[314px] px-4 py-6", {
            "mb-6 mr-6 last:mr-0": desctop,
            "mb-6 mr-6 last:mr-0 last:mb-0": macbook,
            "mb-6 mr-6 even:mr-0 last:mb-0": ipadMini,
            "mb-6 mr-0 last:mb-0 w-8/12 min-w-[314px]": iphone,
        })}>
            <div className="flex items-center mb-2">
                <div className="rounded-full bg-gradient-to-r from-[#38096780] to-[#7811C580] p-1 mr-2">
                    <img src={icon} alt="Иконка соцсети" />
                </div>
                <p className="text-2xl text-transparent bg-text bg-clip-text">{title}</p>
            </div>
            <p className="mb-4">{text}</p>
            <button 
                className="bg-btns w-32 h-12 px-4 py-3 rounded-xl text-xl"
                onClick={onClick}
            >
                Написать
            </button>
        </li>
    );
  };