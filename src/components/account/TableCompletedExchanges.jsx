//  img
import ETHicon from "../../images/coins/eth.svg";
import BTCicon from "../../images/coins/btc.svg";
import arrowLeft from "../../images/arrow-left.svg";
import arrowRight from "../../images/arrow-right.svg";
import arrowDown from "../../images/arrow-down.svg";

// lib
import classNames from "classnames";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useState } from "react";

export const TableCompletedExchanges = ({ exchanges, title }) => {
    const iphone = useMediaQuery("only screen and (min-width : 343px) and (max-width : 744px)");

    const [numberExchanges, setNumberExchange] = useState(25);
    const [amountPage, setAmountPage] = useState(1);

    return (
        <div className="w-full mb-8">
            {title && (
                <h3 className={classNames(
                    "inline-block font-bold text-transparent bg-text bg-clip-text mb-6 leading-tight", {
                    "text-xl": iphone,
                    "text-3xl": !iphone,
                })}>{title}</h3>
            )}
            <table className="w-full border-separate border-spacing-y-4">
                <thead>
                    <tr>
                        <th>Дата/Order ID</th>
                        <th>Отправляете</th>
                        <th>Получите</th>
                        <th className="text-right">Адрес назначения</th>
                    </tr>
                </thead>
                <tbody>
                    {exchanges.length === 0 && (
                        <tr className="bg-order rounded-2xl">
                            <td className="pl-4 rounded-2xl py-4 text-center" colspan="4">Нет данных</td>
                        </tr>
                    )}
                    {exchanges.map((ex, index) => {
                        return (
                            <tr
                                key={index}
                                className="bg-order rounded-2xl"
                            >
                                <td className="pl-4 rounded-l-2xl py-4">
                                    <div className="flex flex-col">
                                        <span>{ex.id}</span>
                                        <span>{new Date(ex.time).toLocaleString("ru", {day: 'numeric', month: "numeric", year: 'numeric'})}</span>
                                    </div>
                                </td>
                                {/* <td>{new Date(ex.time).toLocaleString("ru", {hour: 'numeric', minute: 'numeric'})}</td> */}
                                <td className="py-4">
                                    <div className="flex items-center">
                                        <img className="w-8 h-8 mr-2" src={ETHicon} alt={ex.sent.name} />
                                        <span className="mr-2">{ex.sent.sum}</span>
                                        <span>{ex.sent.name}</span>
                                    </div>
                                </td>
                                <td className="py-4">
                                    <div className="flex items-center w-full overflow-hidden">
                                        <img className="w-8 h-8 mr-2" src={BTCicon} alt={ex.get.name} />
                                        <span className="mr-2">{ex.get.sum}</span>
                                        <span>{ex.get.name}</span>
                                    </div>
                                </td>
                                <td className="text-right pr-4 break-all max-w-[230px] min-w-[170px] rounded-r-2xl py-4">{ex.address}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <span className="mr-2">Показывать по</span>
                    <div className="flex items-center bg-order rounded-lg mr-2">
                        <span className="flex items-center justify-center min-w-10 h-10 text-2xl px-3">
                            { numberExchanges }
                        </span>
                        <button className="flex items-center justify-center w-10 h-10">
                            <img src={arrowDown} alt=">" />
                        </button>
                    </div>
                    <span>записей</span>
                </div>
                <div className="flex items-center bg-order rounded-lg">
                    <button className="flex items-center justify-center w-10 h-10">
                        <img src={arrowLeft} alt="<" />
                    </button>
                    <span className="flex items-center justify-center w-10 h-10 text-2xl">
                        { amountPage }
                    </span>
                    <button className="flex items-center justify-center w-10 h-10">
                        <img src={arrowRight} alt=">" />
                    </button>
                </div>
            </div>
        </div>
    );
}