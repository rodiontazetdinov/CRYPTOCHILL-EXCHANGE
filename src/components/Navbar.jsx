import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const iphone = useMediaQuery("only screen and (min-width : 320px) and (max-width : 744px)");

  const classLink = classNames("", {" mb-3 last:mb-0": iphone});

  return (
    <nav className={classNames("flex text-xl font-semibold", {
      "justify-between items-center max-w-sm container": !iphone,
      "flex-col text-end": iphone,
    })}>
      <NavLink className={({ isActive, isPending }) => isActive ? `text-blue-200 ${classLink}` : classLink} to={"/about"}>О нас</NavLink>
      <NavLink className={({ isActive, isPending }) => isActive ? `text-blue-200 ${classLink}` : classLink} to={"/blog"}>Блог</NavLink>
      <NavLink className={({ isActive, isPending }) => isActive ? `text-blue-200 ${classLink}` : classLink} to={"/faq"}>FAQ</NavLink>
      <NavLink className={({ isActive, isPending }) => isActive ? `text-blue-200 ${classLink}` : classLink} to={"/api"}>API</NavLink>
      <NavLink className={({ isActive, isPending }) => isActive ? `text-blue-200 ${classLink}` : classLink} to={"/support"}>Поддержка</NavLink>
    </nav>
  );
};


