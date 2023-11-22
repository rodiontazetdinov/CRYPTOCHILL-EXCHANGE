// // import { API_URL, JWT_LOCAL_KEY, MAIN_API_URL, MOVIES_ROUT, SIGN_IN_ROUT, SIGN_UP_ROUT, USER_ROUT, YOUTUBE_TRAILER_LINK } from "./constants";

// class api {
//   constructor({ url, headers }) {
//     this._url = url;
//     this._headers = headers;
//   }

//   _checkResponse(res) {
//     if (res.ok) {
//       return res.json();
//     }
//     return Promise.reject(`Ошибка: ${res.status}`);
//   }

//   getUserInfo() {
//     return fetch(`${this._url}${USER_ROUT}`, {
//       method: "GET",
//       headers: {
//         ...this._headers,
//         Authorization: `Bearer ${localStorage.getItem(JWT_LOCAL_KEY)}`,
//       },
//     }).then(this._checkResponse);
//   }

//   updateUser(data) {
//     return fetch(`${this._url}${USER_ROUT}`, {
//       method: "PATCH",
//       headers: {
//         ...this._headers,
//         Authorization: `Bearer ${localStorage.getItem(JWT_LOCAL_KEY)}`,
//       },
//       body: JSON.stringify({
//         name: data.name,
//         email: data.email,
//       }),
//     }).then(this._checkResponse);
//   }

//   getMovies() {
//     return fetch(`${this._url}${MOVIES_ROUT}`, {
//       method: "GET",
//       headers: {
//         ...this._headers,
//         Authorization: `Bearer ${localStorage.getItem("jwt")}`,
//       },
//     }).then(this._checkResponse);
//   }

//   saveMovie(data) {
//     return fetch(`${this._url}${MOVIES_ROUT}/`, {
//       method: "POST",
//       headers: {
//         ...this._headers,
//         Authorization: `Bearer ${localStorage.getItem("jwt")}`,
//       },
//       body: JSON.stringify({
//         movieId: data.id,
//         country: data.country ?? "country",
//         director: data.director,
//         duration: data.duration,
//         year: data.year,
//         description: data.description,
//         image: `${API_URL}${data.image.url}`,
//         trailerLink:
//           data.trailerLink ??
//           `${YOUTUBE_TRAILER_LINK}${data.nameRU}`,
//         nameRU: data.nameRU,
//         nameEN: data.nameEN,
//         thumbnail: `${API_URL}${data.image.formats.thumbnail.url}`,
        
//       }),
//     }).then(this._checkResponse);
//   }

//   register(name, email, password) {
//     return fetch(`${this._url}${SIGN_UP_ROUT}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({name, email, password}),
//     }).then(this._checkResponse);
//   }
  
//   login(email, password) {
//     return fetch(`${this._url}${SIGN_IN_ROUT}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({email, password}),
//     }).then(this._checkResponse);
//   }
  
//   check(jwt) {
//     return fetch(`${this._url}${USER_ROUT}`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${jwt}`,
//       },
//     }).then(this._checkResponse);
//   }

//   removeMovie(movieId) {
//     return fetch(`${this._url}${MOVIES_ROUT}/${movieId}`, {
//       method: "DELETE",
//       headers: {
//         ...this._headers,
//         Authorization: `Bearer ${localStorage.getItem(JWT_LOCAL_KEY)}`,
//       },
//     }).then(this._checkResponse);
//   }
// }

// const mainApi = new MainApi({
//   url: "https://fixedfloat.com/api/v2/",
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//     "X-API-KEY": "CZC970YKLNIquCCgW0JFxxBDvILAU27bZMImDaot",
//     "X-API-SIGN": "GENERATED_SIGN",
//   },
// });

// export default mainApi;

// // https://ff.io/api/v2/ccies доступные валюты

// import API_KEY from "../utils/constants";
// import API_SECRET from "../utils/constants";

const STATES = [
  /* 0 */ 'Transaction expected',
  /* 1 */ 'The transaction is waiting for the required number of confirmations',
  /* 2 */ 'Currency exchange',
  /* 3 */ 'Sending funds',
  /* 4 */ 'Completed',
  /* 5 */ 'Expired',
  /* 6 */ 'Not currently in use',
  /* 7 */ 'A decision must be made to proceed with the order'
];

const API_KEY = 'CZC970YKLNIquCCgW0JFxxBDvILAU27bZMImDaot'
const API_SECRET = 'k4sSQ8D9jxtiBEDKKMXWIIX2hV0FuEZsicpwpCff'

const FixedFloat = require("fixedfloat-api");
const fixed = new FixedFloat(API_KEY, API_SECRET);

const getCurrencies = async () => {
  const response = await fixed.getCurrencies();
  console.log(response.length)
}

const getPrice = async () => {
  const response = await fixed.getPrice('0.1 ETH', 'BTC');
  // const response = await fixed.getPrice('ETH', '0.1 BTC', 'fixed');
  console.log(response)
}

const getPriceFixed = async () => {
  // const response = await fixed.getPrice('0.1 ETH', 'BTC');
  const response = await fixed.getPrice('ETH', '0.1 BTC', 'fixed');
  console.log(response)
}

const getOrder = async () => {
  const response = await fixed.getOrder('ORDER_ID', 'ORDER_TOKEN');
  console.log(response)
}

const setEmergency = async () => {
  await fixed.setEmergency('ORDER_ID', 'ORDER_TOKEN', 'EXCHANGE or REFUND', 'ADDRESS for refund');
}

const createOrder = async () => {
  const response = await fixed.createOrder('0.1 ETH', 'BTC', 'BTC address');
  console.log(response)
}




