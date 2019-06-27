import { createGlobalStyle } from "styled-components";
import media, { sizes } from "./media";

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
        font-size: 55%;
        scroll-behavior: smooth;

        ${media.medium`
            font-size: 45%;
        `}


        @media only screen and (max-width: 767px) and (orientation: landscape) {
            transform: rotate(-90deg) translateY(-50%);
            transform-origin: left top;
            width: 100vh;
            overflow-x: hidden;
            position: absolute;
            top: 100%;
            left: 50%;
        }
        
        ${media.medium_2`
            font-size: 35%;
        `}
        
        ${media.small`
            font-size: 30%;
        `}
    }



    body {
        font-family: 'Press Start 2P';
        font-size: 1.6rem;
        line-height: 1.6;
        position: relative;
        background: url('./background.jpg') center/cover;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        text-transform: uppercase;
        ${({ theme }) => `
            color: ${theme.colorPurple};
        `}
    }

    svg path {
        ${({ theme }) => `
            fill: ${theme.colorPurple} !important;
        `}
    }

    #app{
    }

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    button {
        text-transform: uppercase;
        cursor: pointer;
        border: none;
        background-color: transparent;
        color: inherit;
        font-family: inherit;
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
