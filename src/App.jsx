import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { Main } from './pages/Main';
import { AboutUs } from './pages/AboutUs';
import { Blog } from './pages/Blog';
import { Faq } from './pages/Faq';
import { ApiPage } from './pages/ApiPage';
import { Support } from './pages/Support';
import { SendingPage } from './pages/SendingPage';
import { Account } from './pages/Account';
import { useDispatch, useSelector } from 'react-redux';
import { closeAllDropdowns, setCoins } from './store/actions';
import BTCicon from "./images/newCOIN/BTC.svg";
import { useState } from 'react';

export const App = () => {
  //   const API_KEY = 'CZC970YKLNIquCCgW0JFxxBDvILAU27bZMImDaot'
  // const API_SECRET = 'k4sSQ8D9jxtiBEDKKMXWIIX2hV0FuEZsicpwpCff'
  // const FixedFloat = require("fixedfloat-api");

  // const fixed = new FixedFloat(API_KEY, API_SECRET);

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

  // useEffect(() => {
  //   // getCurrencies()
  //   // dispatch(setCoins() )
  //   getCurrencies().then((data) => {
  //     console.log(data)
  //   })

  //   // console.log()
  // });

  return (
    <div
      onClick={() => dispatch(closeAllDropdowns())}
      className="App bg-[center_-500px] bg-main-bg bg-main-bg-img overflow-x-hidden no-scrollbar"
    >
      {/* {imgsTest.map((img) => { return (
        <img src={img} alt="" />
      )})} */}
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Main/>} />
          <Route path="about" element={<AboutUs/>} />
          <Route path="blog" element={<Blog />} />
          <Route path="faq" element={<Faq/>} />
          <Route path="api" element={<ApiPage/>} />
          <Route path="support" element={<Support/>} />
          <Route path="sending" element={<SendingPage/>} />
          <Route path="account/*" element={<Account/>} />
        </Route>
      </Routes>
      {/* <Header/> */}
    </div>
  );
};
