import styled from 'styled-components';
import globalStyle from 'Global/styles/base';
export const RegistorFromContainer = styled.div`
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
  input {
    ${globalStyle.flex};
    margin-bottom: 12px;
    align-self: stretch;
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
    @media (min-width: ${globalStyle.small}) {
      font-size: 18px;
    }
  }
  ._decText {
    font-size: 14px;
    font-weight: 300;
    @media (min-width: ${globalStyle.small}) {
      font-size: 18px;
    }
  }
  ._twoComumnWrapper {
    box-sizing: border-box;
    ${globalStyle.flex};
    ${globalStyle.row};
    margin: 0px -10px 12px -10px;
    input {
      margin: 0px 10px;
      width: 50%;
    }
  }
  ._twoRowWrapper {
    box-sizing: border-box;
    ${globalStyle.flex};
    ${globalStyle.column};
    margin: 0px -10px 0px -10px;
    input {
      margin: 0px 10px 12px 10px;
    }
  }
  .uploadField {
    height: 96px;
    background-color: #f7f7f7;
    cursor: pointer;
    @media (min-width: ${globalStyle.small}) {
      background-color: #ffffff;
    }
    border: 1px dashed #727b87;
    border-radius: 4px;
    margin-bottom: 12px;
    ${globalStyle.flex};
    ${globalStyle.column};
    label {
      ${globalStyle.flex};
      ${globalStyle.row};
      flex: 1;
      input {
        display: none;
      }
      & > div {
        ${globalStyle.flex};
        flex: 1;
      }
      ._leftUpload {
        justify-content: flex-end;
        padding-right: 7.5px;
      }
      ._rightUpload {
        justify-content: flex-start;
        padding-left: 7.5px;
        ${globalStyle.column};
        justify-content: center;
        span {
          line-height: 18px;
          color: #727b87;
          i {
            margin-right: 5px;
          }
          &.uploadText {
            font-size: 14px;
            font-weight: 700;
          }
          &:nth-child(2) {
            font-size: 14px;
            font-weight: 300;
          }
        }
      }
    }
    &.upload_error {
      border: 1px dashed #da3a33;
    }
  }
  .profilePic {
    @media (max-width: ${globalStyle.small}) {
      ${globalStyle.flex};
      ${globalStyle.column};
      margin-bottom: 24px;
      justify-content: center;
      align-items: center;
      i {
        ${globalStyle.flex};
        background-color: #ccc3c3;
        width: 120px;
        height: 120px;
        border: solid 1px #ababab;
        border-radius: 60px;
      }
    }
  }
`;
