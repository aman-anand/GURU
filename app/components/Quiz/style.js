import styled from 'styled-components';
import globalStyle from '../../common/styles/var';
import activeImg from '../../images/active.png';

export const QuizContainer = styled.div`
  ${globalStyle.flex};
  ${globalStyle.column};
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  align-self: center;
  @media (min-width: 1142px) {
    width: 1143px;
    margin-top: 24px;
    min-height: 500px;
  }
  @media (max-width: ${globalStyle.small}) {
    overflow: auto;
    flex: 1;
  }
  & > div {
    ${globalStyle.flex};
    ${globalStyle.column};
  }
  /* NOTE: Top Section */
  .topSecData {
    ${globalStyle.flex};
    ${globalStyle.row};
    padding: 20px 24px;
    @media (max-width: ${globalStyle.small}) {
      background-color: #F7F7F7;
    }
    & > div {
      ${globalStyle.flex};
    }
    .tlSect {
      flex: 1;
      ${globalStyle.column};
      align-items: flex-start;
      span {
        font-size: 14px;
        line-height: 17px;
        text-transform: uppercase;
        color: #403f3f;
        &.textH {
          font-weight: 500;
        }
        &.textS {
          font-weight: 400;
        }
      }
    }
    .trSect {
      .examTimes {
        ${globalStyle.flex};
        background: #403f3f;
        padding: 10px 15px;
        color: #ffffff;
        font-weight: 400;
        font-size: 12px;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .percentage {
    width: 100%;
    height: 7px;
    background-color: #ededed;
    position: relative;
    ${globalStyle.flex};
    & > span {
      ${globalStyle.flex};
      position: absolute;
      left: 0;
      height: 100%;
      background-color: #58b368;
      top: 0;
    }
    .percent_30 {
      width: 30%;
    }
  }

  /* NOTE: Content Section */
  .middleSec {
    ${globalStyle.flex};
    padding: 15px 25px;
    flex: 1;
    .quesWrapper {
      ${globalStyle.flex};
      ${globalStyle.column};
      width: 100%;
      @media (min-width: ${globalStyle.small}) {
        max-width: 500px;
        align-self: center;
        margin-top: 60px;
      }
    }
    .answarOpt {
    }
    .ansBox {
      ${globalStyle.flex};
      ${globalStyle.row};
      margin-bottom: 10px;
      label {
        ${globalStyle.flex};
        ${globalStyle.row};
        cursor: pointer;
        span {
          font-weight: normal;
          font-size: 14px;
          color: #403F3F;
          ${globalStyle.flex};
          flex: 1;
        }
      }
      input {
        display: none;
        &:checked {
          & + label {
            .icon {
              background: #ffffff;
              border: solid 1px #ffffff;
              background-image: url('${activeImg}');
              background-repeat: no-repeat;
              background-position: center center;
            }
          }
        }
      }
      .icon {
        ${globalStyle.flex};
        width: 18px;
        height: 18px;
        margin-right: 8px;
        border-radius: 50px;
        background-color: #c4c4c4;
        border: solid 1px #ffffff
      }
    }
  }

  /* NOTE: Bottom Section */
  .bottomSec {
    ${globalStyle.row};
    background: #2e323d;
    padding: 15px 25px;
    color: #ffffff;
    align-items: center;
    .quesCount {
      ${globalStyle.flex};
      @media (min-width: ${globalStyle.small}) {
        flex: 1;
      }
    }
    .questionButton {
      background-color: #ffffff;
      padding: 5px 10px;
      border-radius: 5px;
      ${globalStyle.flex};
      align-items: center;
      cursor: pointer;
      min-height: 32px;
      min-width: 220px;
      align-items: center;
      justify-content: center;
      @media (max-width: ${globalStyle.small}) {
        flex: 1;
        margin-left: 15px;
      }
      &.submitAnswar {
        background-color: #58B368;
        span {
          color: #ffffff;
        }
      }
      i {
        margin-right: 10px;
      }
      span {
        font-weight: bold;
        font-size: 14px;
        line-height: 17px;
        text-transform: uppercase;
        color: #000000;
      }
    }
  }
`;
