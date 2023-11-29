// img
import ETHicon from "../images/coins/eth.svg";
import BTCicon from "../images/coins/btc.svg";
import arrowDown from "../images/arrow-down.svg";
import arrowUp from "../images/arrow-up.svg";
import searchIcon from "../images/ic_round-search.svg";

// lib
import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";
import { useState } from "react";
import { useSelector } from "react-redux";

export const DropdownListCoins = ({ selectName, stateCoin, setStateCoin, dropdownState, setDropdownState }) => {
    const iphone = useMediaQuery("only screen and (min-width : 343px) and (max-width : 744px)");
    const ipadMini = useMediaQuery("only screen and (min-width : 744px) and (max-width : 1024px)");
    const macbook = useMediaQuery("only screen and (min-width : 1024px) and (max-width : 1280px)");
    const desctop = useMediaQuery("only screen and (min-width : 1280px)");

    const coins = useSelector(state => state.coins);

    const selectedCoin = coins.find((coin) => coin.currency === stateCoin.currency);

    return (
        <div
            className="w-full rounded-xl"
            onClick={(ev) => {
                ev.preventDefault();
                setDropdownState();
                ev.stopPropagation();
            }}
        >
            <select
                className="hidden"
                name={selectName}
            >
                {coins.map((coin, i) => { return (
                    <option
                        key={i}
                        selected={stateCoin.coin === coin.currency}
                        value={coin.currency}
                    >
                        {coin.currency}
                    </option>
                )})}
            </select>
            <div className={classNames("bg-input w-full rounded-xl", {
                "bg-gradient-to-b from-[#08035B] to-[#1B11A5]": dropdownState
            })}>
                <div className="flex justify-between px-4 py-2 h-12">
                    {dropdownState ? (
                        <>
                            <img src={searchIcon} alt=""/>
                            <input
                                className="w-full bg-transparent outline-none ml-2 text-[#D7DFFF] text-base font-normal placeholder:text-[#D7DFFF]"
                                type="search"
                                name="search-name-coin"
                                placeholder="Введите название или тикер"
                            />
                        </>
                    ) : (
                        <div className="flex w-full justify-between items-center cursor-pointer">
                            <span className="flex">
                                <img className="mr-1 w-[26px]" src={selectedCoin?.img} alt="Coin" />
                                {selectedCoin?.currency}
                            </span>
                            <button>
                                <img className="w-4" src={arrowDown} alt="" />
                            </button>
                        </div>
                    )} 
                </div>
                <div className={classNames("flex-col max-h-[200px] overflow-y-scroll no-scrollbar", {
                    'hidden': !dropdownState,
                    'flex': dropdownState
                })}>
                    {/* ПОПУЛЯРНЫЕ ВАЛЮТЫ */}
                    {/* <p className="text-[#D7DFFF] text-base font-normal border-t border-[#2B23AC] py-2 mt-2 mx-4">Популярные валюты</p>
                    <ul>
                        {coins.map((coin, i) => { return (
                            <li
                                key={i}
                                className="flex justify-between text-base font-normal last:mb-0 hover:cursor-pointer px-4 py-1"
                                onClick={() => setStateCoin(coin.currency)}
                            >
                                <div className="flex">
                                    <img className="w-7 mr-1" src={coin.img} alt={coin.currency} />
                                    <span>{coin.name}</span>
                                </div>
                                <span>{coin.currency}</span>
                            </li>
                        )})}
                    </ul> */}
                    <p className="text-[#D7DFFF] text-base font-normal border-t border-[#2B23AC] py-2 mt-2 mx-4">Все валюты</p>
                    <ul>
                        {coins.map((coin, i) => { return (
                            <li
                                key={i}
                                className="flex justify-between items-center text-base font-normal last:mb-0 hover:cursor-pointer px-4 py-2"
                                onClick={() => setStateCoin(coin.currency)}
                            >
                                <div className="flex items-center">
                                    <img className="w-[26px] mr-1" src={coin.img} alt={coin.currency} />
                                    <span>{coin.name}</span>
                                </div>
                                <span>{coin.currency}</span>
                            </li>
                        )})}
                    </ul>
                </div>
            </div>
        </div>
    );
}