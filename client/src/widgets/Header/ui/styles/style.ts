import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #cecece;
`;

export const HeaderLeft = styled.div`
  & span,
  button {
    margin: 0 10px;
  }

  & button {
    cursor: pointer;
    margin: 0 5px;
    padding: 2px 15px;
    background-color: black;
    border-radius: 10px;
    padding-bottom: 4px;
    color: white;

    &:hover {
      background-color: rgb(40, 40, 40);
    }

    &.current {
      background-color: white;
      color: black;
    }
  }
`;

export const HeaderRight = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
`;

export const HeaderItem = styled.div`
  margin: 0 20px;
  font-size: 18px;
  padding: 0 10px;

  &:hover {
    & a {
      color: red;
    }

    & svg {
      fill: red;
    }
  }

  & .create-ad svg {
    width: 18px;
    height: 18px;
    margin-right: 2px;
    vertical-align: sub;
  }

  & .list-ads svg {
    width: 16px;
    height: 16px;
    margin-right: 3px;
    vertical-align: middle;
  }
`;
