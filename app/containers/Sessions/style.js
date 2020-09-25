import styled from 'styled-components';
import globalStyle from '../../common/styles/var';
export const SessionContainer = styled.section`
  ${globalStyle.flex};
  ${globalStyle.column};
  @media (max-width: ${globalStyle.small}) {
    background-color: #f9fafc;
    height: 100vh;
  }
  .container {
    padding: 0px 15px;
    ${globalStyle.flex};
    ${globalStyle.column};
    box-sizing: border-box;
    @media (min-width: ${globalStyle.small}) {
      padding: 15px;
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

  .sessionWrapper {
    ${globalStyle.flex};
    ${globalStyle.column};
    @media (min-width: ${globalStyle.small}) {
      ${globalStyle.row};
    }
    & > div {
      ${globalStyle.flex};
    }
    .leftNavSession {
      ${globalStyle.row};
      @media (max-width: ${globalStyle.small}) {
        margin: 0px -15px;
      }
      @media (min-width: ${globalStyle.small}) {
        ${globalStyle.column};
        min-width: 255px;
        padding-right: 30px;
      }
      & > div {
        @media (max-width: ${globalStyle.small}) {
          flex: 1;
        }
        @media (min-width: ${globalStyle.small}) {
          margin-bottom: 7.5px;
        }
        a {
          display: block;
          text-decoration: none;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 17px;
          text-transform: uppercase;
          color: #ffffff;
          padding: 20px 25px;
          background-color: #2e323d;
          @media (min-width: ${globalStyle.small}) {
            color: #000000;
            border-radius: 7px;
            background-color: #ffffff;
          }
          &.active {
            @media (max-width: ${globalStyle.small}) {
              background-color: rgba(46, 50, 61, 0.8);
            }
            @media (min-width: ${globalStyle.small}) {
              border-left: solid 7px #000000;
            }
          }
        }
      }
    }
    .sessionCardWrapper {
      ${globalStyle.column};
      flex: 1;
    }
  }
`;
