import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  
  font-weight: 500;
  text-align: center;
  
  border-radius: 10px;
  border: 0;

  padding: 16px;
  margin-top: 16px;

  &:disabled{
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
