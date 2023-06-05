import {createGlobalStyle} from 'styled-components'

const globalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: monospace;
        font-size: 16px;
        background-color: #bbb;
        color: #000;
        /* display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 30px;
        list-style: none; */

        
    }
`

export default globalStyle;