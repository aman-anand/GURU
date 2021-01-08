import styled from 'styled-components';
import globalStyle from '../../common/styles/var';
export const HeaderContainer = styled.header`
  ${globalStyle.flex};
  ${globalStyle.row};
  background-color: #ffffff;
  padding: 15px;
  position: relative;
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
    img {
      height: 70px;
    }
  }
  .navListBox {
    flex: 1;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 13px;
    @media (max-width: ${globalStyle.small}) {
      justify-content: center;
      align-items: center;
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
            color: #0976be;
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
            svg path {
              fill: #0976be;
            }
          }
        }
        .icon {
          box-sizing: border-box;
          margin-right: 12px;
          justify-content: center;
          align-items: center;
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
      margin-right: 20px;
      align-items: center;
      justify-content: center;
      position: relative;
      ${globalStyle.flex};
      cursor: pointer;
    }
    .myProfileNav {
      background: #f9fafc;
      border-radius: 5px;
      padding: 7px 20px;
      align-items: center;
      cursor: pointer;
      position: relative;
      @media (min-width: ${globalStyle.small}) {
        max-width: 250px;
      }
      &:hover {
        .profileMenu {
          display: block;
        }
      }
      .proIcon {
        ${globalStyle.row};
        width: 41px;
        height: 41px;
        background-color: #dedede;
        border-radius: 60px;
        align-items: center;
        margin-right: 15px;
        overflow: hidden;
        img {
          width: 100%;
        }
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
        width: 14px;
        height: 10px;
        margin-left: 10px;
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
    cursor: pointer;
  }

  .sideNavWrapper {
    position: fixed;
    ${globalStyle.flex};
    ${globalStyle.row};
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 99;
    -webkit-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    transition: all 500ms ease;
    transform: translate(-100%);
    &.active {
      transform: translate(0);
      z-index: 99;
    }
    & > div {
      ${globalStyle.flex};
    }
  }
  @media (max-width: ${globalStyle.small}) {
    .navListWrap {
      background-color: #ffffff;
      width: 70%;
      .navList {
        ${globalStyle.flex};
        ${globalStyle.column};
        margin: 0px;
        padding: 10px;
        width: 100%;
        li {
          ${globalStyle.flex};
          width: 100%;
          &:nth-child(1) {
            span {
              ${globalStyle.flex};
              padding: 6px;
            }
          }
          a {
            ${globalStyle.flex};
            width: 100%;
            text-decoration: none;
            align-items: center;
            color: #282828;
            font-weight: 400;
            font-size: 12px;
            text-transform: uppercase;
            padding: 4px 0px;
            &.active {
              svg path {
                fill: #0976be;
              }
              span {
                color: #0976be;
              }
            }
            i {
              ${globalStyle.flex};
              width: 24px;
              height: 24px;
              margin-right: 15px;
              justify-content: center;
              align-items: center;
            }
            span {
              ${globalStyle.flex};
              flex: 1;
              padding: 10px 0px;
            }
          }
        }
      }
    }
    .outNavList {
      flex: 1;
      background-color: rgba(0, 0, 0, 0.7);
    }
  }

  .profileMenu {
    display: none;
    width: 200px;
    position: absolute;
    top: 52px;
    background: #fff;
    right: 0;
    z-index: 2;
    padding-top: 15px;
    .navList {
      ${globalStyle.flex};
      ${globalStyle.column};
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
          width: 100%;
          text-decoration: none;
          color: #403f3f;
          padding: 10px 15px;
          align-items: center;
          position: relative;
          font-family: 'Rubik', sans-serif;
          &.active {
            background-color: rgba(9, 118, 190, 0.1);
            color: #0976be;
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
            svg path {
              fill: #0976be;
            }
          }
        }
        .icon {
          box-sizing: border-box;
          margin-right: 12px;
          justify-content: center;
          align-items: center;
        }
        span {
          ${globalStyle.row};
          font-weight: 500;
          font-size: 14px;
        }
      }
    }
  }
`;
