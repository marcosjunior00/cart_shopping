import React, { useContext } from "react";
import * as C from "./styles";
import propTypes from "prop-types";
import formatCurrency from "../../utils/formatCurrency";
import AppContext from "../../context/appContext";

const ProductCard = ({ data }) => {
  const { title, thumbnail, price } = data;

  const { cartItems, setCartItems } = useContext(AppContext);

  const addCartItem = () => {
    setCartItems([...cartItems, data]);
  };

  return (
    <C.Card>
      <C.ProductImg
        src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
        alt="product_image"
      />

      <C.CardInfo>
        <C.ProductPrice>{formatCurrency(price, "BRL")}</C.ProductPrice>
        <C.ProductTitle>{title}</C.ProductTitle>
      </C.CardInfo>

      <C.BtnAdd className="btnAdd" type="button" onClick={addCartItem}>
        <i className="bx bx-cart-add"></i>
      </C.BtnAdd>
    </C.Card>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
