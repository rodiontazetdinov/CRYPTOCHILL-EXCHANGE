import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="container flex justify-between items-center max-w-sm">
      <NavLink className={({ isActive, isPending }) => isActive ? "text-blue-200" : ""} to={"/about"}>О нас</NavLink>
      <NavLink className={({ isActive, isPending }) => isActive ? "text-blue-200" : ""} to={"/blog"}>Блог</NavLink>
      <NavLink className={({ isActive, isPending }) => isActive ? "text-blue-200" : ""} to={"/faq"}>FAQ</NavLink>
      <NavLink className={({ isActive, isPending }) => isActive ? "text-blue-200" : ""} to={"/api"}>API</NavLink>
      <NavLink className={({ isActive, isPending }) => isActive ? "text-blue-200" : ""} to={"/support"}>Поддержка</NavLink>
    </nav>
  );
};


