/* eslint-disable indent */
import styled from 'styled-components';
import globalStyle from '../../common/styles/var';
export const GuruCoursesDetailsContainer = styled.section`
  ${globalStyle.flex};
  ${globalStyle.column};
  @media (max-width: ${globalStyle.small}) {
    background-color: #f9fafc;
    height: 100vh;
  }
  .container {
    padding: 10px;
    ${globalStyle.flex};
    ${globalStyle.column};
    box-sizing: border-box;
    @media (min-width: ${globalStyle.small}) {
      ${globalStyle.row};
      padding: 10px 0px;
      margin-top: 24px;
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
  }
  .rightBox {
    @media (min-width: ${globalStyle.small}) {
      width: 33%;
    }
  }
  sessionCardWrapper,
  .VideoCardContainer {
    min-height: 195px;
    max-height: 195px;
    @media (min-width: ${globalStyle.small}) {
      margin: 8px 15px;
    }
  }
  .VideoCardContainer {
    border: solid 1px red;
    @media (min-width: ${globalStyle.small}) {
      width: 100%;
    }
  }
  .brifSessionBox {
    ${globalStyle.flex};
    ${globalStyle.row};
    flex-wrap: wrap;
    /*@media (max-width: ${globalStyle.small}) {
      margin-left: -12px;
      margin-right: -12px;
    }*/
    & > div {
      &.sectionItem,
      &.certificateItem {
        ${globalStyle.flex};
        ${globalStyle.row};
        background: #ededed;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        padding: 10px;
        margin: 7.5px;
        justify-content: center;
        align-items: center;
        @media (min-width: ${globalStyle.small}) {
          min-width: 190px;
        }
        @media (max-width: ${globalStyle.small}) {
          flex: 1;
        }
        .icon,
        ._content {
          ${globalStyle.flex};
        }
        ._content {
          ${globalStyle.column};
          padding-left: 8px;
          span {
            line-height: 17px;
            font-weight: 300;
            font-size: 14px;
            @media (max-width: ${globalStyle.small}) {
              font-size: 10px;
            }
            color: #000000;
            &:nth-child(1) {
              font-weight: 500;
            }
            &:nth-child(2) {
              color: #403f3f;
            }
          }
        }
      }
    }
  }

  .cariculamBox {
    & > div {
      box-shadow: inherit;
    }
  }
  .accordianWrapper {
    background-color: #F7F7F7;
    .headingRow {
      & > div {
        margin: 0px;
      }
    }
    .accorHeading {
      text-transform: uppercase;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      color: #000000;
    }
  }

  .accordianData {
    ${globalStyle.flex};
    ${globalStyle.column};
    flex: 1;
  }
  
  .downlodCertificate {
    background: #DA3A33;
    border-radius: 5px;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #FFFFFF;
    margin-top: 7.5px;
    width: 100%;
  }
`;
