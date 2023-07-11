import React, { useState } from "react";
import propTypes from "prop-types";
import AppContext from "./appContext";

const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [product, setProduct] = useState([]);
  const [activeCart, setActiveCart] = useState(false);
  const [loading, setLoading] = useState(true);

  const value = {
    products,
    setProducts,
    cartItems,
    setCartItems,
    activeCart,
    setActiveCart,
    product,
    setProduct,
    loading,
    setLoading,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;
