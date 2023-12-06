import { Link } from "react-router-dom";

import russia from "../images/rf-flag.svg";
import england from "../images/uk-flag.svg";
import ukraine from "../images/ua-flag.svg";
import georgia from "../images/ge-flag.svg";
import poland from "../images/pl-flag.svg";

export const FlagDropdown = () => {

    const flagMenuData = [
      {name: 'Русский', to: "/", icon: russia},
      {name: 'English', to: "/", icon: england},
      {name: 'Украïнська', to: "/", icon: ukraine},
      {name: 'Georgian', to: "/", icon: georgia},
      {name: 'Polish', to: "/", icon: poland},
    ]
    return (
        <ul className="flex flex-col absolute min-w-[240px] rounded-2xl bg-drop backdrop-blur text-base left-0 top-12 w-max py-1 z-10">
            {flagMenuData.map((menuItem) => { return (
              <li className="flex flex-row items-center whitespace-nowrap cursor-pointer">
                <Link to={menuItem.to} className="flex w-full items-center whitespace-nowrap px-4 py-1">
                  <img className="mr-1 w-11 rounded-lg" src={menuItem.icon} alt="иконка персональных данных" />
                  {menuItem.name}
                </Link>
              </li>
            )})}
        </ul>
    )
}