import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;


  > img{
    border: 2px solid ${({ theme }) => theme.COLORS.PRIMARY_SOFT};
    border-radius: 20000px;
    width: 64px;
  }

  > div{
    text-align: right;
    min-width: fit-content;

    p, span{
      font-size: 14px;
    }

    p{
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.WHITE}
    }

    span{
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;
