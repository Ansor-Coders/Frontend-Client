import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; 
import store from "./redux/store/store"; 
import Root from "./components/Root/Root";
import "./base.scss";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
      <Root />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
