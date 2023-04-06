import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        font-size: 100%;
        
        font-family: "Montserrat", sans-serif;
    }

    img {
        object-fit: cover;
    }

    ul, li {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    main {
        height: 100vh;
    }
`;

export default GlobalStyles;
