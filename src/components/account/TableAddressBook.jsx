//  img
import ETHicon from "../../images/coins/eth.svg";
import BTCicon from "../../images/coins/btc.svg";
import arrowLeft from "../../images/arrow-left.svg";
import arrowRight from "../../images/arrow-right.svg";
import arrowDown from "../../images/arrow-down.svg";
import delIcon from "../../images/tabler_trash.svg";

// lib
import classNames from "classnames";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useState } from "react";

export const TableAddressBook = ({ exchanges, title }) => {
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
                        <th>Дата</th>
                        <th>Сеть</th>
                        <th>Монета</th>
                        <th>Адрес</th>
                    </tr>
                </thead>
                <tbody>
                    {exchanges.map((ex, index) => {
                        return (
                            <tr
                                key={index}
                                className="bg-gradient-to-br from-[#38096780] to-[#7811C580] rounded-2xl"
                            >
                                <td className="pl-4 rounded-l-2xl py-4">
                                    {new Date(ex.time).toLocaleString("ru", {day: 'numeric', month: "numeric", year: 'numeric'})}
                                </td>
                                {/* <td>{new Date(ex.time).toLocaleString("ru", {hour: 'numeric', minute: 'numeric'})}</td> */}
                                <td className="py-4">
                                    <div className="flex items-center">
                                        <img className="w-8 h-8 mr-2" src={ETHicon} alt={ex.sent.name} />
                                        <span>{ex.sent.name}</span>
                                    </div>
                                </td>
                                <td className="py-4">
                                    <div className="flex items-center w-full overflow-hidden">
                                        <img className="w-8 h-8 mr-2" src={BTCicon} alt={ex.get.name} />
                                        <span>{ex.get.name}</span>
                                    </div>
                                </td>
                                <td className="break-all max-w-[270px] min-w-[150px] py-4">{ex.address}</td>
                                <td className="pr-4 rounded-r-2xl py-4">
                                    <button className="flex justify-center w-full">
                                        <img src={delIcon} alt="" />
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <span className="mr-2">Показывать по</span>
                    <div className="flex items-center bg-gradient-to-br from-[#38096780] to-[#7811C580] rounded-lg mr-2">
                        <span className="flex items-center justify-center min-w-10 h-10 text-2xl px-3">
                            { numberExchanges }
                        </span>
                        <button className="flex items-center justify-center w-10 h-10">
                            <img src={arrowDown} alt=">" />
                        </button>
                    </div>
                    <span>записей</span>
                </div>
                <div className="flex items-center bg-gradient-to-br from-[#38096780] to-[#7811C580] rounded-lg">
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