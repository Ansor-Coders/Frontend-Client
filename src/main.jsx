import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // Import the Provider
import store from "./redux/store/store"; // Import your Redux store
import Root from "./components/Root/Root";
import "./base.scss";

// Wrap your application with the Provider and pass the store as a prop
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  </Provider>
);
