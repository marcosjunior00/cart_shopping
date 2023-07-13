import React, { useContext } from "react";
import * as C from "./styles";
import CartItem from "../CartItem";
import AppContext from "../../context/appContext";
import formatCurrency from "../../utils/formatCurrency";

const Cart = () => {
  const { cartItems, activeCart, setActiveCart } = useContext(AppContext);

  const total = cartItems.reduce(
    (acumulador, cartItem) => cartItem.product.price + acumulador,
    0
  );

  const turnToFalse = () => {
    setActiveCart(false);
  };

  return (
    <>
      <C.Container className={`${activeCart ? "" : "cart-disabled"}`}>
        <C.BtnLeave onClick={turnToFalse}>X</C.BtnLeave>
        <C.CartItems>
          {cartItems.map((cartItem) => {
            return <CartItem key={cartItem.product.id} data={cartItem} />;
          })}
        </C.CartItems>

        <C.CartResume>{formatCurrency(total, "BRL")}</C.CartResume>
      </C.Container>
      <C.BlurOverlay className={activeCart ? "" : "d-none"} />
    </>
  );
};

export default Cart;
