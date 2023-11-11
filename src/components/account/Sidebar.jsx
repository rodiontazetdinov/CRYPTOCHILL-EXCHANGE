import { NavLink } from "react-router-dom";

// img
import personal from "../../images/account-icons/personal.svg";
import history from "../../images/account-icons/history-change.svg";
import adressBook from "../../images/account-icons/adress-book.svg";
import classNames from "classnames";
import partner from "../../images/account-icons/partner.svg";
import moneyBack from "../../images/account-icons/money-back.svg";
import apiManagement from "../../images/account-icons/api-management.svg";
import exit from "../../images/account-icons/exit.svg";




export const Sidebar = () => {

    const menuItems = [
        {
            name: 'Персональные данные',
            img: personal,
            path: ''
        },
        {
            name: 'История обменов',
            img: history,
            path: 'history'
        },
        {
            name: 'Адресная книга',
            img: adressBook,
            path: 'adress-book'
        },
        {
            name: 'Партнерская программа',
            img: partner,
            path: 'partner'
        },
        {
            name: 'Выводы средств',
            img: moneyBack,
            path: 'money-back'
        },
        {
            name: 'API management',
            img: apiManagement,
            path: 'api-management'
        },
        {
            name: 'Выйти',
            img: exit,
            path: 'exit'
        },
    ]

    return (
        <div className="pr-14 w-[254px]">
            <ul className="flex flex-col whitespace-nowrap">
                {menuItems.map((item, index) => {
                    return (
                        <li key={index} className="text-base font-normal mb-4">
                            <NavLink className="flex" to={item.path}>
                                <img 
                                    className={classNames(
                                        "text-transparent mr-1 w-6 h-6"
                                    )}
                                    src={item.img}
                                    alt={item.path}
                                />
                                <span>{item.name}</span>
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}