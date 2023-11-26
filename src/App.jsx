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

  const dispatch = useDispatch();

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
}
