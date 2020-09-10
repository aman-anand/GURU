import styled from 'styled-components';
import globalStyle from 'Global/styles/base';
export const ListCardContainer = styled.div`
  ${globalStyle.flex};
  ${globalStyle.column};
  box-sizing: border-box;
  width: 100%;
  margin: 8px 0px;
  border-radius: 5px;
  position: relative;
  background: #ffffff;
  padding: 16px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.04);
  @media (min-width: ${globalStyle.small}) {
    width: 350px;
    margin: 15px;
  }
  .listWrapper {
    ${globalStyle.flex};
    ${globalStyle.column};
    margin-top: 12px;
    border-top: 0.5px solid #ced4db;
    padding-top: 12px;
  }
  .listBox {
    ${globalStyle.flex};
    ${globalStyle.row};
    margin: 6px 0px;
    .icon {
      ${globalStyle.flex};
      width: 40px;
      height: 40px;
      border-radius: 70px;
      border: solid 1px red;
      margin-right: 8px;
      justify-content: center;
      align-items: center;
    }
    .content {
      ${globalStyle.flex};
      ${globalStyle.column};
      flex: 1;
      align-items: center;
      justify-content: center;
      align-items: flex-start;
      p {
        ${globalStyle.flex};
        ${globalStyle.column};
        margin: 0px;
        span {
          ${globalStyle.flex};
          &:nth-child(1) {
            font-weight: bold;
            font-size: 14px;
            line-height: 17px;
            color: #000000;
          }
          &:nth-child(2) {
            font-weight: 300;
            font-size: 12px;
            line-height: 14px;
            color: #000000;
          }
        }
      }
    }
    .price {
      ${globalStyle.flex};
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #000000;
      justify-content: center;
      align-items: center;
    }
  }
`;
