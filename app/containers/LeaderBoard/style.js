import styled from 'styled-components';
import globalStyle from '../../common/styles/var';
export const LeaderBoardContainer = styled.section`
  ${globalStyle.flex};
  ${globalStyle.column};
  @media (max-width: ${globalStyle.small}) {
    background-color: #f9fafc;
  }
  .topSection {
    ${globalStyle.flex};
    ${globalStyle.column};
    background: #58b368;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    border-radius: 0px 0px 5px 5px;
    min-height: 250px;
    @media (min-width: ${globalStyle.small}) {
      min-height: 300px;
    }
  }
  .container {
    ${globalStyle.flex};
    ${globalStyle.column};
    box-sizing: border-box;
  }
  .topHeading {
    ${globalStyle.flex};
    ${globalStyle.column};
    border-bottom: solid 1px #ffffff;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #ffffff;
    padding: 15px;
  }
  .boardTeamBox {
    ${globalStyle.flex};
    ${globalStyle.row};
    align-self: center;
    padding: 20px 0px;
    & > div {
      ${globalStyle.flex};
      ${globalStyle.column};
      background-color: rgba(250, 250, 250, 0.06);
      border-radius: 50%;
      width: 100px;
      height: 100px;
      margin: 0px 7.5px;
      justify-content: center;
      align-items: center;
      position: relative;
      @media (min-width: ${globalStyle.small}) {
        width: 165px;
        height: 165px;
      }
      &:nth-child(2) {
        width: 130px;
        height: 130px;
        @media (min-width: ${globalStyle.small}) {
          width: 190px;
          height: 190px;
        }
        .imgBox {
          width: 105px;
          height: 105px;
          @media (min-width: ${globalStyle.small}) {
            width: 145px;
            height: 145px;
          }
          .img {
            width: 105px;
            height: 105px;
            ${globalStyle.flex};
            @media (min-width: ${globalStyle.small}) {
              width: 145px;
              height: 145px;
            }
          }
        }
      }
      .imgBox {
        ${globalStyle.flex};
        ${globalStyle.column};
        position: absolute;
        border-radius: 50%;
        width: 80px;
        height: 80px;
        justify-content: center;
        align-items: center;
        top: 0;
        @media (min-width: ${globalStyle.small}) {
          width: 120px;
          height: 120px;
          top: 10px;
        }
        .img {
          width: 80px;
          height: 80px;
          justify-content: center;
          align-items: center;
          top: 0;
          border-radius: 50%;
          overflow: hidden;
          ${globalStyle.flex};
          @media (min-width: ${globalStyle.small}) {
            width: 120px;
            height: 120px;
          }
          img {
            width: 100%;
          }
        }
        .batch {
          position: absolute;
          bottom: 7px;
          right: 15px;
          width: 30px;
          height: 30px;
        }
      }
      .text {
        position: absolute;
        bottom: 0;
        font-weight: 500;
        font-size: 13px;
        line-height: 19px;
        color: #ffffff;
        @media (min-width: ${globalStyle.small}) {
          font-size: 16px;
        }
      }
    }
  }
  .leaderBoardContent {
    ${globalStyle.flex};
    ${globalStyle.column};
    align-items: center;
    .leaderWrapper {
      ${globalStyle.column};
      padding: 10px;
      width: 100%;
      @media (min-width: ${globalStyle.small}) {
        padding: 10px 24px;
        width: 700px;
        background: #ffffff;
        box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.05);
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
      }
    }
  }
  .listBox {
    ${globalStyle.flex};
    ${globalStyle.row};
    padding: 10px 0px;
    &:nth-child(1) {
      border-bottom: 0.5px solid #ced4db;
      span {
        font-size: 20px;
      }
    }
    & > div {
      ${globalStyle.flex};
    }
    .left {
      flex: 1;
      align-items: center;
      .icon {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 20px;
        background-color: #dedede;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      .content {
        ${globalStyle.flex};
        ${globalStyle.column};
        & > span {
          &:nth-child(1) {
            font-weight: bold;
            font-size: 14px;
            line-height: 17px;
            color: #000000;
          }
          &:nth-child(2) {
            font-weight: normal;
            font-size: 12px;
            line-height: 14px;
            color: #403f3f;
          }
        }
      }
    }
    .right {
      width: 80px;
      align-items: center;
      justify-content: center;
      .cercile {
        ${globalStyle.flex};
        ${globalStyle.column};
        font-weight: 500;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #da3a33;
        color: #ffffff;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
