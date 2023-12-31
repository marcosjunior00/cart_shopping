import React, { useContext } from "react";
import propTypes from "prop-types";
import formatCurrency from "../../utils/formatCurrency";
import AppContext from "../../context/appContext";
import * as C from "./styles";

const CartItem = ({ data }) => {
  const { cartItems, setCartItems } = useContext(AppContext);
  const { id, thumbnail, title, price } = data.product;

  const removeCartItem = () => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.product.id !== id
    );
    setCartItems(updatedCartItems);
  };

  return (
    <C.Container className="cart-item">
      <C.CartItemImg src={thumbnail} alt="Product image" />

      <C.Content>
        <C.ItemTitle>{title}</C.ItemTitle>
        <C.ItemPrice>{formatCurrency(price, "BRL")}</C.ItemPrice>

        <C.RemoveItemBtn type="button" onClick={removeCartItem}>
          <i class="bx bx-message-square-x"></i>
        </C.RemoveItemBtn>
      </C.Content>
    </C.Container>
  );
};

export default CartItem;

CartItem.propTypes = {
  data: propTypes.object,
}.isRequired;
