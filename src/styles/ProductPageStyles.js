import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Container = styled.div`
  margin-top: 120px;
  margin-bottom: 35px;
  width: 95vw;
  background-color: #fff;
  border: 1px solid #eee;
  box-shadow: 0px 0px 10px #ccc;
  border-radius: 7px;
  padding: 15px;
`;
