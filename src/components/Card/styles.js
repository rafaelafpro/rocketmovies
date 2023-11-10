import styled from 'styled-components';

export const Container = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_SOFT};
  border-radius: 16px;
  width: 100%;

  > h5{
    font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.WHITE_SOFT};
  }

  > p{
    font-size: 16px;
    max-height: 2lh;
    text-overflow: ellipsis;
    overflow: hidden; 
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
  }

  .tags-wrapper{
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 16px;

    span{
      color: ${({ theme }) => theme.COLORS.WHITE_SOFT};
      background-color: ${({ theme }) => theme.COLORS.GRAY_300};
      font-size: 12px;
      padding: 6px 16px;
      border-radius: 8px;
    }
  }
`;
