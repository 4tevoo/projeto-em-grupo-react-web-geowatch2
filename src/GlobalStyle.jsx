import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *, html {
        margin: 0;
        padding: 0;
    }

    body {
        width: 100vw;
        height: 100vh;
        position: relative;
        overflow: hidden;
    }
`