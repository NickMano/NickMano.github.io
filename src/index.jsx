import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "./context/ThemeContext";
import App from "./routes/App";
import "./styles/App.scss";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
  ,
  document.getElementById("app")
);
