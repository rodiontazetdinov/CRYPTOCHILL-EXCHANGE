import { PropsWithChildren, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ isLoggedIn, dropdownMainMenuOpen, setDropdownMainMenuOpen }) => {
  return (
      <>
        <Header
          isLoggedIn={isLoggedIn}
          dropdownMainMenuOpen={dropdownMainMenuOpen}
          setDropdownMainMenuOpen={setDropdownMainMenuOpen}
        />
        <Outlet />
        <Footer />
      </>
  );
};