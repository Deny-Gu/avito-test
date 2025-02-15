import styled from "styled-components";

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Title = styled.h1`
    font-size: 30px;
    font-weight: bold;
    padding: 20px 0;
`

export const ListWrapper = styled.ul`
    min-height: 650px;
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
`

export const ItemWrapper = styled.div`
    width: 700px;
    height: 150px;
    display: flex;
    padding: 10px;

    &:hover {
        background-color:rgb(242, 242, 242);
    }
`

export const ItemImage = styled.div`
    & img {
        width: 200px;
        height: 130px;
    }
`

export const ItemDescription = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: 0 10px;


    & h3 a {
        font-size: 20px;
        color: rgb(0, 170, 255);
        font-weight: 600;

        &:hover {
            color: red;
        }
    }
    
    & span {
        font-weight: bold;
    }
`

export const ItemButton = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;

    & button {
        cursor: pointer;
        padding: 5px 25px;
        background-color: white;
        border-radius: 3px;
        border: 1px solid #cecece;

        &:hover {
            background-color:rgba(255, 255, 255, 0.52);
        }
    }
`

export const ItemNotFound = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`

export const SearchWrapper = styled.div`
    padding: 20px;
`

export const SearchInput = styled.input`
    width: 100%;
    padding: 5px 15px;
`

export const FilterWrapper = styled.div`
    margin: 0 auto;

    & span {
        font-weight: bold;  
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
            background-color:rgb(40, 40, 40);
        }

        &.current {
            background-color: white;
            color: black;
        }
    }
`

export const PaginationWrapper = styled.ul`
    display: flex;
    margin: 20px;
    list-style: none;
    justify-content: center;
    gap: 10px;

    & li {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        background-color: black;
        border-radius: 10px;
        padding-bottom: 4px;

        &:hover {
            background-color:rgb(37, 37, 37);
        }

        & a {
            box-sizing: border-box;
            color: white;
            font-size: 20px;
            padding: 7px 13px;
        }

        &.active {
            border: 2px solid #000;
            border-radius: 10px;
            background-color: white;

            & a {
                color: black;
            }
        }
    }

`