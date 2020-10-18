import styled from 'styled-components';
import globalStyle from '../../common/styles/var';
export const BasicDetailsContainer = styled.div`
  ${globalStyle.flex};
  ${globalStyle.column};
  width: 100%;
  align-items: center;
  @media (min-width: ${globalStyle.small}) {
    margin-top: 25px;
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
    cursor: pointer;
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
  }
  ._decText {
    font-size: 14px;
    font-weight: 300;
  }
  .fieldWrapper {
    ${globalStyle.flex};
    ${globalStyle.column};
    margin-bottom: 12px;
    input {
      ${globalStyle.flex};
      width: 100%;
      margin: 0px;
      &.error {
        border: solid 1px red;
      }
    }
  }
  .fieldError {
    color: red;
    font-size: 14px;
  }
  ._twoComumnWrapper {
    box-sizing: border-box;
    ${globalStyle.flex};
    ${globalStyle.row};
    .fieldWrapper {
      flex: 1;
      &:nth-child(1) {
        padding-right: 7.5px;
      }
      &:nth-child(2) {
        padding-left: 7.5px;
      }
    }
  }
  ._twoRowWrapper {
    box-sizing: border-box;
    ${globalStyle.flex};
    ${globalStyle.column};
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
        align-items: center;
        .uploded {
          margin-right: 10px;
        }
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
    ${globalStyle.flex};
    ${globalStyle.column};
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    position: relative;
    input {
      display: none;
    }
    i {
      ${globalStyle.flex};
      background-color: #ccc3c3;
      width: 120px;
      height: 120px;
      border: solid 1px #ababab;
      border-radius: 60px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .cam {
      background: #da3a33;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      position: absolute;
      ${globalStyle.flex};
      ${globalStyle.column};
      justify-content: center;
      align-items: center;
      bottom: 0px;
      right: 10px;
    }
  }
  .picWrapper {
    ${globalStyle.flex};
    ${globalStyle.row};
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    .rollNo {
      ${globalStyle.flex};
      ${globalStyle.row};
      background: #0976be;
      border-radius: 5px;
      padding: 10px;
      i {
        ${globalStyle.flex};
        margin-right: 7.5px;
      }
      span {
        color: #ffffff;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
      }
    }
  }
  .updateButton {
    width: 100%;
  }
`;
