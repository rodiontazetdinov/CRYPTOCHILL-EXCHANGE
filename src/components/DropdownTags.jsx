
// img
import arrowUp from "../images/arrow-up.svg";
import arrowDown from "../images/arrow-down.svg";

// Libraries
import classNames from "classnames";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeDropdown, openDropdown } from "../store/actions";

export const DropdownTags = ({ currentTag, setCurrentTag }) => {
    const iphone = useMediaQuery("only screen and (min-width : 343px) and (max-width : 744px)");
    const ipadMini = useMediaQuery("only screen and (min-width : 744px) and (max-width : 1024px)");
    const macbook = useMediaQuery("only screen and (min-width : 1024px) and (max-width : 1328px)");
    const desctop = useMediaQuery("only screen and (min-width : 1328px)");

    const dropdownOpen = useSelector((state) => state.dropdowns.tags);
    const dispatch = useDispatch();

    const tags = [
        'Solana', 'Stellar', 'Lumens', 'Tether', 'TON', 'Toncoin', 'Tron', 'TrueUSD', 'Trust',
        'Wallet', 'Token', 'TUSD', 'TWT', 'USD', 'Coin', 'USDC', 'USDT', 'XLM', 'XMRXRP','ZcashZEC',
        'ZRX', 'TUSD', 'TWT', 'USD', 'Coin', 'USDC', 'USDT', 'XLM', 'XMRXRP','ZcashZEC', 'ZRX'
    ];

    return (
        <div
            id="dropdown-tags"
            className={classNames("w-72 relative cursor-pointer", {
                "ml-6": desctop,
                'mt-6': !desctop,
            }
        )}>
            <div
                onClick={(ev) => {
                    dispatch(dropdownOpen ? closeDropdown('tags') : openDropdown('tags'));
                    ev.stopPropagation();
                }}
                className="flex justify-between border border-solid rounded-lg h-12 py-2 px-3 text-2xl"
            >
                <span>{currentTag}</span>
                <img 
                    src={dropdownOpen ? arrowUp : arrowDown}
                    alt=""
                />
            </div>
            {dropdownOpen && (
                <ul className={classNames(
                    "absolute flex flex-wrap justify-end w-[100%] max-h-[45vh] top-[100%] bg-[#08035B] rounded-lg mt-2 py-2 px-2 text-2xl overflow-scroll no-scrollbar z-10",
                    {
                        "text-lg": !iphone,
                        "text-base": iphone,
                    }
                )}>
                    {tags.map((tag, index) => { return (
                        <li
                            key={index}
                            onClick={(ev) => setCurrentTag(ev.target.textContent)}
                            className="mb-2 bg-[#2B23AC] rounded-lg m-1 px-2 py-1 cursor-pointer hover:bg-[#3c31e9]"
                        >{tag}</li>
                    )})}
                </ul>
            )}
        </div>
    );
}