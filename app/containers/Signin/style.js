import styled from 'styled-components';
import globalStyle from 'Global/styles/base';
export const SigninContainer = styled.section`
  ${globalStyle.flex};
  ${globalStyle.column};
  height: 100%;
  .wrapper {
    ${globalStyle.flex};
    ${globalStyle.row};
    height: 100%;
    & > div {
      ${globalStyle.flex};
      ${globalStyle.column};
    }
  }
  .leftArticle {
    flex: 1;
    padding-left: 64px;
    .navigation {
      ${globalStyle.flex};
      ${globalStyle.column};
      .logo {
        ${globalStyle.flex};
        width: 120px;
      }
    }
    .content {
      ${globalStyle.flex};
      ${globalStyle.column};
      padding: 22px 82px;
      flex: 1;
      .blackBox {
        ${globalStyle.flex};
        ${globalStyle.column};
        min-height: 500px;
        background-color: #2e323d;
        border-radius: 5px;
      }
    }
  }
  .rightArticle {
    width: 500px;
    img {
      width: 100%;
    }
  }
`;
