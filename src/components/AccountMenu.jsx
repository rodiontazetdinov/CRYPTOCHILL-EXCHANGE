import { useState } from "react";
import { Link } from "react-router-dom";

import arrowUp from "../images/arrow-up.svg";
import arrowDown from "../images/arrow-down.svg";
import { AccountDropdown } from "./AccountDropdown";
import { useDispatch, useSelector } from "react-redux";
import { closeAllDropdowns, closeDropdown, openDropdown } from "../store/actions";


export const AccountMenu = ({ isLanguageOpen, setIsLanguageOpen, isAccountOpen, setIsAccountOpen }) => {
  const dropdownOpen = useSelector((state) => state.dropdowns.account);
  const dispatch = useDispatch();

  return (  
      <div
        className="flex flex-row items-center cursor-pointer relative"
        onClick={(ev) => {
          dispatch(dropdownOpen ? closeDropdown('account') : openDropdown('account'));
          ev.stopPropagation();
        }}
      >
        <div className="text-xl">Аккаунт</div>
        <img src={dropdownOpen ? arrowUp : arrowDown} alt="arrow" className="ml-2" />
        {dropdownOpen && (
          <AccountDropdown />
        )}
      </div>
  );
};
