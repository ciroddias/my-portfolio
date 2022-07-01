import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        font-family: 'Raleway', sans-serif;
    }

    h1 {
        font-size: "3rem";
        font-weight: 400;
    }

    h2 {
        font-size: 1.5rem;
        font-weight: 400;
        color: ${props => props.theme.colors.text};
    }

    h3 {
        font-size: 1.2rem;
        font-weight: 400;
        color: ${props => props.theme.colors.detail};
    }

    h4 {
        font-size: 1rem;
        font-weight: 400;
        color: ${props => props.theme.colors.detail};
    }

    button {
        background: none;
        border: none;
        font-family: 'Raleway', sans-serif;
    }

    a {
        text-decoration: none;
        color: ${props => props.theme.colors.text};
    }
`
