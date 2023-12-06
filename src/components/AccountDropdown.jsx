import { Link } from "react-router-dom";

import personal from "../images/account-icons/personal.svg";
import history from "../images/account-icons/history-change.svg";
import adressBook from "../images/account-icons/adress-book.svg";
import partner from "../images/account-icons/partner.svg";
import moneyBack from "../images/account-icons/money-back.svg";
import apiManagement from "../images/account-icons/api-management.svg";
import exit from "../images/account-icons/exit.svg";
import classNames from "classnames";
import { useMediaQuery } from "@uidotdev/usehooks";

export const AccountDropdown = () => {
  const iphone = useMediaQuery("only screen and (min-width : 343px) and (max-width : 744px)");
  const ipadMini = useMediaQuery("only screen and (min-width : 744px) and (max-width : 1024px)");
  const macbook = useMediaQuery("only screen and (min-width : 1024px) and (max-width : 1280px)");
  const desctop = useMediaQuery("only screen and (min-width : 1280px)");

  const accountMenuData = [
    {name: 'Персональные данные', to: "account", icon: personal},
    {name: 'История обменов', to: "/account/history", icon: history},
    {name: 'Адресная книга', to: "/account/adress-book", icon: adressBook},
    {name: 'Партнерская программа', to: "/account/partner", icon: partner},
    {name: 'Выводы средств', to: "/account/money-back", icon: moneyBack},
    {name: 'API management', to: "/account/api-management", icon: apiManagement},
    {name: 'Выйти', to: "/account/exit", icon: exit},
  ]

    return (
        <ul className={classNames("flex flex-col absolute bg-drop backdrop-blur text-base top-12 py-1 z-10", {
          "w-max right-0 rounded-2xl": !iphone,
          "w-screen -right-4 rounded-b-2xl": iphone
        })}>
          {accountMenuData.map((menuItem) => { return (
            <li className="flex w-full whitespace-nowrap cursor-pointer">
              <Link to={menuItem.to} className={classNames("flex flex-row w-full whitespace-nowrap px-4 py-1", {
                "justify-end": iphone,
              })}>
                {!iphone && (
                  <img className="mr-1 w-6 h-6" src={menuItem.icon} alt="иконка персональных данных" />
                )}
                {menuItem.name}
                {iphone && (
                  <img className="ml-1 w-6 h-6" src={menuItem.icon} alt="иконка персональных данных" />
                )}
              </Link>
            </li>
          )})}
        </ul>
    )
}