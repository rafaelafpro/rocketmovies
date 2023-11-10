import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 62px;
  padding: 24px 123px;

  > h4{
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-weight: 700;
  }

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_100}40;
`;
