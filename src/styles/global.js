import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};

    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea{
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 16px;
    outline: none;
    border: none;
  }

  h1{
    font-size: 48px;
  }

  h4{
    font-size: 24px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.WHITE_SOFT};
  }

  h3{
    font-size: 32px;
  }

  h1, a{
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }

  h2, h3, h2{
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  p{
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  button{
    border: none;
  }

  a{
    text-decoration: none;
  }

  button, a{
    cursor: pointer;
    transition: filter 0.2s;
  }

  
  button:hover, a:hover{
    filter: brightness(0.9);
  }
`;