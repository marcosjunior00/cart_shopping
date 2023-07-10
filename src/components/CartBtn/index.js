import React, { useContext } from "react";
import AppContext from "../../context/appContext";
import * as C from "./styles";

const CartBtn = () => {
  const { cartItems, activeCart, setActiveCart } = useContext(AppContext);

  const handleClickCart = () => {
    if (activeCart) {
      setActiveCart(false);
    } else {
      setActiveCart(true);
    }
    // activeCart ? setActiveCart(false) : setActiveCart(true)
  };

  return (
    <C.CartButton onClick={handleClickCart}>
      {cartItems.length > 0 && <C.CartStatus>{cartItems.length}</C.CartStatus>}
      <i className="bx bx-cart"></i>
    </C.CartButton>
  );
};

export default CartBtn;
