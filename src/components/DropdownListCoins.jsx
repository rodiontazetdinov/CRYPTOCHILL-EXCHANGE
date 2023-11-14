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

export const DropdownListCoins = ({ selectName }) => {
    const iphone = useMediaQuery("only screen and (min-width : 343px) and (max-width : 744px)");
    const ipadMini = useMediaQuery("only screen and (min-width : 744px) and (max-width : 1024px)");
    const macbook = useMediaQuery("only screen and (min-width : 1024px) and (max-width : 1280px)");
    const desctop = useMediaQuery("only screen and (min-width : 1280px)");

    const coins = [
        {name: 'Bitcoin', img: BTCicon, shortTeg: 'BTC'},
        {name: 'Ethereum', img: ETHicon, shortTeg: 'ETH'},
        {name: 'Tether (ERC20)', img: BTCicon, shortTeg: 'USDT'},
        {name: 'Ethereum', img: ETHicon, shortTeg: 'ETH'},
        {name: 'Tether (ERC20)', img: BTCicon, shortTeg: 'USDT'},
    ]

    const [selectedCoin, setSelectedCoin] = useState({name: "BTC", img: BTCicon});
    const [dropdownState, setDropdownState] = useState(false);

    return (
        <div className="relative w-full h-full rounded-xl">
            <select
                className="hidden"
                name={selectName}
            >
                {coins.map((coin, i) => { return (
                    <option
                        key={i}
                        selected={selectedCoin === coin.shortTeg}
                        value={coin.shortTeg}
                    >
                        {coin.shortTeg}
                    </option>
                )})}
            </select>
            <div className={classNames("bg-input w-full rounded-xl py-[10px] px-4", {
                "bg-gradient-to-b from-[#08035B] to-[#1B11A5]": dropdownState
            })}>
                <div className="flex justify-between ">
                    {dropdownState ? (
                        <>
                            <img src={searchIcon} alt=""/>
                            <input
                                className="w-full bg-transparent outline-none px-2 text-[#D7DFFF] text-base font-normal placeholder:text-[#D7DFFF]"
                                type="search"
                                name="search-name-coin"
                                placeholder="Введите название или тикер"
                            />
                        </>
                    ) : (
                        <>
                            <span className="flex">
                                <img className="mr-1 w-7" src={selectedCoin.img} alt="" />
                                {selectedCoin.name}
                            </span>
                            <button
                                onClick={(ev) => {
                                    ev.preventDefault();
                                    setDropdownState(!dropdownState);
                                }}
                            >
                                <img src={arrowDown} alt="" />
                            </button>
                        </>
                    )} 
                </div>
                <div className={classNames("flex-col top-full bottom-0 max-h-[200px] overflow-y-scroll no-scrollbar", {
                    'hidden': !dropdownState,
                    'flex': dropdownState
                })}>
                    <p className="text-[#D7DFFF] text-base font-normal border-t border-[#2B23AC] py-2 mt-2">Популярные валюты</p>
                    <ul>
                        {coins.map((coin, i) => { return (
                            <li
                                key={i}
                                className="flex justify-between mb-2 text-base font-normal last:mb-0 hover:cursor-pointer"
                                onClick={(ev) => {
                                    setSelectedCoin({name: coin.shortTeg, img: coin.img});
                                    setDropdownState(!dropdownState);
                                }}
                            >
                                <div className="flex">
                                    <img className="w-7 mr-1" src={coin.img} alt={coin.shortTeg} />
                                    <span>{coin.name}</span>
                                </div>
                                <span>{coin.shortTeg}</span>
                            </li>
                        )})}
                    </ul>
                    <p className="text-[#D7DFFF] text-base font-normal border-t border-[#2B23AC] py-2 mt-2">Все валюты</p>
                    <ul>
                        {coins.map((coin, i) => { return (
                            <li
                                key={i}
                                className="flex justify-between mb-2 text-base font-normal last:mb-0 hover:cursor-pointer"
                                onClick={(ev) => {
                                    setSelectedCoin({name: coin.shortTeg, img: coin.img});
                                    setDropdownState(!dropdownState);
                                }}
                            >
                                <div className="flex">
                                    <img className="w-7 mr-1" src={coin.img} alt={coin.shortTeg} />
                                    <span>{coin.name}</span>
                                </div>
                                <span>{coin.shortTeg}</span>
                            </li>
                        )})}
                    </ul>
                </div>
            </div>
        </div>
    );
}