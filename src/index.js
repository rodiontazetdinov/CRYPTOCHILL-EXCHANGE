import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { App } from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./store/reducers.js";

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Provider store={store}>
    <BrowserRouter basename="/CRYPTOCHILL-EXCHANGE">
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
