import { Link } from "react-router-dom";

import personal from "../images/account-icons/personal.svg";
import history from "../images/account-icons/history-change.svg";
import adressBook from "../images/account-icons/adress-book.svg";
import partner from "../images/account-icons/partner.svg";
import moneyBack from "../images/account-icons/money-back.svg";
import apiManagement from "../images/account-icons/api-management.svg";
import exit from "../images/account-icons/exit.svg";

export const AccountDropdown = () => {
    return (
        <ul className="flex flex-col  absolute bg-drop text-base right-7 top-12 w-max p-2">
            <li >
              <Link to="/account" className="flex flex-row items-center whitespace-nowrap mb-2">
              <img className="mr-1 w-6 h-6" src={personal} alt="иконка персональных данных" />
              Персональные данные
              </Link>
            </li>
            <li className="flex flex-row items-center whitespace-nowrap mb-2">
              <Link to="/account/history" className="flex flex-row items-center whitespace-nowrap mb-2">
              <img className="mr-1 w-6 h-6" src={history} alt="иконка истории обменов" />
              История обменов
              </Link>
            </li>
            <li className="flex flex-row items-center whitespace-nowrap mb-2">
              <Link to="/account/adress-book" className="flex flex-row items-center whitespace-nowrap mb-2">
              <img className="mr-1 w-6 h-6" src={adressBook} alt="иконка истории обменов" />
              Адресная книга
              </Link>
            </li>
            <li className="flex flex-row items-center whitespace-nowrap mb-2">
              <Link to="/account/partner" className="flex flex-row items-center whitespace-nowrap mb-2">
              <img className="mr-1 w-6 h-6" src={partner} alt="иконка истории обменов" />
              Партнерская программа
              </Link>
            </li>
            <li className="flex flex-row items-center whitespace-nowrap mb-2">
              <Link to={"/account/money-back"} className="flex flex-row items-center whitespace-nowrap mb-2">
              <img className="mr-1 w-6 h-6" src={moneyBack} alt="иконка истории обменов" />
              Выводы средств
              </Link>
            </li>
            <li className="flex flex-row items-center whitespace-nowrap mb-2">
              <Link to={"/account/api-management"} className="flex flex-row items-center whitespace-nowrap mb-2">
              <img className="mr-1 w-6 h-6" src={apiManagement} alt="иконка истории обменов" />
              API management
              </Link>
            </li>
            <li className="flex flex-row items-center whitespace-nowrap">
              <Link to={"/account/exit"} className="flex flex-row items-center whitespace-nowrap mb-2">
              <img className="mr-1 w-6 h-6" src={exit} alt="иконка истории обменов" />
              Выйти
              </Link>
            </li>
          </ul>
    )
}