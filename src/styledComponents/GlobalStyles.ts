import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    ul, ol {
        list-style: none;
    }

    h1, h2, h3, h4, h5 {
        margin: 0;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    body {
        font-family: 'Press Start 2P';
        font-size: 1.6rem;
        line-height: 1.6;
        position: relative;
    }

    #app{
        overflow-x: hidden;
    }

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    button {
        cursor: pointer;
        &:focus{
            outline: none;
        }
        &:disabled{
            cursor: default;

        }
    }

    a, a:visited{
        color: inherit;
        text-decoration: none;
    };
`;
