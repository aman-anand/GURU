import styled from 'styled-components';
import globalStyle from '../../common/styles/var';
export const ArticleBlockContainer = styled.section`
  ${globalStyle.flex};
  ${globalStyle.column};
  .arcHeadting {
    ${globalStyle.flex};
    ${globalStyle.column};
    padding: 7.5px;
    text-transform: uppercase;
    @media (max-width: ${globalStyle.small}) {
      background-color: #ffffff;
    }
    ._small_text {
      font-weight: normal;
      font-size: 10px;
      line-height: 12px;
      text-transform: uppercase;
    }
  }

  .imgBox {
    background-color: #dedede;
    ${globalStyle.flex};
    ${globalStyle.column};
    justify-content: center;
    align-items: center;
    @media (max-width: ${globalStyle.small}) {
      min-height: 200px;
    }
    @media (min-width: ${globalStyle.small}) {
      min-height: 350px;
      border: solid 1px #bbbaba;
    }
    img {
      width: 100%;
    }
  }
`;
