import flag from "../images/rf-flag.svg";
import arrowUp from "../images/arrow-up.svg";
import arrowDown from "../images/arrow-down.svg";
import { Navbar } from "./Navbar";

import { FlagDropdown } from "./FlagDropdown";

export const LanguageMenu = ({ isLanguageOpen, setIsLanguageOpen, isAccountOpen, setIsAccountOpen }) => {

  function handleOpen(ev) {
    setIsLanguageOpen((prev) => !prev);
    if (isAccountOpen) {
      setIsAccountOpen(false);
    }
    ev.stopPropagation();
  }

  return (
    <div className="flex flex-row items-center mr-7 cursor-pointer relative" onClick={handleOpen}>
      <img src={flag} alt="flag " className="rounded-lg" />
      <img src={isLanguageOpen ? arrowUp : arrowDown} alt="arrow" className="ml-2"/>
      {isLanguageOpen && (
          <FlagDropdown />
        )}
    </div>
  );
};
