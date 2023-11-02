import logo from "../images/logo.png";
import { AccountMenu } from "./AccountMenu";
import { LanguageMenu } from "./LanguageMenu";
import { Navbar } from "./Navbar";
import { AuthMenu } from "./AuthMenu";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = ({isLoggedIn}) => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  return (
    <header className="container mx-auto pt-6 flex justify-between">
      <Link to={"/"} className="flex flex-row items-center h-16">
        <img className="mr-4" src={logo} alt="logo" />
        <p className="text-xl">CRYPTOCHILL</p>
      </Link>
      <Navbar />
      <div className="flex flex-row items-center h-16">
        <LanguageMenu isLanguageOpen={isLanguageOpen} setIsLanguageOpen={setIsLanguageOpen} isAccountOpen={isAccountOpen} setIsAccountOpen={setIsAccountOpen}/>
        {!isLoggedIn && <AccountMenu isLanguageOpen={isLanguageOpen} setIsLanguageOpen={setIsLanguageOpen} isAccountOpen={isAccountOpen} setIsAccountOpen={setIsAccountOpen}/>}
        {isLoggedIn && <AuthMenu />}
      </div>
    </header>
  );
};
