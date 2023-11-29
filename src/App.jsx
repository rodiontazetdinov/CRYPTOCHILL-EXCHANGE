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
import { closeAllDropdowns, setCoins, setOrderCoins } from './store/actions';
import defaultImg from "./images/logo.svg";
import { useState, useEffect } from 'react';

export const App = () => {

  const dispatch = useDispatch();

  const getCurrencies = async () => {
    const response = await fetch("http://localhost:5000/getCcy", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    return response.json();
  };

  const getPrice = async (from, to, type = 'float') => {
    const response = await fetch("http://localhost:5000/getPrice", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        type
      })
    });
    return response.json();
  };

  useEffect(() => {
    let dataServer;

    getPrice('0.0001 BTC', 'ETH')
      .then((data) => {
        dispatch(setOrderCoins(data));
      });

    getCurrencies()
      .then((data) => {
        // dispatch(setCoins(data));
        dataServer = data;

        return Promise.allSettled(data.map((coin) => {
          return import(`./images/newCOIN/${coin.currency}.svg`);
        }))
      })
      .then((imgs) => {
        const newCoins = [];

        for (let i=0; i < dataServer.length; i++) {
          // console.log(dataServer[i], imgs[i]);
          newCoins.push({
            ...dataServer[i],
            img: imgs[i].status === "fulfilled" ? imgs[i].value.default : defaultImg
          });
        }

        dispatch(setCoins(newCoins));
      });

    // console.log()
  });

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
