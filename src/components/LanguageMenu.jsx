import flagGb from "../images/gb-flag.svg";
import flagGe from "../images/ge-flag.svg";
import flagPl from "../images/pl-flag.svg";
import flagRu from "../images/rf-flag.svg";
import flagUa from "../images/ua-flag.svg";

import arrowUp from "../images/arrow-up.svg";
import arrowDown from "../images/arrow-down.svg";
import { Navbar } from "./Navbar";

import { FlagDropdown } from "./FlagDropdown";
import { useDispatch, useSelector } from "react-redux";
import { closeDropdown, openDropdown } from "../store/actions";

export const LanguageMenu = () => {

  const dropdownOpen = useSelector((state) => state.dropdowns.flag);
  const language = useSelector((state) => state.language);
  const dispatch = useDispatch();

  const flags = {
    "ua": flagUa,
    "ge": flagGe,
    "pl": flagPl,
    "ru": flagRu,
    "en": flagGb
  }

  return (
    <div
      className="flex flex-row items-center mr-7 cursor-pointer relative"
      onClick={(ev) => {
        dispatch(dropdownOpen ? closeDropdown('flag') : openDropdown('flag'));
        ev.stopPropagation();
      }}
    >
      <img src={flags[language]} alt="flag " className="rounded-lg" />
      <img src={dropdownOpen ? arrowUp : arrowDown} alt="arrow" className="ml-2"/>
      {dropdownOpen && (
          <FlagDropdown />
        )}
    </div>
  );
};
