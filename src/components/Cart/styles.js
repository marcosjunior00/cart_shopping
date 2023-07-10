import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 3;
  top: 13.5%;
  left: 10%;
  width: 80%;
  max-width: 80%;
  background-color: #fff;
  height: 78vh;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 0px 15px #343;
  transition: 0.5s;

  &.cart-disabled {
    transform: translate(130%, 0);
  }
`;

export const BlurOverlay = styled.div`
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(3px);
  z-index: 1;
  /* background-color: rgba(0, 0, 0, 0.4); */

  &.d-none {
    display: none;
  }
`;

export const CartItems = styled.div`
  flex-grow: 1;
  overflow: auto;

  & .cart-item:last-child {
    border-bottom: none;
  }
`;

export const CartResume = styled.div`
  font-size: 22px;
  font-weight: 500;
  padding: 10px 9px 0;
  border-top: 1px solid #ddd;
`;

export const BtnLeave = styled.button`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 12%;
  right: 9%;
  width: 37px;
  height: 37px;
  color: #fff;
  background-color: red;
  border: 1px solid #fff;
  border-radius: 50%;
  opacity: 0.9;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;
