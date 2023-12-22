import arrowDown from "../images/arrow-down.svg";
import searchIcon from "../images/ic_round-search.svg";

import classNames from "classnames";
import { useState } from "react";
import { useSelector } from "react-redux";

export const DropdownListCoins = ({
  selectName,
  stateCoin,
  setStateCoin,
  dropdownState,
  setDropdownState,
  which,
}) => {
  const coins = useSelector((state) => state.coins);
  const selectedCoin = coins?.find((coin) => coin.code === stateCoin);

  const [ fieldSearchCoin, setFieldSearchCoin ] = useState('');

  const searchMatch = (coin) => {
    const searchString = fieldSearchCoin.toLowerCase();
    if (
      coin.name.toLowerCase().indexOf(searchString) !== -1 ||
      coin.code.toLowerCase().indexOf(searchString) !== -1
    ) {
      return true;
    }
    return false;
  };

  const filteredCoins = coins.filter(searchMatch);
  const popularCoins = coins.filter((coin) => coin.priority > 0);

  return (
    <div
      className="w-full rounded-xl h-12"
      onClick={(ev) => {
        ev.preventDefault();
        setDropdownState();
        ev.stopPropagation();
      }}
    >
      <select className="hidden" name={selectName}>
        {coins.map((coin, i) => {
          return (
            <option
              key={i}
              selected={stateCoin.coin === coin.code}
              value={coin.code}
            >
              {coin.code}
            </option>
          );
        })}
      </select>
      <div
        className={classNames("bg-input w-full rounded-xl", {
          "bg-gradient-to-b from-[#08035B] to-[#1B11A5]": dropdownState,
        })}
      >
        <div className="flex px-4 py-2 h-12">
          {dropdownState ? (
            <div
              className="flex w-full"
              onClick={(ev) => {
                ev.stopPropagation();
              }}
            >
              <img src={searchIcon} alt="" />
              <input
                className="w-full bg-transparent outline-none ml-2 text-[#D7DFFF] text-base font-normal placeholder:text-[#D7DFFF]"
                type="search"
                name="search-name-coin"
                placeholder="Введите название или тикер"
                value={fieldSearchCoin}
                onChange={(ev) => {
                  setFieldSearchCoin(ev.target.value);
                }}
              />
            </div>
          ) : (
            <div className="flex w-full justify-between items-center cursor-pointer">
              <span className="flex overflow-hidden">
                <img
                  className="mr-1 w-[26px] h-[26px]"
                  src={selectedCoin?.logo}
                  alt="Coin"
                />
                {selectedCoin?.coin}
              </span>
              <button>
                <img className="w-4" src={arrowDown} alt="" />
              </button>
            </div>
          )}
        </div>
        <div
          className={classNames(
            "flex-col max-h-[200px] overflow-y-scroll no-scrollbar",
            {
              hidden: !dropdownState,
              flex: dropdownState,
            }
          )}
        >
          {/* ПОПУЛЯРНЫЕ ВАЛЮТЫ */}
          {fieldSearchCoin === "" && (
            <>
              <p className="text-[#D7DFFF] text-base font-normal border-t border-[#2B23AC] py-2 mt-2 mx-4">
                Популярные валюты
              </p>
              <ul>
                {popularCoins.map((coin, i) => {
                  return (
                    <li
                      key={i}
                      className={classNames(
                        "flex text-left justify-between text-base font-normal hover:bg-[#81a2d637] last:mb-0 hover:cursor-pointer px-4 py-1",
                        {
                          "text-[#d7dfff80]":
                            which === "FROM"
                              ? coin.recv === 0
                              : coin.send === 0,
                        }
                      )}
                      onClick={() => setStateCoin(coin.code)}
                    >
                      <div className="flex">
                        <img
                          className="h-[26px] w-[26px] mr-1"
                          src={coin.logo}
                          alt={coin.code}
                        />
                        <span>{coin.name}</span>
                      </div>
                      <span
                        style={{
                          color:
                            coin.color +
                            ((
                              which === "FROM"
                                ? coin.recv === 0
                                : coin.send === 0
                            )
                              ? "bb"
                              : ""),
                        }}
                      >
                        {coin.code}
                      </span>
                      {(which === "FROM"
                        ? coin.recv === 0
                        : coin.send === 0) && (
                        <div className="absolute right-0 w-full h-full bg-[#07006c70]"></div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </>
          )}
          <p className="text-[#D7DFFF] text-base font-normal border-t border-[#2B23AC] py-2 mt-2 mx-4">
            Все валюты
          </p>
          <ul>
            {filteredCoins.map((coin, i) => {
              return (
                <li
                  key={i}
                  className={classNames(
                    "relative flex text-left justify-between items-center text-base font-normal hover:bg-[#81a2d637] last:mb-0 hover:cursor-pointer px-4 py-2",
                    {
                      "text-[#d7dfffbb]":
                        which === "FROM" ? coin.recv === 0 : coin.send === 0,
                    }
                  )}
                  onClick={() => setStateCoin(coin.code)}
                >
                  <div className="flex items-center">
                    <img
                      className="w-[26px] h-[26px] mr-1 text-[#D7DFFF]"
                      src={coin.logo}
                      alt={coin.code}
                    />
                    <span>{coin.name}</span>
                  </div>
                  <span
                    style={{
                      color:
                        coin.color +
                        ((which === "FROM" ? coin.recv === 0 : coin.send === 0)
                          ? "bb"
                          : ""),
                    }}
                  >
                    {coin.code}
                  </span>
                  {(which === "FROM" ? coin.recv === 0 : coin.send === 0) && (
                    <div className="absolute right-0 w-full h-full bg-[#07006c70]"></div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
