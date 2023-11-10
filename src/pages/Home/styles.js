import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 116px 1fr;
  grid-template-areas:
  "heading"
  "page";

  .header{
    grid-area: heading;
  }

  .page{
    grid-area: page;
    padding: 50px 123px;
    display: flex;
    flex-direction: column;
    box-sizing: content-box;

    > section{
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-bottom: 36px;

      > button{
        width: auto;
        margin: 0;
      }
    }

    .cards-wrapper{
      display: flex;
      flex-direction: column;
      gap: 16px;
      overflow-y: auto;
      box-sizing: content-box;
    }
  }
`;
