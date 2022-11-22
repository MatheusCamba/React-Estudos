import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
    * {
        padding: 10px 0 0 20px;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        /* letter-spacing: 1px;
        background-color: #bbb;
        color: #000;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 30px;
        list-style: none; */

        /* background-image: url('https://c8p9p3e5.rocketcdn.me/wp-content/uploads/2022/02/blank-kanye-notepad-meme.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover */
    }
`;

export default globalStyle;
