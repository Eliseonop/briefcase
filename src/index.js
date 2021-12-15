import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"
ReactDOM.render(
  <React.StrictMode>
    <div id="html">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
