import styled from 'styled-components';
import globalStyle from '../../common/styles/var';
export const AuthenticationContainer = styled.div`
  ${globalStyle.flex};
  ${globalStyle.column};
  width: 100%;
  @media (min-width: ${globalStyle.small}) {
    max-width: 350px;
    align-items: center;
  }
  ._wrapper {
    margin-top: 20px;
    ${globalStyle.flex};
    ${globalStyle.column};
    align-self: stretch;
  }
  .otpWrapper {
    ${globalStyle.flex};
    ${globalStyle.row};
    margin: 0px -7px;
    input {
      width: 25%;
      margin-left: 7px;
      margin-right: 7px;
      text-align: center;
      color: #000000;
      font-weight: 500;
      font-size: 16px;
      height: 60px;
      @media (max-width: ${globalStyle.small}) {
        padding: 5px;
        border: 0.5px solid #ced4db;
        height: 45px;
      }
    }
  }
  input {
    ${globalStyle.flex};
    margin-bottom: 12px;
    @media (max-width: ${globalStyle.small}) {
      background: #f7f7f7;
    }
  }
  button {
    margin-bottom: 12px;
    align-self: stretch;
  }
  .donthavetext {
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    @media (min-width: ${globalStyle.small}) {
      color: #ffffff;
    }
    a {
      text-decoration: none;
      color: #000000;
      @media (min-width: ${globalStyle.small}) {
        color: #ffffff;
      }
    }
  }
  ._hText,
  ._decText {
    @media (min-width: ${globalStyle.small}) {
      color: #ffffff;
    }
  }
  ._hText {
    margin: 0px;
    line-height: 17px;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    @media (max-width: ${globalStyle.small}) {
      color: #000000;
    }
    @media (min-width: ${globalStyle.small}) {
      font-size: 18px;
    }
  }
  ._decText {
    font-size: 14px;
    font-weight: 300;
    @media (max-width: ${globalStyle.small}) {
      color: #000000;
    }
    @media (min-width: ${globalStyle.small}) {
      font-size: 18px;
    }
  }
  .lockClass {
    ${globalStyle.flex};
    margin-bottom: 12px;
    width: 40px;
    height: 48px;
    @media (min-width: ${globalStyle.small}) {
      display: none;
    }
  }
`;
