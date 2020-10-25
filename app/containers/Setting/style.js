import styled from 'styled-components';
import globalStyle from '../../common/styles/var';
import right from '../../images/right.png';
export const SettingContainer = styled.section`
  ${globalStyle.flex};
  ${globalStyle.column};
  @media (max-width: ${globalStyle.small}) {
    background-color: #ffffff;
    height: 100vh;
  }
  .settingWrapper {
    ${globalStyle.flex};
    ${globalStyle.column};
    box-sizing: border-box;
    flex: 1;
    align-self: center;
    width: 100%;
    position: relative;
    @media (min-width: 1142px) {
      width: 400px;
      padding: 10px 0px;
      margin-top: 24px;
    }
    @media (max-width: ${globalStyle.small}) {
      overflow: auto;
      flex: 1;
    }
  }

  .heading {
    ${globalStyle.flex};
    ${globalStyle.row};
    align-items: center;
    justify-content: center;
    .hleft {
      ${globalStyle.flex};
      margin-right: 10px;
    }
    .hright {
      ${globalStyle.flex};
      ${globalStyle.column};
      span {
        ${globalStyle.flex};
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 17px;
        color: #403f3f;
      }
    }
  }
  .updateButton {
    width: 100%;
  }

  .radioWrapper {
    ${globalStyle.flex};
    ${globalStyle.column};
    label {
      ${globalStyle.flex};
      ${globalStyle.column};
      margin-bottom: 15px;
      input {
        display: none;
        &:checked {
          & + div {
            border: 4px solid #58b368;
            box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.05);
            span {
              &.icon {
                background-image: url('${right}');
                background-position: center center;
                background-repeat: no-repeat;
                background-color: #58b368;
              }
            }
          }
        }
      }
      .radioBox {
        ${globalStyle.flex};
        ${globalStyle.row};
        background-color: #ffffff;
        box-sizing: border-box;
        border-radius: 5px;
        cursor: pointer;
        padding: 20px 30px;
        align-items: center;
        justify-content: center;
        border: 1px solid #ced4db;
        span {
          ${globalStyle.flex};
          &.title {
            flex: 1;
            font-style: normal;
            font-weight: bold;
            font-size: 18px;
            line-height: 21px;
            color: #000000;
            text-transform: uppercase;
          }
          &.icon {
            width: 24px;
            height: 24px;
            border-radius: 50px;
            background: #ced4db;
          }
        }
      }
    }
  }
`;
