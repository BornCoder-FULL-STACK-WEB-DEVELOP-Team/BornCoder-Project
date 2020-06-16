import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Details from "./components/details/Details";
import Price from "./components/price/Price";
import Descrip from "./components/descrip/Descrip";
import Offers from "./components/offers/Offers";
import Message from "./components/message/Message";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <div className="content-layout">
    <div className="details-layout">
      <Details />
      <Price />
    </div>
    <div className="descrip-layout">
      <Descrip />
    </div>
    <div className="offers-layout">
      <Offers />
    </div>
    <div className="offers-layout">
      <Message />
    </div>
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
