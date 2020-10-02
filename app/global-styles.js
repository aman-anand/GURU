import { createGlobalStyle } from 'styled-components';
import globalStyle from './common/styles/var';
import { GlobalFontStyles } from './common/styles/font';
import { VideoPlayerStyle } from './common/styles/video';

const GlobalStyle = createGlobalStyle`
  ${GlobalFontStyles};
  html,
  body {
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    height: 100%;
    width: 100%;
  }
  input, select {
    background-color: #F7F7F7;
    color: #727B87;
    border-radius: 4px;
    padding: 16px;
    font-size: 14px;
    border: solid 1px #ffffff;
    &:focus {
      outline: none;
    }
    &.input_error, &.select_error {
      border: solid 1px #da3a33;
      &::placeholder {
        color: #da3a33;
      }
    }
  }
  ::placeholder {
    color: #727B87;
    font-size: 12px;
  }
  
  input:invalid {
    border: solid 1px #da3a33;
    color: #da3a33;
  }
  
  input:invalid:required {
    border: solid 1px #da3a33;
    color: #da3a33;
  }

  button {
    padding: 14px 17px !important;
    & > span {
      font-size: 12px;
      font-weight: 600;
    }
  }
  #app {
    background-color: #E5E5E5;
    ${globalStyle.flex};
    ${globalStyle.column};
    ${globalStyle.flexstretch};
    min-height: 100%;
  }
  section {
    ${globalStyle.flexstretch};
    ${globalStyle.flex};
  }
  /* Page Container */
  .container {
    flex: 1;
    align-self: center;
    width: 100%;
    @media (min-width: 1142px) {
      width: 1143px;
    }
    @media (max-width: ${globalStyle.small}) {
      overflow: auto;
    }
  }
  .tabsHeader {
    box-shadow: inherit !important;
  }
  [role="tablist"] {
    & > div {
      border-bottom: solid 1px #CED4DB;
      background-color: #ffffff;
    }
  }
  .tabsWrapper {
    background-color: #ffffff;
    padding: 0px;
    @media (min-width: ${globalStyle.small}) {
      padding: 16px 24px;
    }
  }
  .tabDataBox {}
  .tabButton {
    min-height: inherit !important;
    padding: 5px 6px !important;
    & > span {
      & > span {
        padding: 6px;
      }
    }
  }
  .payItem {
    background: #0976BE;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    ${globalStyle.flex};
    ${globalStyle.row};
    flex: 1;
    padding: 10px;
    margin: 12px;
    justify-content: center;
    align-items: center;
    width: 100%;
    span {
      font-weight: bold;
      font-size: 12px;
      line-height: 14px;
      text-align: center;
      color: #FFFFFF;
    }
  }
  .error {
    color: #da3a33;
    font-size: 12px;
    margin-bottom: 12px;
  }
  .addCarousel {
  }

  .cardWrapper {
    ${globalStyle.flex};
    ${globalStyle.column};
    flex-wrap: wrap;
    @media (min-width: ${globalStyle.small}) {
      ${globalStyle.row};
      margin-left: -15px;
      margin-right: -15px;
      align-self: flex-start;
      margin-bottom: 15px;
    }
    &.row {
      ${globalStyle.row};
    }
  }

  .carosuleWrapper {
    ${globalStyle.flex};
    ${globalStyle.column};
    margin-bottom: 15px;
    .slick-list {
      margin-left: -7.5px;
      margin-right: -7.5px;
      @media (min-width: ${globalStyle.small}) {
        margin-left: -15px;
        margin-right: -15px;
      }
    }
    .slick-track {
      & > div {
        padding: 7.5px;
        @media (min-width: ${globalStyle.small}) {
          padding: 15px;
        }
        .sessionCardWrapper {
          margin: 0px;
        }
      }
    }
    .slick-prev, .slick-next {
      display: flex !important;
      ${globalStyle.row};
      background-color: #58b368;
      border-radius: 5px;
      color: #ffffff;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      text-transform: uppercase;
      padding: 10px 16px;
      align-items: center;
      margin: 0px 7.5px;
      right: 110px;
      top: -17px;
      height: 34px;
      & > span {
        border: solid 1px red;
        display: flex;
        width: 100%;
        justify-content: center;
      }
      &:hover {
        color: #ffffff;
        background: #58b368;
      }
    }
    .slick-prev {
      left: inherit;
      width: 120px;
      padding-left: 42px;
      &:before {
        position: absolute;
        left: 15px;
      }
    }
    .slick-next {
      right: 0 !Important;
      width: 90px;
      &:before {
        position: absolute;
        right: 15px;
      }
    }
    .VideoCardContainer {
      @media (min-width: ${globalStyle.small}) {
        max-width: 255px;
      }
    }
    .VideoCardContainer, .arcticalCardWrapper {
      margin: 0px;
    }
  }
  .dialogWrapper {
    & > div {
      & > div {
        margin: 10px;
        max-width: 350px;
      }
    }
  }
  .dWrapp {
    padding: 10px !important;
    width: 100%;
    height: 300px;
    @media (min-width: ${globalStyle.small}) {
      width: 550px;
    }
    iframe {
      width: 100%;
      height: 100%;
    }
  }
  ._descBox {
    padding: 10px;
    ._desc {
      margin: 0px;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      color: #2E323D;
      margin-bottom: 10px;
    }
  }

  .review_box {
    ${globalStyle.flex};
    ${globalStyle.row};
    background: #ededed;
    border-radius: 5px;
    padding: 10px;
    flex: 1;
    align-items: center;
    margin-bottom: 10px;
    .star-rating-wrapper {
      ${globalStyle.flex};
      flex: 1;
    }
    span {
      ${globalStyle.flex};
      &:nth-child(1) {
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 126.9%;
        text-align: center;
        color: #000000;
      }
      &:nth-last-child(1) {
        font-size: 12px;
      }
    }
  }

  .commentsWrapper {
    ${globalStyle.flex};
    ${globalStyle.column};
    background: #ededed;
    border-radius: 10px;
    padding: 10px;
    flex: 1;
    margin-bottom: 10px;
    .cz_list {
      ${globalStyle.flex};
      ${globalStyle.row};
      align-items: center;
      margin-top: 7.5px;
      margin-bottom: 7.5px;
      & > div {
        ${globalStyle.flex};
        &:nth-child(1) {
          border: solid 1px #bdbcbc;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background-color: #ffffff;
          margin-right: 10px;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          img {
            width: 100%;
          }
        }
        &:nth-child(2) {
          ${globalStyle.column};
          flex: 1;
          span {
            line-height: 15px;
            &:nth-child(1) {
              font-size: 12px;
            }
            &:nth-child(2) {
              font-size: 11px;
              color: #9a9898;
            }
            &:nth-child(3) {
              font-size: 12px;
              color: #000000;
            }
          }
        }
        input {
          border: solid 1px #dadada;
          padding: 7.5px !important;
        }
      }
    }
  }

  .playerDesc {
    ${globalStyle.flex};
    ${globalStyle.row};
    background-color: transparent;
    padding: 10px;
    @media (min-width: ${globalStyle.small}) {
      padding: 16px 24px;
    }
    .box_1,
    .box_2 {
      ${globalStyle.flex};
      ${globalStyle.column};
    }
    .box_1 {
      i {
        width: 40px;
        height: 40px;
        border-radius: 100%;
        background: #ffc212;
        font-weight: bold;
        font-size: 12px;
        line-height: 14px;
        text-transform: uppercase;
        color: #ffffff;
        ${globalStyle.flex};
        justify-content: center;
        align-items: center;
        font-style: normal;
      }
    }
    .box_2 {
      padding-left: 10px;
      justify-content: center;
      flex: 1;
      p {
        margin: 0px;
        ${globalStyle.flex};
        ${globalStyle.column};
        span {
          &.tex_big {
            font-weight: bold;
            font-size: 14px;
            line-height: 17px;
            text-transform: uppercase;
            @media (max-width: ${globalStyle.small}) {
              color: #000000;
            }
          }
          &.tex_small {
            font-weight: normal;
            font-size: 10px;
            line-height: 12px;
            text-transform: uppercase;
            color: #727b87;
          }
        }
      }
    }
  }
  .tabBlock {
    & > div {
      & > div {
        height: 46px;
      }
    }
  }
  ${VideoPlayerStyle};
`;
export default GlobalStyle;
