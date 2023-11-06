import logo from "../images/logo.png";
import burger from "../images/burger.svg";
import { AccountMenu } from "./AccountMenu";
import { LanguageMenu } from "./LanguageMenu";
import { Navbar } from "./Navbar";
import { AuthMenu } from "./AuthMenu";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";

export const Header = ({ isLoggedIn }) => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const iphone = useMediaQuery("only screen and (min-width : 320px) and (max-width : 744px)");
  const ipadMini = useMediaQuery("only screen and (min-width : 744px) and (max-width : 1024px)");
  const macbook = useMediaQuery("only screen and (min-width : 1024px) and (max-width : 1328px)");
  const desctop = useMediaQuery("only screen and (min-width : 1328px)");

  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  return (
    <header
      className={classNames("w-full mx-auto pt-6 flex justify-between", {
        "max-w-1328 justify-between": desctop,
        "max-w-main-container justify-between": macbook,
        "max-w-tablet-container flex-col justify-center items-center": ipadMini,
        "max-w-mobile-container": iphone,
      })}
    >
      {!iphone && (
        <Link to={"/"} className="flex flex-row items-center h-16">
          <img className="mr-4" src={logo} alt="logo" />
          <p className="text-xl">CRYPTOCHILL</p>
        </Link>
      )}
      {ipadMini && (
        <div className="flex flex-row justify-between w-full mt-5">
          <Navbar />
          <div className="flex flex-row items-center h-16">
            <LanguageMenu
              isLanguageOpen={isLanguageOpen}
              setIsLanguageOpen={setIsLanguageOpen}
              isAccountOpen={isAccountOpen}
              setIsAccountOpen={setIsAccountOpen}
            />
            {!isLoggedIn && (
              <AccountMenu
                isLanguageOpen={isLanguageOpen}
                setIsLanguageOpen={setIsLanguageOpen}
                isAccountOpen={isAccountOpen}
                setIsAccountOpen={setIsAccountOpen}
              />
            )}
            {isLoggedIn && <AuthMenu />}
          </div>
        </div>
      )}
      {!ipadMini && !iphone && (
        <>
          <Navbar />
          <div className="flex flex-row items-center h-16">
            <LanguageMenu
              isLanguageOpen={isLanguageOpen}
              setIsLanguageOpen={setIsLanguageOpen}
              isAccountOpen={isAccountOpen}
              setIsAccountOpen={setIsAccountOpen}
            />
            {!isLoggedIn && (
              <AccountMenu
                isLanguageOpen={isLanguageOpen}
                setIsLanguageOpen={setIsLanguageOpen}
                isAccountOpen={isAccountOpen}
                setIsAccountOpen={setIsAccountOpen}
              />
            )}
            {isLoggedIn && <AuthMenu />}
          </div>
        </>
      )}
      {iphone && (
        <div className="flex flex-col w-full">
          <div className="flex flex- justify-between">
            <Link to={"/"} className="flex flex-row items-center h-16">
              <img className="mr-4" src={logo} alt="logo" />
              <p className="text-xl">CRYPTOCHILL</p>
            </Link>
            <button>
              <img src={burger} alt="burger" />
            </button>
          </div>
            <div className="flex flex-row items-center h-16 justify-between mt-7">
              <LanguageMenu
                isLanguageOpen={isLanguageOpen}
                setIsLanguageOpen={setIsLanguageOpen}
                isAccountOpen={isAccountOpen}
                setIsAccountOpen={setIsAccountOpen}
              />
              {!isLoggedIn && (
                <AccountMenu
                  isLanguageOpen={isLanguageOpen}
                  setIsLanguageOpen={setIsLanguageOpen}
                  isAccountOpen={isAccountOpen}
                  setIsAccountOpen={setIsAccountOpen}
                />
              )}
              {isLoggedIn && <AuthMenu />}
            </div>
        </div>
      )}
    </header>
  );
};
