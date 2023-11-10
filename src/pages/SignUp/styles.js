import styled from 'styled-components';
import bg from "../../assets/bg.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;


export const Form = styled.form`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  
  min-width: 637px;
  padding: 0 136px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1, h4, p{
    align-self: flex-start;
  }

  h4{
    margin-block: 48px;
  }

  div + div{
    margin-top: 12px;
  }

  button{
    margin-top: 16px;
  }
  
  a{
    margin-top: 42px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

`

export const Background = styled.div`
  flex: 1;
  background: url(${bg}) no-repeat center center;
  background-size: cover;
  opacity: 0.3;
`