import styled from 'styled-components';
import globalStyle from '../../common/styles/var';
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
      padding: 15px;
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
`;
