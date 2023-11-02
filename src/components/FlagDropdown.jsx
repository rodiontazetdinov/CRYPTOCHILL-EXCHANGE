import { Link } from "react-router-dom";

import russia from "../images/rf-flag.svg";
import england from "../images/uk-flag.svg";
import ukraine from "../images/ua-flag.svg";
import georgia from "../images/ge-flag.svg";
import poland from "../images/pl-flag.svg";

export const FlagDropdown = () => {
    return (
        <ul className="flex flex-col bg-drop absolute text-base left-2 top-12 min-w-[224px] p-2">
            <li >
              <Link to="/personal-data" className="flex flex-row items-center whitespace-nowrap mb-2">
              <img className="mr-2 w-6 h-6" src={russia} alt="иконка персональных данных" />
              Русский
              </Link>
            </li>
            <li className="flex flex-row items-center whitespace-nowrap mb-2">
              <Link to="/history" className="flex flex-row items-center whitespace-nowrap mb-2">
              <img className="mr-2 w-6 h-6" src={england} alt="иконка истории обменов" />
              English
              </Link>
            </li>
            <li className="flex flex-row items-center whitespace-nowrap mb-2">
              <Link to="/adress-book" className="flex flex-row items-center whitespace-nowrap mb-2">
              <img className="mr-2 w-6 h-6" src={ukraine} alt="иконка истории обменов" />
              Украïнська
              </Link>
            </li>
            <li className="flex flex-row items-center whitespace-nowrap mb-2">
              <Link to="/partner" className="flex flex-row items-center whitespace-nowrap mb-2">
              <img className="mr-2 w-6 h-6" src={georgia} alt="иконка истории обменов" />
              Georgian
              </Link>
            </li>
            <li className="flex flex-row items-center whitespace-nowrap mb-2">
              <Link to={"/money-back"} className="flex flex-row items-center whitespace-nowrap mb-2">
              <img className="mr-2 w-6 h-6" src={poland} alt="иконка истории обменов" />
              Polish
              </Link>
            </li>
          </ul>
    )
}