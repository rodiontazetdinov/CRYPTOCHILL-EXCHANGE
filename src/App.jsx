import './App.scss';
import { Routes, Route, useParams } from 'react-router-dom';
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
import { api } from './utils/api';
import { NewsPage } from './components/NewsPage';

export const App = () => {

  const dispatch = useDispatch();

  const state = useSelector(state => state);

  const [ localCoinSend, localCoinRecv ] = JSON.parse(localStorage.getItem('orderCoins') || "[null, null]");

  const [ coinSend, setCoinSent ] = useState(localCoinSend || state.creatingOrder.from.code);
  const [ coinRecv, setCoinRecv ] = useState(localCoinRecv || state.creatingOrder.to.code);

  // const getSHA256Hash = async (input) => {
  //   const textAsBuffer = new TextEncoder().encode(input);
  //   const hashBuffer = await window.crypto.subtle.digest(
  //     "SHA-256",
  //     textAsBuffer
  //   );
  //   const hashArray = Array.from(new Uint8Array(hashBuffer));
  //   const hash = hashArray
  //     .map((item) => item.toString(16).padStart(2, "0"))
  //     .join("");
  //   return hash;
  // };

  // const getCurrencies = async () => {
  //   const response = await fetch("http://localhost:3232/ccies", {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //     },
  //   });
  //   return response.json()
  // };
  // const getData = async () => {
  //   const response = await fetch("http://localhost:3232", {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //     },
  //   });
  //   return response.json()
  // };

  // const getPrice = async (from, to, type = 'float') => {
  //   const response = await fetch("http://localhost:3232/price", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       from,
  //       to,
  //       type
  //     })
  //   });
  //   return response.json()
  // };

  useEffect(() => {
    api.getCurrencies()
      .then((response) => {
        dispatch(setCoins(response.data));
      })
    // api.getPrice({"fromCcy":"BTC", "toCcy":"USDTTRC", "amount":0.5, "direction":"from", "type":"float"})
    //   .then((response) => {
    //     console.log(response.data);
    //     dispatch(setOrderCoins(response.data));
    //   })

    // api.createOrder({"fromCcy":"BTC", "toCcy":"USDTTRC", "amount":0.5, "direction":"from", "type":"float", "toAddress":"TAzsQ9Gx8eqFNFSKbeXrbi45CuVPHzA8wr"}).then((data) => {
    //     console.log(data);
    //   })
      // api.getOrder({"id": "ZG3Y2F", "token": "1LBH03tPYoU2RNBEXBNcl0B6cxrHM5VXloOyTjcd"}).then((data) => {
      //   console.log(data);
      // })
      // api.setEmail({"id": "ZG3Y2F", "token": "1LBH03tPYoU2RNBEXBNcl0B6cxrHM5VXloOyTjcd", "email": "tweakymoo@gmail.com"}).then((data) => {
      //   console.log(data);
      // })
      // api.getQr({"id": "ZG3Y2F", "token": "1LBH03tPYoU2RNBEXBNcl0B6cxrHM5VXloOyTjcd"}).then((data) => {
      //   console.log(data);
      // })
      // api.cancelOrder({"id": "ZG3Y2F", "token": "1LBH03tPYoU2RNBEXBNcl0B6cxrHM5VXloOyTjcd", "choice":"REFUND", "address": "bc1qatuvdpzczlug7f6u5knmnpd0f3rj8j554qls0e"}).then((data) => {
      //   console.log(data);
      // })
  }, []);

  return (
    <div
      onClick={() => dispatch(closeAllDropdowns())}
      className="App bg-[center_-500px] bg-main-bg bg-main-bg-img overflow-x-hidden no-scrollbar"
    >
      {/* {imgsTest.map((img) => { return (
        <img src={img} alt="" />
      )})} */}
      <Routes>
        <Route path="/" element={<Layout
          setCoinSent={setCoinSent}
          setCoinRecv={setCoinRecv}
        />}>
          <Route index element={<Main 
            coinSend={coinSend}
            coinRecv={coinRecv}
            setCoinSent={setCoinSent}
            setCoinRecv={setCoinRecv}
          />} />
          <Route path="about" element={<AboutUs/>} />
          <Route path="blog" element={<Blog />} />
          <Route path="faq" element={<Faq/>} />
          <Route path="api" element={<ApiPage/>} />
          <Route path="support" element={<Support/>} />
          <Route path="sending/:id" element={<SendingPage/>} />
          <Route path="account/*" element={<Account/>} />
          <Route path="news/:id" element={<NewsPage />} />
        </Route>
      </Routes>
      {/* <Header/> */}
    </div>
  );
};
