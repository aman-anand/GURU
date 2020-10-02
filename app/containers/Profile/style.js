import styled from 'styled-components';
import globalStyle from '../../common/styles/var';
export const ProfileContainer = styled.section`
  ${globalStyle.flex};
  ${globalStyle.column};
  @media (max-width: ${globalStyle.small}) {
    background-color: #ffffff;
    height: 100vh;
  }
  .profileContainer {
    ${globalStyle.flex};
    ${globalStyle.column};
    box-sizing: border-box;
    flex: 1;
    align-self: center;
    width: 100%;
    position: relative;
    @media (min-width: 1142px) {
      width: 780px;
      padding: 10px 0px;
      margin-top: 24px;
    }
    @media (max-width: ${globalStyle.small}) {
      overflow: auto;
      flex: 1;
    }
  }
  .tabsWraper {
    ${globalStyle.flex};
    ${globalStyle.row};
    width: 100%;
    .tab {
      ${globalStyle.flex};
      background: #ffffff;
      @media (max-width: ${globalStyle.small}) {
        background-color: #2e323d;
      }
      @media (min-width: ${globalStyle.small}) {
        border-radius: 5px;
      }
      flex: 1;
      cursor: pointer;
      span {
        ${globalStyle.flex};
        flex: 1;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        color: #000000;
        @media (max-width: ${globalStyle.small}) {
          color: rgb(255 255 255 / 43%);
          text-transform: uppercase;
        }
        padding: 15px;
        align-items: center;
        justify-content: center;
      }
      &.active {
        background-color: #2e323d;
        background-color: rgba(46 50 61 / 86%);
        span {
          color: #ffffff;
        }
      }
    }
  }

  .tabContent {
    ${globalStyle.flex};
    ${globalStyle.column};
    align-items: center;
    overflow: auto;
    @media (max-width: ${globalStyle.small}) {
      padding: 0px 15px 15px 15px;
    }
    @media (min-width: ${globalStyle.small}) {
      background: #2e323d;
      border-radius: 5px;
      margin-top: 2px;
      padding-bottom: 20px;
    }
  }
  .basicDetailsForm {
    ${globalStyle.flex};
    ${globalStyle.column};
    width: 100%;
    @media (min-width: ${globalStyle.small}) {
      width: 335px;
    }
  }
`;
