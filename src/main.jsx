import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./store/store";
import HttpsRedirect from 'react-https-redirect';
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <HttpsRedirect>
        <App />
      </HttpsRedirect>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
