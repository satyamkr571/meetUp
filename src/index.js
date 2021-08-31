import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import "./index.css";
import App from "./App";
import { FavContextProvider } from "./store/favContext";

ReactDOM.render(
  <FavContextProvider>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </FavContextProvider>,
  document.getElementById("root")
);
