import styled from 'styled-components';
import globalStyle from '../../common/styles/var';
export const LeaderBoardContainer = styled.section`
  ${globalStyle.flex};
  ${globalStyle.column};
  @media (max-width: ${globalStyle.small}) {
    background-color: #f9fafc;
    height: 100vh;
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
      background-color: rgba(250, 250, 250, 0.14);
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
        overflow: hidden;
        top: 0;
        @media (min-width: ${globalStyle.small}) {
          width: 120px;
          height: 120px;
          top: 10px;
        }
        img {
          width: 100%;
        }
        .batch {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 30px;
          height: 30px;
          border: solid 1px red;
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
`;
