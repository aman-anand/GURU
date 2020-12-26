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
        ${globalStyle.flex};
        flex: 1;
        img {
          width: 100%;
          &.linkImg {
            position: absolute;
            left: 0;
            top: 15px;
            right: 0;
            margin: auto;
            width: 35px;
            @media (min-width: ${globalStyle.small}) {
              top: 30px;
            }
          }
        }
        span.textHealth {
          position: absolute;
          width: 84px;
          left: 0;
          right: 0;
          margin: auto;
          bottom: 27px;
          height: 20px;
          text-align: center;
          color: #ffffff;
          @media (min-width: ${globalStyle.small}) {
            bottom: 40px;
          }
        }
        span.entatain {
          position: absolute;
          width: 110px;
          left: 0;
          right: 0;
          margin: auto;
          bottom: 27px;
          height: 20px;
          text-align: center;
          color: #ffffff;
          @media (min-width: ${globalStyle.small}) {
            bottom: 40px;
          }
        }
      }
    }
  }
`;
