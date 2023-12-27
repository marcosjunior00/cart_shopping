import React, { useContext } from "react";
import AppContext from "../context/appContext";

import * as C from "../styles/ProductPageStyles";
import ProductHome from "../components/ProductHome";

const Product = () => {
  const { product } = useContext(AppContext);

  return (
    <>
      <C.GlobalStyle />
      <C.Container>
        <ProductHome data={product} />
      </C.Container>
    </>
  );
};

export default Product;
