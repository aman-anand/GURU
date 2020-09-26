import styled from 'styled-components';
import globalStyle from '../../common/styles/var';
export const ArticleDetailsContainer = styled.section`
  ${globalStyle.flex};
  ${globalStyle.column};
  @media (max-width: ${globalStyle.small}) {
    background-color: #f9fafc;
    height: 100vh;
  }
  .container {
    padding: 0px 10px 10px 10px;
    ${globalStyle.flex};
    ${globalStyle.column};
    box-sizing: border-box;
    @media (min-width: ${globalStyle.small}) {
      ${globalStyle.row};
      padding: 10px 0px;
      margin-top: 24px;
    }
  }
  .leftBox,
  .rightBox {
    box-sizing: border-box;
    ${globalStyle.flex};
    ${globalStyle.column};
    @media (min-width: ${globalStyle.small}) {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
  .leftBox {
    flex: 1;
  }
  .rightBox {
    @media (min-width: ${globalStyle.small}) {
      width: 33%;
    }
  }
  sessionCardWrapper,
  .VideoCardContainer {
    min-height: 195px;
    max-height: 195px;
    @media (min-width: ${globalStyle.small}) {
      margin: 8px 15px;
    }
  }
  .VideoCardContainer {
    border: solid 1px red;
    @media (min-width: ${globalStyle.small}) {
      width: 100%;
    }
  }
`;
