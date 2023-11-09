//  img
import ETHicon from "../images/coins/eth.svg";
import BTCicon from "../images/coins/btc.svg";
import arrowLeft from "../images/arrow-left.svg";
import arrowRight from "../images/arrow-right.svg";
import arrowDown from "../images/arrow-down.svg";


// lib
import classNames from "classnames";
import { useMediaQuery } from "@uidotdev/usehooks";

export const ExchangeTable = ({ exchanges, title }) => {
    const iphone = useMediaQuery("only screen and (min-width : 343px) and (max-width : 744px)");

    return (
        <div className="w-full mb-8">
            <h3 className={classNames(
                "inline-block font-bold text-transparent bg-text bg-clip-text mb-6 leading-tight", {
                "text-xl": iphone,
                "text-3xl": !iphone,
            })}>{title}</h3>

            <table className="w-full border-separate border-spacing-y-4">
                <tr>
                    <th>Order ID</th>
                    <th>Время</th>
                    <th>Отправляете</th>
                    <th>Получите</th>
                    <th className="text-right">Статус</th>
                </tr>
                {exchanges.map((ex) => {
                    return (
                        <tr className="h-16 bg-gradient-to-br from-[#38096780] to-[#7811C580] rounded-2xl">
                            <td className="pl-4 rounded-l-2xl">{ex.id}</td>
                            <td>{new Date(ex.time).toLocaleString("ru", {hour: 'numeric', minute: 'numeric'})}</td>
                            <td>
                                <div className="flex items-center">
                                    <img className="w-8 h-8 mr-2" src={ETHicon} alt={ex.sent.name} />
                                    <span className="mr-2">{ex.sent.sum}</span>
                                    <span>{ex.sent.name}</span>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center">
                                    <img className="w-8 h-8 mr-2" src={BTCicon} alt={ex.get.name} />
                                    <span className="mr-2">{ex.get.sum}</span>
                                    <span>{ex.get.name}</span>
                                </div>
                            </td>
                            <td className="text-right pr-4 rounded-r-2xl">{ex.status}</td>
                        </tr>
                    )
                })}
            </table>

            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <span className="mr-2">Показывать по</span>
                    <div className="flex items-center bg-gradient-to-br from-[#38096780] to-[#7811C580] rounded-lg mr-2">
                        <span className="flex items-center justify-center min-w-10 h-10 text-2xl px-3">25</span>
                        <button className="flex items-center justify-center w-10 h-10"><img src={arrowDown} alt=">" /></button>
                    </div>
                    <span>записей</span>
                </div>
                <div className="flex items-center bg-gradient-to-br from-[#38096780] to-[#7811C580] rounded-lg">
                    <button className="flex items-center justify-center w-10 h-10"><img src={arrowLeft} alt="<" /></button>
                    <span className="flex items-center justify-center w-10 h-10 text-2xl">1</span>
                    <button className="flex items-center justify-center w-10 h-10"><img src={arrowRight} alt=">" /></button>
                </div>
            </div>
        </div>
    );
}