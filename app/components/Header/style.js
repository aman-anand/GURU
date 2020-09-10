import styled from 'styled-components';
import globalStyle from 'Global/styles/base';
export const HeaderContainer = styled.header`
  ${globalStyle.flex};
  ${globalStyle.row};
  background-color: #ffffff;
  padding: 20px;
  @media (min-width: ${globalStyle.small}) {
    padding: 0px 70px;
  }
  & > div {
    ${globalStyle.flex};
    ${globalStyle.row};
  }
  .logoBox {
    @media (min-width: ${globalStyle.small}) {
      margin-right: 75px;
    }
    align-items: center;
  }
  .navListBox {
    flex: 1;
    @media (max-width: ${globalStyle.small}) {
      justify-content: center;
    }
    .navList {
      ${globalStyle.flex};
      ${globalStyle.column};
      align-items: center;
      @media (min-width: ${globalStyle.small}) {
        ${globalStyle.row};
      }
      margin: 0px;
      padding: 0px;
      list-style: none;
      li {
        ${globalStyle.flex};
        ${globalStyle.row};
        margin: 0px;
        a {
          ${globalStyle.flex};
          ${globalStyle.row};
          text-decoration: none;
          color: #403f3f;
          padding: 24px 18px;
          align-items: center;
          position: relative;
          font-family: 'Rubik', sans-serif;
          &.active {
            background-color: rgba(9, 118, 190, 0.1);
            &:after {
              content: '';
              position: absolute;
              width: 100%;
              height: 5px;
              border-radius: 10px;
              background-color: #0976be;
              left: 0;
              bottom: 0;
              right: 0;
            }
          }
        }
        .icon {
          width: 20px;
          height: 20px;
          border: solid 1px red;
          box-sizing: border-box;
          margin-right: 12px;
        }
        span {
          ${globalStyle.row};
          font-weight: 500;
          font-size: 14px;
        }
      }
    }
  }
  .navRight {
    align-items: center;
    & > div {
      ${globalStyle.flex};
      ${globalStyle.row};
    }
    .chart {
      width: 28px;
      height: 28px;
      border: solid 1px red;
      margin-right: 20px;
    }
    .myProfileNav {
      background: #f9fafc;
      border-radius: 5px;
      padding: 7px 20px;
      align-items: center;
      cursor: pointer;
      @media (min-width: ${globalStyle.small}) {
        width: 200px;
      }
      .proIcon {
        ${globalStyle.row};
        width: 41px;
        height: 41px;
        background-color: #dedede;
        border-radius: 60px;
        align-items: center;
        margin-right: 15px;
      }
      .proName {
        flex: 1;
        p {
          ${globalStyle.flex};
          ${globalStyle.column};
          margin: 0px;
          span {
            &:nth-child(1) {
              font-weight: 500;
              font-size: 14px;
            }
            &:nth-child(2) {
              font-size: 12px;
              font-style: 300;
            }
          }
        }
      }
      .arrow {
        ${globalStyle.flex};
        ${globalStyle.column};
        width: 10px;
        height: 10px;
        border: solid 1px red;
      }
    }
  }
  .notifyIcon {
    width: 24px;
    height: 24px;
    justify-content: center;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .menu {
    ${globalStyle.flex};
    ${globalStyle.column};
    width: 18px;
    height: 13px;
  }
`;
