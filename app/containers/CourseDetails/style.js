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
        background: #f7f7f7;
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

  .review_box {
    ${globalStyle.flex};
    ${globalStyle.row};
    background: #F7F7F7;
    border-radius: 10px;
    padding: 10px;
    flex: 1;
    align-items: center;
    margin-bottom: 10px;
    span {
      ${globalStyle.flex};
      &:nth-child(1) {
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 126.9%;
        text-align: center;
        color: #000000;
      }
      &:nth-child(2) {
        margin-left: 10px;
        margin-right: 10px;
        flex: 1;
      }
      &:nth-last-child(1) {
        font-size: 12px;
      }
    }
  }

  .commentsWrapper {
    ${globalStyle.flex};
    ${globalStyle.column};
    background: #F7F7F7;
    border-radius: 10px;
    padding: 10px;
    flex: 1;
    margin-bottom: 10px;
    .cz_list {
      ${globalStyle.flex};
      ${globalStyle.row};
      align-items: center;
      margin-top: 7.5px;
      margin-bottom: 7.5px;
      & > div {
        ${globalStyle.flex};
        &:nth-child(1) {
          border: solid 1px #bdbcbc;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background-color: #dedede;
          margin-right: 10px;
          align-items: center;
          justify-content: center;
        }
        &:nth-child(2) {
          ${globalStyle.column};
          flex: 1;
          span {
            line-height: 15px;
            &:nth-child(1) {
              font-size: 12px;
            }
            &:nth-child(2) {
              font-size: 11px;
              color: #9a9898;
            }
            &:nth-child(3) {
              font-size: 12px;
              color: #000000;
            }
          }
        }
        input {
          border: solid 1px #dadada;
          padding: 7.5px !important;
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

  .listItembox {
    ${globalStyle.flex};
    ${globalStyle.row};
    flex: 1;
    cursor: pointer;
    border-bottom: 0.5px solid #CED4DB;
    padding: 7.5px 0px;
    & > div {
      ${globalStyle.flex};
      ${globalStyle.column};
    }
    .iconbox {
      background-color: ${props =>
        props.color ? `#${props.color}` : '#ffc212'};
      width: 48px;
      height: 32px;
      margin-right: 10px;
      justify-content: center;
      align-items: center;
    }
    .listContent {
      flex: 1;
      align-items: flex-start;
      justify-content: center;
      span {
        &:nth-child(1) {
          font-weight: 500;
          font-size: 12px;
          color: #000000;
          text-transform: uppercase;
        }
        &:nth-child(2) {
          font-weight: normal;
          font-size: 10px;
          line-height: 126.9%;
          color: #727B87;
        }
      }
    }
    .listStatus {
      align-items: center;
      justify-content: center;
    }
  }

`;
