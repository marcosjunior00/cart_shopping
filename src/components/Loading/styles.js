import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 350px 0;

  @media screen and (max-height: 300px) {
    margin: 170px;
  }
  @media screen and (max-height: 550px) {
    margin: 215px;
  }
`;

export const Load = styled.i`
  font-size: 2rem;
  animation: spin 0.7s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
