import React, { useContext } from "react";
import * as C from "./styles";
import AppContext from "../../context/appContext";
import formatCurrency from "../../utils/formatCurrency";

const ProductHome = ({ data }) => {
  const { setCartItems, cartItems } = useContext(AppContext);

  const addCartItem = () => {
    setCartItems([...cartItems, data]);
  };

  return (
    <C.Container>
      <C.Thumb>
        <C.Img
          src={data.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
          width="400px"
        />
      </C.Thumb>

      <C.InfoProduct>
        <C.Title>{data.title}</C.Title>

        <C.Price>{formatCurrency(data.price, "BRL")}</C.Price>
        <p>
          em{" "}
          <C.Portion>
            10X {formatCurrency(data.price / 10, "BRL")} sem juros
          </C.Portion>
        </p>
        <C.Link href="">Ver formas de pagamento</C.Link>
      </C.InfoProduct>

      <C.Details>
        <C.Shipping className={`${data.shipping.free_shipping ? "free" : ""}`}>
          <C.Icon className="bx bxs-truck"></C.Icon>
          <C.ShippingGroup>
            {data.shipping.free_shipping ? (
              <C.ShippingTitle>Frete grátis!</C.ShippingTitle>
            ) : (
              <C.ShippingTitle>Envio para todo o país!</C.ShippingTitle>
            )}
            <p>Saiba os prazos de entrega e as formas de envio.</p>
            <C.Link href="">
              <i class="bx bx-current-location"></i>Calcular prazo de entrega
            </C.Link>
          </C.ShippingGroup>
        </C.Shipping>

        <C.Seller>
          <p>
            Vendido por
            <C.Link href={data.seller.permalink} target="_blank">
              {data.seller.nickname}
            </C.Link>
          </p>
          {data.seller.seller_reputation.metrics.sales.completed > 50 ? (
            data.seller.seller_reputation.metrics.sales.completed > 200 ? (
              data.seller.seller_reputation.metrics.sales.completed > 1000 ? (
                <p>+1000 vendas</p>
              ) : (
                <p>-1000 vendas</p>
              )
            ) : (
              <p>-200 vendas</p>
            )
          ) : (
            <p>-50 vendas</p>
          )}
        </C.Seller>

        <C.Hr />

        <C.Stock>
          <C.StockTitle>Estoque disponível</C.StockTitle>
          {data.sold_quantity === 1 ? (
            <span>Último disponível!</span>
          ) : data.sold_quantity === 0 ? (
            <span className="off">Esgotado</span>
          ) : (
            <span>{data.sold_quantity} unidades</span>
          )}
        </C.Stock>

        <C.MercadoPagoCont>
          {data.accepts_mercadopago ? (
            <>
              <C.Img
                src="https://logospng.org/download/mercado-pago/logo-mercado-pago-icone-1024.png"
                alt="accepts_mercadopago"
                className="ImgMercadoPago"
                width="25px"
              />
              <C.MercadoPagoText>Aceitamos Mercado Pago</C.MercadoPagoText>
            </>
          ) : (
            ""
          )}
        </C.MercadoPagoCont>

        <C.BtnPurchase>Comprar agora</C.BtnPurchase>
        <C.BtnAddToCart onClick={addCartItem}>
          Adicionar ao carrinho
        </C.BtnAddToCart>
      </C.Details>
    </C.Container>
  );
};

export default ProductHome;
