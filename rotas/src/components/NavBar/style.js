import styled from "styled-components";

export const ContainerHeader = styled.header`
    width: 100vw;
    height: 100px;
    background-color: #993399;
    color: #fff;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const ContainerLinks = styled.ul`
    display: flex;
    justify-content: space-around;
    
    a {
        text-decoration: none;
    }

    li {
        padding: 15px;
        text-decoration: none ;
        color: #fff ;
        list-style: none;
    }

    /* li:visited {
    color:#999999;
    text-decoration:none;
    } */

    li:hover {
    color:#000;
    text-decoration:none;
    }


`