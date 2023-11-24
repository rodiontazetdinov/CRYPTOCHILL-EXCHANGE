import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { Main } from "./pages/Main";
import { AboutUs } from "./pages/AboutUs";
import { Blog } from "./pages/Blog";
import { Faq } from "./pages/Faq";
import { ApiPage } from "./pages/ApiPage";
import { Support } from "./pages/Support";
import { SendingPage } from "./pages/SendingPage";
import { Account } from "./pages/Account";
import { useEffect, useState } from "react";

import { setCoins } from "./store/actions";
import { useDispatch } from "react-redux";
import { getCurrencies } from "./utils/api";

export const App = () => {
  //   const API_KEY = 'CZC970YKLNIquCCgW0JFxxBDvILAU27bZMImDaot'
  // const API_SECRET = 'k4sSQ8D9jxtiBEDKKMXWIIX2hV0FuEZsicpwpCff'
  // const FixedFloat = require("fixedfloat-api");

  // const fixed = new FixedFloat(API_KEY, API_SECRET);

  const [dropdownTagsOpen, setDropdownTagsOpen] = useState(false);
  const [dropdownMainMenuOpen, setDropdownMainMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const dispatch = useDispatch();

  const getSHA256Hash = async (input) => {
    const textAsBuffer = new TextEncoder().encode(input);
    const hashBuffer = await window.crypto.subtle.digest(
      "SHA-256",
      textAsBuffer
    );
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hash = hashArray
      .map((item) => item.toString(16).padStart(2, "0"))
      .join("");
    return hash;
  };

  const getCurrencies = async () => {
    const response = await fetch("http://localhost:5000", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    return response.json()
  };

  useEffect(() => {
    // getCurrencies()
    // dispatch(setCoins() )
    getCurrencies().then((data) => {
      console.log(data)
    })

    // console.log()
  });

  return (
    <div
      onClick={() => {
        if (isLanguageOpen) setIsLanguageOpen(false);
        if (isAccountOpen) setIsAccountOpen(false);
        if (dropdownTagsOpen) setDropdownTagsOpen(false);
        if (dropdownMainMenuOpen) setDropdownMainMenuOpen(false);
      }}
      className="App bg-[center_-500px] bg-main-bg bg-main-bg-img overflow-x-hidden"
    >
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              dropdownMainMenuOpen={dropdownMainMenuOpen}
              setDropdownMainMenuOpen={setDropdownMainMenuOpen}
              isLanguageOpen={isLanguageOpen}
              setIsLanguageOpen={setIsLanguageOpen}
              isAccountOpen={isAccountOpen}
              setIsAccountOpen={setIsAccountOpen}
            />
          }
        >
          <Route index element={<Main />} />
          <Route path="about" element={<AboutUs />} />
          <Route
            path="blog"
            element={
              <Blog
                dropdownTagsOpen={dropdownTagsOpen}
                setDropdownTagsOpen={setDropdownTagsOpen}
              />
            }
          />
          <Route path="faq" element={<Faq />} />
          <Route path="api" element={<ApiPage />} />
          <Route path="support" element={<Support />} />
          <Route path="sending" element={<SendingPage />} />
          <Route path="account/*" element={<Account />} />
        </Route>
      </Routes>
      {/* <Header/> */}
    </div>
  );
};
