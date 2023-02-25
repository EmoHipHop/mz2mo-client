import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html,
    body {
    width: 1440px;
    padding: 0;
    margin: 0px auto;
    font-size: 62.5%;
    -webkit-text-size-adjust: none;
    min-width: 425px;
    }

    a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    }

    *,
    *:before,
    *:after {
    font-family: Pretendard;
    box-sizing: border-box;
    }

    :focus {
        outline: none;
        border: none;
    }
    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
        background: #ffffff;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: #ced4da;
        &:hover {
            background-color: #adb5bd;
        }
    }
    
    button {
        background: none;
        padding: 0;
        border: none;
        cursor: pointer;
    }

`;
