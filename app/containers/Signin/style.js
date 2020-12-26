import styled from 'styled-components';
import globalStyle from '../../common/styles/var';
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
    @media (min-width: ${globalStyle.small}) {
      padding-left: 64px;
    }
    .navigation {
      ${globalStyle.flex};
      ${globalStyle.column};
      .logo {
        ${globalStyle.flex};
        width: 120px;
        img {
          width: 100%;
        }
      }
    }
    .content {
      ${globalStyle.flex};
      ${globalStyle.column};
      padding: 24px 20px;
      @media (max-width: ${globalStyle.small}) {
        padding: 24px 15px;
        background-color: #e5e5e5;
      }
      @media (min-width: ${globalStyle.small}) {
        padding-left: 64px;
        padding: 22px 82px;
      }
      flex: 1;
      .blackBox {
        ${globalStyle.flex};
        ${globalStyle.column};
        @media (min-width: ${globalStyle.small}) {
          padding: 30px;
          border-radius: 5px;
          min-height: 500px;
          background-color: #2e323d;
          align-items: center;
        }
      }
    }
  }
  .rightArticle {
    width: 500px;
    img {
      width: 100%;
    }
  }

  .firstTimelang {
    ${globalStyle.flex};
    ${globalStyle.column};
    width: 100%;
    align-items: center;
    flex: 1;
    padding: 20px;
    @media (min-width: ${globalStyle.small}) {
      width: 380px;
    }
    .radioWrapper {
      width: 380px;
    }
    .buttons {
      width: 380px;
      button {
        width: 100%;
      }
    }
    .logo {
      width: 150px;
      margin-bottom: 40px;
      img {
        width: 100%;
        margin-bottom: 15px;
      }
    }
  }
`;
