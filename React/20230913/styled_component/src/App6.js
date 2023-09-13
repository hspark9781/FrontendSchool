import React from 'react'
import styled, { css } from 'styled-components';
import reset from "styled-reset";



const Button = css`
    ${reset}
    color: #fff;
    height: 50px;
    width: 100px;
    background-color: royalblue;
    margin: 20px;
`

const Button1 = styled.button`
    ${Button}
`

const Button2 = styled.button`
    ${Button}
    border: none;
    border-radius: 10%; 
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.7);
`

const Button3 = styled.button`
    ${Button}
    border: none;
    border-radius: 40%; 
    background-color: green;
    box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, 0.7);
`

export default function App6() {
    return (
        <div>
            <Button1>버튼1</Button1>
            <Button2>버튼2</Button2>
            <Button3>버튼3</Button3>
        </div>
    )
}
