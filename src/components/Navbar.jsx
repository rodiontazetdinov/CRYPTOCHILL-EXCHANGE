import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const iphone = useMediaQuery("only screen and (min-width : 320px) and (max-width : 744px)");

  const classLink = classNames("", {"w-full mb-3 last:mb-0": iphone});

  return (
    <nav className={classNames("container flex max-w-sm text-xl font-semibold text-start", {
      "justify-between items-center": !iphone,
      "flex-col items-start": iphone,
    })}>
      <NavLink className={({ isActive, isPending }) => isActive ? `text-blue-200 ${classLink}` : classLink} to={"/about"}>О нас</NavLink>
      <NavLink className={({ isActive, isPending }) => isActive ? `text-blue-200 ${classLink}` : classLink} to={"/blog"}>Блог</NavLink>
      <NavLink className={({ isActive, isPending }) => isActive ? `text-blue-200 ${classLink}` : classLink} to={"/faq"}>FAQ</NavLink>
      <NavLink className={({ isActive, isPending }) => isActive ? `text-blue-200 ${classLink}` : classLink} to={"/api"}>API</NavLink>
      <NavLink className={({ isActive, isPending }) => isActive ? `text-blue-200 ${classLink}` : classLink} to={"/support"}>Поддержка</NavLink>
    </nav>
  );
};


