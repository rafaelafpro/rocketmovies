import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  overflow: hidden;
  height: 56px;
  border-radius: 10px;
  padding: 12px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};

  box-shadow: 0 0 8px 2px ${({ theme }) => theme.COLORS.PRIMARY}00;
  
  transition: 200ms;

  > input{

    width: 100%;
    
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }

  > svg{
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    transition: 200ms;

    &.focus-util{
      color: ${({ theme }) => theme.COLORS.PRIMARY}80;
    }
  }

  &.focus-util{
    box-shadow: 0 0 8px 2px ${({ theme }) => theme.COLORS.PRIMARY}60;
  }
`;
