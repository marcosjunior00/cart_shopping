import React, { useContext, useEffect } from "react";
import * as C from "./styles";

import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../ProductCard";
import Loading from "../Loading";
import AppContext from "../../context/appContext";

const Products = () => {
  const { products, setProducts, loading, setLoading } = useContext(AppContext);

  useEffect(() => {
    fetchProducts("c").then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, []);

  return (
    (loading && <Loading />) || (
      <C.Container>
        {products.map((product) => (
          <ProductCard key={product.id} data={{ product }} />
        ))}
      </C.Container>
    )
  );
};

export default Products;
