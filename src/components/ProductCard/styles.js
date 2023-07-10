import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  padding: 10px;
  background-color: #fff;
  box-shadow: 2px 2px 4px #eee;
  border-radius: 3px;
  transition: .2s;
  cursor: pointer;

  &:hover {
    box-shadow: 2px 2px 4px #bbb;

    .btnAdd {
      display: block;
    }
  }
`;

export const ProductImg = styled.img`
  width: 100%;
`;

export const CardInfo = styled.div`
  padding: 20px;
  border-top: 1px solid #ccc;
`;

export const ProductPrice = styled.h3`
  color: #1a1a1a;
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 5px;
`;

export const ProductTitle = styled.h2`
  color: rgba(0, 0, 0, 0.8);
  font-size: 15px;
  line-height: 1.5;
`;

export const BtnAdd = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  border: 1px solid #02a;
  opacity: 0.5;
  padding: 0 5px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.6);
  font-size: 20px;
  cursor: pointer;
  transition: 0.2s;
  display: none;

  i {
    color: #02a;
  }

  &:hover {
    opacity: 0.8;
  }
`;
