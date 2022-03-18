import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    html{
        @media(max-width: 1080px){
            font-size: 93.75%; //15px
        }

        @media(max-width: 1080px){
            font-size: 87.5%; //14px
        }
    }

    span {
        font-family: 'VT323', sans-serif;
        font-weight: 600;
        font-size: 1.2rem;
        color: ${props => props.theme.colors.header_text};
    }

    p, button {
        font-family: 'VT323', sans-serif;
        font-weight: 600;
        font-size: 1.2rem;
        color: ${props => props.theme.colors.text};
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'VT323', sans-serif;
        font-weight: 800;
        color: ${props => props.theme.colors.text};
    } 

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
