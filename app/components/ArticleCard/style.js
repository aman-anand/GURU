import styled from 'styled-components';
import globalStyle from 'Global/styles/base';
export const ArticleCardContainer = styled.div`
  ${globalStyle.flex};
  ${globalStyle.column};
  box-sizing: border-box;
  width: 100%;
  margin: 8px 0px;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  background-color: rgba(249, 250, 252, 0.3);
  @media (min-width: ${globalStyle.small}) {
    width: 255px;
    margin: 15px;
  }
  .imageBox {
    ${globalStyle.flex};
    ${globalStyle.column};
    text-decoration: none;
  }
  .imgBox {
    ${globalStyle.flex};
    ${globalStyle.column};
    border-radius: 5px;
    overflow: hidden;
    @media (min-width: ${globalStyle.small}) {
      height: 130px;
    }
    img {
      width: 100%;
    }
  }
  .bottomBox {
    ${globalStyle.flex};
    ${globalStyle.row};
    padding: 13px 12px;
    align-items: flex-start;
    & > div {
      ${globalStyle.flex};
      ${globalStyle.column};
    }
    .icon {
      width: 40px;
      height: 40px;
      ${globalStyle.flex};
      margin-right: 8px;
      border-radius: 60px;
      align-items: center;
      justify-content: center;
      background-color: ${props => (props.color ? `#${props.color}` : '#ffc212')};
      font-weight: bold;
      font-size: 12px;
      line-height: 14px;
      text-transform: uppercase;
      border: solid 1px #dedede;
      color: #ffffff;
    }
    .content {
      ${globalStyle.flex};
      flex: 1;
      p {
        margin: 0px;
        ${globalStyle.flex};
        ${globalStyle.column};
        span {
          ${globalStyle.flex};
          &:nth-child(1) {
            font-weight: 600;
            font-size: 14px;
            line-height: 17px;
            text-transform: uppercase;
            color: #000000;
          }
          &:nth-child(2) {
            font-weight: 300;
            font-size: 10px;
            line-height: 12px;
            text-transform: uppercase;
            color: #000000;
          }
        }
      }
    }
  }
`;
