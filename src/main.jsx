import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "./components/ui/sonner.jsx";
import { Provider } from "react-redux";
// import store from "./redux/store.js";

// const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Toaster />
  </React.StrictMode>
);
