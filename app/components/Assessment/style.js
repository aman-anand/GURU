import styled from 'styled-components';
import globalStyle from '../../common/styles/var';
export const AssessmentContainer = styled.div`
  ${globalStyle.flex};
  ${globalStyle.row};
  padding: 7.5px 0px;
  .iconBox {
    ${globalStyle.flex};
    margin-right: 10px;
    align-items: center;
    justify-content: center;
  }
  .mContent {
    ${globalStyle.flex};
    ${globalStyle.column};
    flex: 1;
    align-items: flex-start;
    justify-content: center;
    & > span {
      &:nth-child(1) {
        &.complete {
          background: #58b368;
        }
        &.pending {
          background: #da3a33;
        }
        border-radius: 36px;
        font-weight: 500;
        font-size: 10px;
        color: #ffffff;
        max-width: 100px;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 4px 14px;
      }
      &:nth-child(2) {
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        color: #000000;
        margin: 3px 0px;
        text-transform: upercase;
      }
      &:nth-child(3) {
        font-weight: normal;
        font-size: 10px;
        line-height: 126.9%;
        color: #727b87;
      }
    }
  }
  .mRight {
    ${globalStyle.flex};
    .score {
      padding: 10px;
      background-color: rgba(206, 212, 219, 0.3);
      font-size: 12px;
      align-self: center;
      justify-content: center;
    }
    .startButton {
      justify-content: center;
      border: 1px solid #403f3f;
      font-size: 14px;
      background-color: transparent;
      align-self: center;
      padding: 5px 10px;
      cursor: pointer;
    }
  }
`;
