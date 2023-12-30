import { PropsWithChildren, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useSelector } from "react-redux";

export const Layout = ({
  isLoggedIn,
  setCoinSent,
  setCoinRecv,
}) => {
  return (
      <>
        <Header isLoggedIn={isLoggedIn} />
        <Outlet />
        <Footer
          setCoinSent={setCoinSent}
          setCoinRecv={setCoinRecv}
        />
      </>
  );
};