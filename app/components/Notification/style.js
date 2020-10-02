import styled from 'styled-components';
import globalStyle from '../../common/styles/var';
export const NotificationContainer = styled.div`
  position: absolute;
  top: 46px;
  right: 0;
  padding: 15px;
  ${globalStyle.flex};
  ${globalStyle.column};
  z-index: 2;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  width: 350px;
  display: none;
  .notifyBox {
    ${globalStyle.flex};
    ${globalStyle.row};
    background: #f7f7f7;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    & > div {
      ${globalStyle.flex};
    }
    .lNot {
      width: 60px;
      height: 90px;
      background: #58b368;
      border-radius: 10px 0px 0px 10px;
      align-items: center;
      justify-content: center;
    }
    .rNot {
      flex: 1;
      padding: 5px 5px 5px 10px;
      p {
        margin: 0px;
        span {
          ${globalStyle.flex};
          &:nth-child(1) {
            font-weight: normal;
            font-size: 14px;
            line-height: 17px;
            color: #000000;
          }
          &:nth-child(2) {
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            line-height: 14px;
            color: #403f3f;
            margin-top: 5px;
          }
        }
      }
    }
  }
`;
