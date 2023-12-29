import { Link } from "react-router-dom";

import russia from "../images/rf-flag.svg";
import england from "../images/gb-flag.svg";
import ukraine from "../images/ua-flag.svg";
import georgia from "../images/ge-flag.svg";
import poland from "../images/pl-flag.svg";
import { useDispatch } from "react-redux";
import { setLanguage } from "../store/actions";

export const FlagDropdown = () => {
    const flagMenuData = [
      {name: 'Русский', code: 'ru', to: "/", icon: russia},
      {name: 'English', code: 'en', to: "/", icon: england},
      {name: 'Украïнська', code: 'ua', to: "/", icon: ukraine},
      {name: 'Georgian', code: 'ge', to: "/", icon: georgia},
      {name: 'Polish', code: 'pl', to: "/", icon: poland},
    ];

    const dispatch = useDispatch();

    return (
        <ul className="flex flex-col absolute min-w-[240px] rounded-2xl bg-drop backdrop-blur text-base left-0 top-12 w-max py-1 z-10">
            {flagMenuData.map((menuItem) => { return (
              <li
                className="flex flex-row items-center whitespace-nowrap cursor-pointer"
                onClick={() => {
                  console.log(menuItem.code);
                  dispatch(setLanguage(menuItem.code))
                }}
              >
                <Link to={menuItem.to} className="flex w-full items-center whitespace-nowrap px-4 py-1">
                  <img className="mr-1 w-11 rounded-lg" src={menuItem.icon} alt="иконка персональных данных" />
                  {menuItem.name}
                </Link>
              </li>
            )})}
        </ul>
    )
}