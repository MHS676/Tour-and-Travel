import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Navbar from "./components/navbar";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>,
  document.getElementById("root")
);

// Report performance metrics
reportWebVitals();
