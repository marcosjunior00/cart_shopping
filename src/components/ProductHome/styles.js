import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;

  & > div:first-child {
    margin-right: 25px;
  }

  & > div:last-child {
    margin-left: 25px;
  }
`;

// Thumb --------------------------------------------------------------------->
export const Thumb = styled.div``;

export const Img = styled.img``;

export const Title = styled.h2`
  font-size: 21px;
  font-weight: 500;
`;

// Center Info --------------------------------------------------------------->
export const InfoProduct = styled.div`
  p {
    font-weight: 300;
  }
`;

export const Price = styled.h1`
  font-weight: 300;
`;

export const Portion = styled.span`
  color: #00a650;
`;

// Right details ------------------------------------------------------------->
export const Details = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 15px 15px;
`;

// Frete --------------------------------------------------------------------->
export const Shipping = styled.div`
  display: flex;
  gap: 10px;
  opacity: 0.9;

  &.free {
    h3,
    i {
      color: #00a650;
    }
  }
`;

export const ShippingGroup = styled.div`
  p {
    margin-top: 5px;
    color: #888;
    font-size: smaller;
    font-weight: 100;
  }
`;

export const ShippingTitle = styled.h3`
  font-weight: 400;
`;

export const Icon = styled.i`
  font-size: 25px;
`;

// Seller -------------------------------------------------------------------->
export const Seller = styled.div`
  margin-top: 18px;
  font-size: 13px;
  font-weight: 400;

  & > p {
    display: flex;
    gap: 6px;
    align-items: center;
    color: #444;
  }
`;

// Stock --------------------------------------------------------------------->
export const Stock = styled.div`
  font-size: 14px;

  & > span {
    font-weight: 700;
  }
`;

export const StockTitle = styled.h3`
  font-size: 16px;
  font-weight: 450;
  margin-bottom: 5px;
`;

// Buttons ------------------------------------------------------------------->
export const BtnPurchase = styled.button`
  margin-top: 5px;
  background-color: #2968c8;
  color: #fff;
  padding: 8px 15px;
  width: 100%;
  border: none;
  border-radius: 5px;
  outline: none;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #1966aa;
  }
`;

export const BtnAddToCart = styled.button`
  margin-top: 10px;
  background-color: #add8e6;
  color: #2968c8;
  padding: 8px 15px;
  width: 100%;
  outline: none;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #9bc6d4;
  }
`;

// Mercado Pago -------------------------------------------------------------->
export const MercadoPagoCont = styled.div`
  margin-top: 5px;
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const MercadoPagoText = styled.span`
  font-size: 13px;
  color: #2968c8;

  @media screen and (max-width: 950px) {
    & {
      display: none;
    }
  }
`;

// Tipografia ---------------------------------------------------------------->
export const Link = styled.a`
  color: #009dcf;
  font-size: smaller;
  font-weight: 450;
  text-decoration: none;
  margin-top: 5px;
  display: flex;
  align-items: center;

  & > i.bx {
    margin-right: 2px;
    color: #009dcf;
  }
`;

export const Hr = styled.div`
  margin: 10px 0;
  height: 0;
  border-bottom: 1px solid #ccc;
`;
