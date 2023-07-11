import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/Home";
import { GlobalStyle } from "./styles/GlobalStyles";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Product from "./routes/Product";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <GlobalStyle />
  </React.StrictMode>
);
