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
    padding: 0px 15px 15px 15px;
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
        label {
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
          cursor: pointer;
          text-align: center;
          @media (min-width: ${globalStyle.small}) {
            color: #000000;
            border-radius: 7px;
            background-color: #ffffff;
            border-left: solid 7px #ffffff;
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
  .tabwrap {
    ${globalStyle.flex};
    ${globalStyle.row};
    @media (max-width: ${globalStyle.small}) {
      margin: 0px -15px;
    }
    .list {
      ${globalStyle.flex};
      ${globalStyle.column};
      flex: 1;
      padding: 20px 25px;
      background-color: #2e323d;
      span {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        text-transform: uppercase;
        color: #ffffff;
        cursor: pointer;
        text-align: center;
        text-transform: uppercase;
      }
      &.active {
        background-color: rgba(46, 50, 61, 0.8);
      }
    }
  }
  .detailsSessionWrapper {
    ${globalStyle.flex};
    ${globalStyle.column};
  }
  .imgWraper {
    ${globalStyle.flex};
    ${globalStyle.column};
    border: solid 1px red;
    flex: 1;
    min-height: 250px;
    padding: 15px;
    @media (max-width: ${globalStyle.small}) {
      margin: 0px -15px;
      min-height: 200px;
    }
  }
  .playerDesc {
    padding: 10px;
    margin: 0px -10px 10px -10px;
  }
  .tabdata {
    ${globalStyle.flex};
    ${globalStyle.column};
    @media (min-width: ${globalStyle.small}) {
      padding: 0px 10px;
    }
  }
  .dateBox {
    background: #ededed;
    @media (min-width: ${globalStyle.small}) {
      background: #ffffff;
    }
    border-radius: 5px;
    padding: 15px 5px;
    ${globalStyle.flex};
    ${globalStyle.column};
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
  }
  .map {
    border: solid 1px red;
    min-height: 130px;
    background-color: #dedede;
    border: solid 1px #b1b1b1;
    border-radius: 5px;
    @media (min-width: ${globalStyle.small}) {
      min-height: 200px;
    }
  }
  .accordianwrapper {
    ${globalStyle.flex};
    ${globalStyle.column};
  }
`;
