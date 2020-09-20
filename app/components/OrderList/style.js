import styled from 'styled-components';
import globalStyle from '../../common/style/var';
export const OrderListContainer = styled.div`
  ${globalStyle.flex};
  ${globalStyle.column};
  border: solid 1px rgba(165 165 165 / 0.3);
  margin-bottom: 16px;
  cursor: pointer;
  &:hover {
    background-color: #f1eef5;
  }
  .topBox {
    padding: 16px;
    ${globalStyle.flex};
    ${globalStyle.column};
    ._wrapper,
    ._wrapper_two {
      ${globalStyle.row};
    }
    .left,
    .right,
    .middle,
    ._wrapper,
    ._wrapper_two {
      ${globalStyle.flex};
    }
    .left {
      .icon {
        width: 70px;
        height: 70px;
        border-radius: 3px;
        border: solid 1px rgba(165 165 165 / 0.3);
        ${globalStyle.flex};
        justify-content: center;
        background-color: #ffffff;
        img {
          height: 100%;
        }
      }
    }
    .middle {
      flex: 1;
      ${globalStyle.column};
      padding-left: 16px;
      align-self: center;
      h4 {
        margin: 0px;
        font-size: 17px;
        font-weight: 500;
        color: #202c44;
      }
      p {
        color: #202c44;
        font-weight: 300;
        font-size: 14px;
        margin: 7.5px 0px 0px 0px;
        span {
          &:nth-child(2) {
            padding: 0px 7px;
          }
        }
      }
    }
    .right {
      ${globalStyle.column};
      align-items: flex-end;
      justify-content: center;
    }
  }
  .bottomBox {
    ${globalStyle.flex};
    ${globalStyle.row};
    @media (min-width: ${globalStyle.medium}) {
      padding: 16px;
    }
    border-top: solid 1px rgba(165 165 165 / 0.3);
    & > div {
      ${globalStyle.flex};
      @media (max-width: ${globalStyle.medium}) {
        justify-content: center;
      }
    }
    .bottom_left {
      flex: 1;
      ${globalStyle.row};
      p {
        margin: 0px;
        @media (min-width: ${globalStyle.medium}) {
          color: #ed5e50;
        }
        @media (max-width: ${globalStyle.medium}) {
          ${globalStyle.flex};
          ${globalStyle.column};
          flex: 1;
          text-align: center;
          color: #202c44;
          padding: 5px;
        }
        span {
          @media (min-width: ${globalStyle.medium}) {
            padding-right: 20px;
            font-weight: 500;
          }
          @media (max-width: ${globalStyle.medium}) {
            font-size: 16px;
          }
          font-size: 14px;
          a {
            text-decoration: none;
            color: #ed5e50;
          }
        }
      }
    }
    .bottom_right {
      @media (max-width: ${globalStyle.medium}) {
        flex: 1;
        border-left: solid 1px rgba(165 165 165 / 0.3);
      }
      p {
        ${globalStyle.flex};
        ${globalStyle.row};
        margin: 0px;
        font-size: 14px;
        font-weight: 400;
        align-items: center;
        @media (max-width: ${globalStyle.medium}) {
          ${globalStyle.flex};
          ${globalStyle.column};
          flex: 1;
          text-align: center;
          color: #202c44;
          padding: 5px;
        }
        span {
          @media (max-width: ${globalStyle.medium}) {
            font-size: 16px;
          }
        }
        i {
          width: 20px;
          height: 20px;
          border-radius: 10px;
          margin-right: 8px;
          ${globalStyle.flex};
        }
        &.failed {
          color: #ed5e50;
          i {
            border: solid 1px #ed5e50;
          }
        }
        &.pending {
          color: #ecc45c;
          i {
            border: solid 1px #ecc45c;
          }
        }
        &.completed {
          color: #74bda7;
          i {
            border: solid 1px #74bda7;
          }
        }
      }
    }
  }
  .without_discount {
    color: rgba(32 44 68 / 0.5);
    text-decoration: line-through;
    font-size: 14px;
    @media (max-width: ${globalStyle.medium}) {
      margin-right: 8px;
    }
  }
  .discount {
    color: #202c44;
    font-size: 19px;
    font-weight: 500;
  }
  ._wrapper_two {
    margin-top: 15px;
    align-items: center;
    .left,
    .right {
      ${globalStyle.flex};
      flex: 1;
    }
    .right {
      p {
        margin: 0px;
        ${globalStyle.flex};
        ${globalStyle.row};
        i {
          width: 20px;
          height: 20px;
          border-radius: 10px;
          margin-right: 8px;
          ${globalStyle.flex};
        }
        &.failed {
          color: #ed5e50;
          i {
            border: solid 1px #ed5e50;
          }
        }
        &.pending {
          color: #ecc45c;
          i {
            border: solid 1px #ecc45c;
          }
        }
        &.completed {
          color: #74bda7;
          i {
            border: solid 1px #74bda7;
          }
        }
      }
    }
  }
`;
