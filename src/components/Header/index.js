import React, { useContext, useState } from "react";
import * as C from "./styles";
import fetchProducts from "../../api/fetchProducts";
import AppContext from "../../context/appContext";
import CartBtn from "../CartBtn";

const Header = () => {
  const { setProducts, setLoading } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);

    const products = await fetchProducts(searchValue);
    setProducts(products);
    setLoading(false);
    setSearchValue("");
  };

  return (
    <C.Container>
      <C.Title>LojaOnline</C.Title>

      <C.RightGroup>
        <C.InputSearchGroup>
          <C.InputSearch
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Pesquise um produto"
          />
          <C.BtnSearch type="submit" onClick={handleSearch}>
            <i className="bx bx-search"></i>
          </C.BtnSearch>
        </C.InputSearchGroup>
        <CartBtn />
        {/* <C.CartButton onClick={verifyCart}>
          {cartItems.length > 0 && (
            <C.CartStatus>{cartItems.length}</C.CartStatus>
          )}
          <i className="bx bx-cart"></i>
        </C.CartButton> */}
      </C.RightGroup>
    </C.Container>
  );
};

export default Header;
