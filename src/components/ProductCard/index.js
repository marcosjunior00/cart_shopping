import React, { useContext } from "react";
import propTypes from "prop-types";

import * as C from "./styles";
import formatCurrency from "../../utils/formatCurrency";
import AppContext from "../../context/appContext";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ data }) => {
  const { product } = data;
  const { thumbnail, title, price } = product;

  const { cartItems, setCartItems, setProduct } = useContext(AppContext);

  const navigate = useNavigate();

  const addCartItem = async () => {
    await setCartItems([...cartItems, data]);
  };

  const redirectToProduct = () => {
    setProduct(product);
    navigate("/product");
  };

  return (
    <C.Card>
      <div onClick={redirectToProduct}>
        <C.ProductImg
          src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
          alt="product_image"
        />

        <C.CardInfo>
          <C.ProductPrice>{formatCurrency(price, "BRL")}</C.ProductPrice>
          <C.ProductTitle>{title}</C.ProductTitle>
        </C.CardInfo>
      </div>

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
