import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  background-color: #f7d000;
  padding: 25px 0;
  width: 100%;
  max-height: 80px;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 2;

  @media screen and (max-width: 500px) {
    h1 {
      display: none;
    }
  }
`;

export const Title = styled.h1`
  color: #1a1a1a;
  font-weight: 600;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export const RightGroup = styled.div`
  display: flex;
`;

export const InputSearchGroup = styled.div`
  display: flex;
  border: 1px solid #1a1a1a;
  padding: 10px;
  border-radius: 15px;
  margin-right: 12px;
`;

export const InputSearch = styled.input`
  padding: 0px 5px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #1a1a1a;

  &::placeholder {
    color: #1a1a1a;
  }
`;

export const BtnSearch = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  i {
    color: #1a1a1a;
    font-size: 25px;
  }
`;
