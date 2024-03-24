import styled from "styled-components";


export const Button= styled.button`
    width:200px;
    height:50px;
    padding:10px;
    background-color:${(prop)=>prop.backgroundColor};
    color:white;
    &:hover{
        background-color:blue;
    }


`
