import { PropsWithChildren, useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import classNames from "classnames";
import { useMediaQuery } from "@uidotdev/usehooks";

export const AccountWrapper = () => {
  const iphone = useMediaQuery("only screen and (min-width : 343px) and (max-width : 744px)");
  const ipadMini = useMediaQuery("only screen and (min-width : 744px) and (max-width : 1024px)");
  const macbook = useMediaQuery("only screen and (min-width : 1024px) and (max-width : 1328px)");
  const desctop = useMediaQuery("only screen and (min-width : 1328px)");


  return (
    <div className="bg-account">
      <div className={classNames(
          "flex mx-auto text-white font-semibold text-left", {
          "max-w-1328 min-h-screen pt-[52px]": desctop,
          "max-w-main-container pt-[52px]": macbook,
          "max-w-tablet-container": ipadMini,
          "max-w-mobile-container pt-0": iphone,
      })}>
        {(desctop || macbook) && (
          <Sidebar />
        )}
        <Outlet />
      </div>
    </div>
  );
};