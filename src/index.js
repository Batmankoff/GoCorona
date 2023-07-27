import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "@fonts";
import "@variables";
import "@global";
import Router from "@components/Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router />
  </Provider>
);
