import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContextProviders from "./ContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ContextProviders>
      <App />
    </ContextProviders>
  </React.StrictMode>
);
