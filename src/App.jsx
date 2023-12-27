import React from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Provider from "./context/Provider";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <Provider>
        <Header />
        <Outlet />
        <Cart />
      </Provider>
    </div>
  );
}

export default Home;
