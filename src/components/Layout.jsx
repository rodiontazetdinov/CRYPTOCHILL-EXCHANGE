import { PropsWithChildren, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ isLoggedIn }) => {
  return (
      <>
        <Header isLoggedIn={isLoggedIn} />
        <Outlet />
        <Footer />
      </>
  );
};