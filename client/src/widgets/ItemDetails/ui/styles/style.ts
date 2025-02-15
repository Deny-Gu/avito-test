import styled from "styled-components";

export const ItemWrapper = styled.div`
  width: 600px;
  margin: 40px auto;
  padding: 30px;
  border: 1px solid #cecece;
  border-radius: 10px;
  word-wrap: break-word;

  & div {
    margin-bottom: 10px;
  }
`;

export const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ItemHeaderLeft = styled.div`
  width: 360px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  & h1 {
    font-size: 24px;
  }

  & img {
    width: 360px;
    border: 1px solid #cecece;
    margin: 15px 0;
  }
`;

export const ItemHeaderRight = styled.div`
  display: flex;
  flex-direction: column;

  & button {
    padding: 10px 25px;
    margin: 5px 0;
    color: white;
    background-color: black;
    border: none;
    border-radius: 15px;
    cursor: pointer;

    &:hover {
      background-color: rgb(37, 37, 37);
    }
  }
`;
