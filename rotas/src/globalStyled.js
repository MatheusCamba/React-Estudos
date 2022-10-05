import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Press Start 2P', cursive;
        background-color: #bbb;
        color: #000;
    }

    li {
        list-style: none;
        text-decoration: none;
    }

    
`