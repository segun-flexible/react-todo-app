import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Todo from "./Todo";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Todo />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
