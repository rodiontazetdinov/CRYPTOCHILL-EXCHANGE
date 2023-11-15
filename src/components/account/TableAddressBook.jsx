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

            {!iphone && (
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
                        {exchanges.length === 0 && (
                            <tr className="bg-order rounded-2xl">
                                <td className="pl-4 rounded-2xl py-4 text-center" colspan="4">Нет данных</td>
                            </tr>
                        )}
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
            )}

            {iphone && (
                <div className="flex flex-col w-full">
                    <div className="flex items-center mb-1">
                        <span className="w-2/5">Дата</span>
                        <span className="w-3/5">Адрес</span>
                    </div>

                    <div className="snap-mandatory scroll-smooth snap-x overflow-x-scroll flex w-full">
                        {exchanges.length === 0 && (
                            <div className="bg-order rounded-2xl w-full text-center py-4">
                                <span className="rounded-2xl">Нет данных</span>
                            </div>
                        )}
                        {exchanges.map((ex, index) => { return (
                            <div className="snap-start snap-always mr-2 bg-order rounded-2xl min-w-full flex flex-wrap justify-between px-4 py-3 box-border text-base">
                                <span className="w-2/5">
                                    {new Date(ex.time).toLocaleString(
                                        "ru",
                                        {day: 'numeric', month: "numeric", year: 'numeric'}
                                    )}
                                </span>
                                <span className="w-2/5 break-all mb-3">{ex.address}</span>
                                <button className="w-1/5 flex justify-end">
                                    <img src={delIcon} alt="" />
                                </button>
                                <div className="flex items-center">
                                    <img className="w-8 h-8 mr-2" src={ETHicon} alt={ex.sent.name} />
                                    <span>{ex.sent.name}</span>
                                </div>
                                <div className="flex items-center">
                                    <img className="w-8 h-8 mr-2" src={BTCicon} alt={ex.get.name} />
                                    <span>{ex.get.name}</span>
                                </div>
                            </div>
                        )})}
                    </div>

                    <div className="flex justify-between items-center mt-1">
                        <span>Сеть</span>
                        <span>Монета</span>
                    </div>
                </div>
            )}

<div className={classNames("flex items-center justify-between", {
                "text-2xl": !iphone,
                "text-base mt-4": iphone
            })}>
                <div className="flex items-center">
                    <span className="mr-2">Показывать по</span>
                    <div className="flex items-center bg-order rounded-lg mr-2">
                        <span className={classNames("flex items-center justify-center px-3", {
                            "min-w-10 h-10": !iphone,
                            "min-w-8 h-8": iphone
                        })}>
                            { numberExchanges }
                        </span>
                        <button className={classNames("flex items-center justify-center", {
                            "w-10 h-10": !iphone,
                            "w-8 h-8": iphone
                        })}>
                            <img 
                                className={classNames("", {
                                    "w-6": !iphone,
                                    "w-4": iphone
                                })}
                                src={arrowDown}
                                alt="v"
                            />
                        </button>
                    </div>
                    <span>записей</span>
                </div>
                <div className="flex items-center bg-order rounded-lg">
                    <button className={classNames("flex items-center justify-center", {
                        "w-10 h-10": !iphone,
                        "w-6 h-8": iphone
                    })}>
                        <img 
                            className={classNames("", {
                                "w-6": !iphone,
                                "w-4": iphone
                            })}
                            src={arrowLeft}
                            alt="<"
                        />
                    </button>
                    <span className={classNames("flex items-center justify-center", {
                        "w-10 h-10": !iphone,
                        "w-6 h-8": iphone
                    })}>
                        { amountPage }
                    </span>
                    <button className={classNames("flex items-center justify-center", {
                        "w-10 h-10": !iphone,
                        "w-6 h-8": iphone
                    })}>
                        <img 
                            className={classNames("", {
                                "w-6": !iphone,
                                "w-4": iphone
                            })}
                            src={arrowRight}
                            alt=">"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}