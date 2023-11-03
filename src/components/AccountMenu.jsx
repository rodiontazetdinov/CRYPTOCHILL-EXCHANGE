import { useState } from "react";
import { Link } from "react-router-dom";

import arrowUp from "../images/arrow-up.svg";
import arrowDown from "../images/arrow-down.svg";
import { AccountDropdown } from "./AccountDropdown";


export const AccountMenu = ({ isLanguageOpen, setIsLanguageOpen, isAccountOpen, setIsAccountOpen }) => {
  
  function handleOpen() {
    setIsAccountOpen((prev) => !prev)
    if (isLanguageOpen) {
      setIsLanguageOpen(false);
    }
  }

  return (
    <>
      <div
        className="flex flex-row items-center cursor-pointer relative"
        onClick={handleOpen}
      >
        <div className="text-xl">Аккаунт</div>
        <img src={isAccountOpen ? arrowUp : arrowDown} alt="arrow" className="ml-2" />
        {isAccountOpen && (
          <AccountDropdown />
        )}
      </div>
    </>
  );
};
