import styled from 'styled-components';
import globalStyle from '../../common/styles/var';
export const ChartBordContainer = styled.section`
  ${globalStyle.flex};
  ${globalStyle.row};
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 2;
  visibility: hidden;
  & > div {
    ${globalStyle.flex};
  }
  .chartLeftBox {
    flex: 1;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .chartRightBox {
    width: 100%;
    background-color: rgba(250, 250, 250);
    ${globalStyle.column};
    @media (min-width: ${globalStyle.small}) {
      width: 33.33%;
    }
    & > div {
      ${globalStyle.flex};
    }
    .chartHeader {
      ${globalStyle.row};
      background: #f7f7f7;
      box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.05);
      padding: 14px;
      & > div {
        ${globalStyle.flex};
        ${globalStyle.row};
      }
      ._left_ch_h {
        margin-right: 7.5px;
      }
      ._left_ch_h,
      ._right_ch_h {
        width: 40px;
        height: 40px;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
      ._conte_ch_h {
        flex: 1;
        span {
          ${globalStyle.flex}
          font-weight: bold;
          font-size: 14px;
          line-height: 17px;
          text-align: center;
          color: #403f3f;
          align-items: center;
        }
      }
    }
    .chartContainer {
      flex: 1;
      overflow: auto;
      ${globalStyle.column};
      padding: 20px;
    }
    .chartAction {
      ${globalStyle.row};
      align-items: center;
      padding: 10px;
      & > div {
        ${globalStyle.flex}
      }
      .message {
        flex: 1;
        input {
          background: rgba(243, 243, 243, 48%);
          border: 1px solid #acb5bf;
          box-sizing: border-box;
          border-radius: 5px;
          color: #000000;
          width: 100%;
        }
      }
      .sendAction {
        background: #0976be;
        border-radius: 5px;
        color: #ffffff;
        width: 50px;
        height: 50px;
        margin-left: 7.5px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }
  }

  .converList {
    ${globalStyle.flex}
    ${globalStyle.row}
    margin-bottom: 20px;
    & > div {
      ${globalStyle.flex}
    }
    .conv_img_box {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background-color: #ededed;
      align-items: center;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .conversession {
      ${globalStyle.flex}
      ${globalStyle.column}
      flex: 1;
      .context {
        ${globalStyle.flex}
        padding: 15px;
        line-height: 20px;
        max-width: 200px;
      }
      .datetime {
        ${globalStyle.flex}
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 12px;
        color: #acb5bf;
        margin-top: 5px;
      }
    }
    &.left {
      .conv_img_box {
        margin-right: 8px;
      }
      .context {
        background-color: rgba(91, 73, 147, 0.1);
        border-radius: 0px 10px 10px 10px;
      }
    }
    &.right {
      .conv_img_box {
        order: 2;
        margin-left: 8px;
      }
      .conversession {
        order: 1;
        align-items: flex-end;
        .context {
          background: #0976be;
          border-radius: 10px 0px 10px 10px;
          color: #ffffff;
        }
      }
    }
  }

  .guruWrapper {
    ${globalStyle.flex}
    ${globalStyle.column}
  }
  .gu_list_wrapper {
    padding: 15px;
  }
`;
