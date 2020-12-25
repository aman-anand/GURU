import styled from 'styled-components';
import globalStyle from '../../common/styles/var';
export const HomeContainer = styled.section`
  ${globalStyle.flex};
  ${globalStyle.column};
  @media (max-width: ${globalStyle.small}) {
    background-color: #f9fafc;
    height: 100vh;
  }
  .container {
    padding: 15px;
    ${globalStyle.flex};
    ${globalStyle.column};
    box-sizing: border-box;
    @media (min-width: ${globalStyle.small}) {
      ${globalStyle.row};
      padding: 10px 0px;
      margin-top: 24px;
    }
    @media (max-width: ${globalStyle.small}) {
      flex: 1;
    }
  }
  .leftBox,
  .rightBox {
    box-sizing: border-box;
    ${globalStyle.flex};
    ${globalStyle.column};
    @media (min-width: ${globalStyle.small}) {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
  .leftBox {
    flex: 1;
    width: 100%;
  }
  .rightBox {
    @media (min-width: ${globalStyle.small}) {
      width: 33%;
    }
  }
  .attendanceUpdates {
    margin-top: 24px;
    ._sessionBox {
      @media (min-width: ${globalStyle.small}) {
        align-items: center;
      }
    }
  }

  .jewalHeadding {
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
    color: #000000;
  }
  .jewalWrapper {
    ${globalStyle.flex};
    ${globalStyle.row};
    margin: 0px -7.5px;
    & > div {
      ${globalStyle.flex};
      flex: 1;
      margin: 0px 7.5px;
      border-radius: 5px;
      position: relative;
      @media (min-width: ${globalStyle.small}) {
        max-width: 245px;
      }
      a {
        img {
          width: 100%;
          &.linkImg {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            width: 60px;
          }
        }
      }
    }
  }
`;
