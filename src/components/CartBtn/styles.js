import styled from "styled-components";

export const CartButton = styled.button`
  position: relative;
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;

  i {
    color: #1a1a1a;
    font-size: 35px;
  }

  &:hover ~ i {
    opacity: 0.8;
  }
`;

export const CartStatus = styled.span`
  position: absolute;
  top: 3px;
  left: 20px;
  background-color: red;
  color: #fff;
  padding: 0 5px 1px 5px;
  border-radius: 100%;
`;
