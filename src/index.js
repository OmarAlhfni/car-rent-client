import React from 'react'
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./store";
import { onLodinSignIn } from "./actions";

store.dispatch(onLodinSignIn());

ReactDOM.render(
  <BrowserRouter basename="/">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
