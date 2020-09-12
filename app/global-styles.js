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
  padding: 16px 20px;
  @media (min-width: ${globalStyle.small}) {
    padding: 16px 24px;
  }
}
.tabDataBox {}
`;

export default GlobalStyle;
