import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
  padding-bottom: 20px;
`;

export const CartItemImg = styled.img`
  width: 70px;
`;

export const Content = styled.div`
  padding: 0 10px 0 20px;
`;

export const ItemTitle = styled.h3`
  font-size: 15px;
  font-weight: 400;
  color: #000;
  opacity: .8;
  margin-bottom: 2px;
`;

export const ItemPrice = styled.h3`
  font-size: 24px;
  font-weight: 400;
`;

export const RemoveItemBtn = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  border: none;
  background-color: transparent;
  font-size: 25px;
  opacity: .6;
  transition: .2s;
  cursor: pointer;

  i {
    color: red;
  }

  &:hover {
      opacity: .9;
  }
`;
