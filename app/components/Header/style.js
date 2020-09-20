import styled from 'styled-components';
import globalStyle from '../../common/style/var';
export const HeaderStyle = styled.header`
  ${globalStyle.flex};
  ${globalStyle.column};
  ${globalStyle.aligncenter};
  background-color: #ffffff;
  @media (max-width: ${globalStyle.medium}) {
    padding: 16px;
  }
  nav {
    width: 100%;
    ${globalStyle.flex};
    ${globalStyle.row};
    @media (min-width: ${globalStyle.medium}) {
      width: 1024px;
    }
    .leftNav {
      ${globalStyle.flex};
      ${globalStyle.row};
      flex: 1;
      .logoBox {
        ${globalStyle.flex};
        ${globalStyle.row};
        width: 150px;
        align-self: center;
        img {
          width: 100%;
        }
      }
      .menubar {
        ${globalStyle.flex};
        ${globalStyle.column};
        align-self: center;
        width: 20px;
        height: 19px;
        margin-right: 7.5px;
        cursor: pointer;
        label {
          display: flex;
          flex: 1;
          flex-direction: column;
        }
        input {
          display: none;
          &:checked {
            & ~ span {
              background-color: red;
            }
          }
        }
        span {
          width: 100%;
          height: 2px;
          background-color: #000000;
          margin: 2px 0px;
        }
      }
      ul {
        margin: 0px;
        padding: 0px;
        display: inline-flex;
        li {
          align-self: center;
          padding: 5px 12px;
          position: relative;
          a {
            ${globalStyle.flex};
            padding: 20px 15px;
            color: #202c44;
            text-decoration: none;
            font-weight: 400;
            position: relative;
            &.active {
              color: #ed5e50;
              &::after {
                content: '';
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                width: 18px;
                height: 5px;
                background-color: #ed5e50;
                margin: auto;
                border-radius: 5px;
              }
            }
          }
        }
      }
    }
    .rightNav {
      ${globalStyle.flex};
      ${globalStyle.row};
      align-self: center;
      & > div {
        ${globalStyle.flex};
        margin-left: 26px;
      }
      .callBack {
        a {
          ${globalStyle.flex};
          align-items: center;
          justify-content: center;
          text-decoration: none;
          ${globalStyle.row};
          color: #ffffff;
          border: solid 1px #ed5e50;
          border-radius: 5px;
          padding: 7.5px 16px;
          background-color: #ed5e50;
          @media (max-width: ${globalStyle.medium}) {
            font-size: 13px;
            padding: 10px 18px;
            letter-spacing: 1px;
          }
          @media (min-width: ${globalStyle.medium}) {
            background-color: #f0e2e1;
            color: #ed5e50;
          }
          i {
            width: 20px;
            height: 20px;
            border: solid 1px red;
            margin-right: 8px;
          }
        }
      }
      .profile_icon {
        width: 45px;
        height: 45px;
        border-radius: 50px;
        background-color: #ed5e50;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        span {
          color: #ffffff;
          font-size: 14px;
          font-weight: 500;
        }
      }
    }
  }
  aside {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(53 53 53 / 0.7);
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
    .mob_nav {
      width: 260px;
      height: 100%;
      background-color: #ffffff;
    }
    .leftNavLogo {
      padding: 10px;
      border-bottom: solid 1px #dedede;
      img {
        width: 82%;
      }
    }
    ul {
      margin: 0px;
      padding: 0px;
      li {
        ${globalStyle.flex};
        ${globalStyle.column};
        border-bottom: solid 1px #dedede;
        a {
          ${globalStyle.flex};
          padding: 10px 16px;
          font-size: 18px;
          text-decoration: none;
          &.active {
            border-right: solid 5px #ed5e50;
            background-color: #dedede;
          }
        }
      }
    }
    .closeNav {
      ${globalStyle.flex};
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 10px;
      top: 10px;
      width: 40px;
      height: 40px;
      border: solid 1px red;
      font-size: 30px;
      border-radius: 20px;
      color: black;
      background-color: #dedede;
    }
  }
`;
