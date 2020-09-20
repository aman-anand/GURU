import styled from 'styled-components';
import globalStyle from '../../common/style/var';
export const ProfileDetailsContainer = styled.div`
  ${globalStyle.flex};
  ${globalStyle.column};
  align-self: center;
  .field_row {
    ${globalStyle.flex};
    ${globalStyle.column};
    align-self: flex-start;
    box-sizing: border-box;
    flex: 1;
    @media (min-width: ${globalStyle.medium}) {
      ${globalStyle.row};
      margin: 0 -12px 30px -12px;
    }
    @media (max-width: ${globalStyle.medium}) {
      width: 100%;
    }
  }
  .fieldWrapper {
    ${globalStyle.flex};
    ${globalStyle.column};
    margin: 0px 12px;
    width: 100%;
    position: relative;
    @media (min-width: ${globalStyle.medium}) {
      width: 320px;
    }
    @media (max-width: ${globalStyle.small}) {
      margin: 0px 0px 16px 0px;
    }
    &.mobile {
      input {
        padding: 16px 18px 16px 85px;
      }
    }
    p {
      margin: 0px 0px 7px 0px;
      font-size: 15px;
      font-weight: 600;
      color: #202c44;
    }
    input {
      padding: 16px 18px;
      border: solid 1px rgba(165 165 165 / 0.3);
      border-radius: 5px;
      font-weight: 300;
      color: #202c44;
      font-size: 17px;
      &:focus,
      &:hover {
        border: solid 1px rgba(165 165 165 / 0.3);
        outline: none;
      }
    }
  }
  .buttonWrapper {
    ${globalStyle.flex};
    ${globalStyle.column};
    width: 100%;
    @media (min-width: ${globalStyle.medium}) {
      ${globalStyle.row};
      margin: 0px 12px;
    }
    button {
      border: none;
      padding: 20px 40px;
      font-size: 16px;
      cursor: pointer;
      background-color: transparent;
      font-weight: 500;
      ${globalStyle.flex};
      justify-content: center;
      @media (max-width: ${globalStyle.medium}) {
        font-size: 18px;
      }
      &:hover,
      &:focus {
        outline: none;
      }
    }
    .saveButton {
      background-color: #ed5e50;
      color: #ffffff;
      border-radius: 5px;
      width: 180px;
      font-weight: 400;
      @media (max-width: ${globalStyle.medium}) {
        order: 2;
        width: 100%;
      }
    }
    .updateButton {
      color: #ed5e50;
      @media (max-width: ${globalStyle.medium}) {
        order: 1;
        justify-content: flex-start;
        padding: 20px 40px 20px 0px;
      }
    }
  }
  .mobileNumber {
    position: absolute;
    top: 46px;
    ${globalStyle.flex};
    ${globalStyle.row};
    padding-left: 20px;
    color: #202c44;
    align-items: center;
    i {
      width: 30px;
      height: 20px;
      border: solid 1px #ededed;
      display: block;
      margin-right: 4px;
      background-color: #dedede;
    }
  }
  .scroll {
    @media (max-width: ${globalStyle.small}) {
      height: 50vh;
    }
    overflow: auto;
  }
`;
