import { createGlobalStyle } from 'styled-components';
import globalStyle from 'Global/styles/base';
import { GlobalFontStyles } from 'Global/styles/font';

const GlobalStyle = createGlobalStyle`
  ${GlobalFontStyles};
  html,
  body {
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    height: 100%;
    width: 100%;
  }
  input {
    background-color: #F7F7F7;
    color: #727B87;
    border-radius: 4px;
    padding: 16px 17px;
    &:focus {
      outline: none;
    }
    &.input_error {
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
    padding: 16px 0px;
    @media (min-width: ${globalStyle.small}) {
      padding: 16px 24px;
    }
  }
  .tabDataBox {}
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
    .VideoCardContainer, .arcticalCardWrapper {
      margin: 0px;
    }
  }
`;
export default GlobalStyle;
