import styled from "styled-components"

export const FormWrapper = styled.div`
    position: relative;
    margin: 40px 0;
`

export const Title = styled.h1`
    font-size: 30px;
    font-weight: bold;
    padding: 20px 0;
`

export const FormAuth = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #cecece;
    border-radius: 15px;

    & h1 {
        font-size: 24px;
        text-align: center;
    }
`

export const LinkRegister = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;

    & a {
        color:rgb(76, 76, 76);

        &:hover {
            color:red;
        }
    }
`

export const Error = styled.div`
    text-align: center;
    color: red;
`

export const Forma = styled.form`
    max-width: 636px;
`

export const Field = styled.div`
    & label {
        display: inline-block;
        font-weight: bold;
        margin: 20px 0 10px 0;
    }

    & input:not(#photo), .css-13cymwt-control, .css-t3ipsp-control {
        width: 100%;
        padding: 15px;
        border: none;
        border-radius: 15px;
        background-color: #f2f1f0;

        &:active, &:focus {
            outline: 3px solid rgb(78, 193, 255);
        }
    }

    & #photo {
            display: block;
    }
    
    & .css-13cymwt-control, .css-t3ipsp-control {
        cursor: pointer;
        padding: 10px;
    }
`

export const FieldError = styled.p`
    color: red;
`
export const ButtonCancel = styled.button`
    padding: 15px 25px;
    margin: 20px 10px 0 0;
    color: white;
    background-color: black;
    border: none;
    border-radius: 15px;
    cursor: pointer;

    &:hover {
        background-color:rgb(47, 47, 47);
    }
`

export const ButtonSubmit = styled.button`
    padding: 15px 25px;
    margin: 20px 0;
    color: white;
    background-color: black;
    border: none;
    border-radius: 15px;
    cursor: pointer;

    &:hover {
        background-color:rgb(47, 47, 47);
    }
`

export const ButtonPrev = styled.button`
    position: absolute;
    top: 18px;
    left: -65px;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 100%;
    cursor: pointer;
    background-color: white;
    box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);

    & svg {
        font-size: 22px;
        vertical-align: bottom;
    }
`