import styled from 'styled-components';
import globalStyle from '../../common/styles/var';
export const NotificationContainer = styled.div`
  ${globalStyle.flex};
  position: relative;
  .chart {
    margin-right: 0 !important;
  }
  .notifyWrapper {
    ${globalStyle.flex};
    ${globalStyle.column};
    z-index: 2;
    background-color: #f9fafc;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    min-height: 100px;
    @media (max-width: ${globalStyle.small}) {
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      position: fixed;
    }
    @media (min-width: ${globalStyle.small}) {
      position: absolute;
      width: 350px;
      top: 46px;
      right: 0;
    }
  }
  .notifyBox {
    ${globalStyle.flex};
    ${globalStyle.row};
    background: #e6e6e6;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    margin: 5px 15px;
    @media (min-width: ${globalStyle.small}) {
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
    }
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
  .modalHeader {
    ${globalStyle.flex};
    ${globalStyle.row};
    padding: 15px;
    background-color: #ffffff;
    align-items: center;
    & > div {
      ${globalStyle.flex};
      &.close {
        margin-right: 15px;
      }
      &.title {
        flex: 1;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 17px;
        color: #403f3f;
        justify-content: center;
        text-transform: uppercase;
      }
    }
  }
  .noDataMsg {
    ${globalStyle.flex};
    height: 100%;
    justify-content: center;
    align-items: center;
    flex: 1;
  }
`;
