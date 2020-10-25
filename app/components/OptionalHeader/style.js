import styled from 'styled-components';
import globalStyle from '../../common/styles/var';

const OptionalHeaderContainer = styled.nav`
  position: relative;
  min-height: 50px;
  padding-left: 10px;
  padding-right: 10px;
  ${globalStyle.flex};
  ${globalStyle.flexcenter};
  background-color: #ffffff;
  z-index: 99;
  .backTo,
  .pageTitle,
  .notify {
    ${globalStyle.flex};
  }
  .backTo {
    margin-right: 7.5px;
    cursor: pointer;
    width: 24px;
    height: 24px;
    a {
      display: flex;
      flex: 1;
      align-items: center;
    }
  }
  .pageTitle {
    font-weight: 500;
    flex: 1;
    font-weight: bold;
    font-size: 13px;
    line-height: 17px;
    text-align: center;
    justify-content: center;
    color: #403f3f;
  }
  .notification {
    i {
      width: 24px;
      height: 24px;
      text-align: center;
      justify-content: center;
      margin: 2px;
      cursor: pointer;
      padding: 3px;
    }
  }
`;

export { OptionalHeaderContainer };
