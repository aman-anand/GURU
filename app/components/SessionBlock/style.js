import styled from 'styled-components';
import globalStyle from '../../common/styles/var';
export const SessionBlockContainer = styled.section`
  ${globalStyle.flex};
  ${globalStyle.column};
  border-radius: 10px;
  background: #e4e4e4;
  padding: 15px;
  @media (max-width: ${globalStyle.small}) {
    margin-top: 15px;
  }
  @media (min-width: ${globalStyle.small}) {
    margin-bottom: 15px;
    background: #ffffff;
    border-radius: 5px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  }
  & > div {
    ${globalStyle.flex};
    ${globalStyle.row};
  }
  .topBlock {
    margin-bottom: 7.5px;
    .icon {
      ${globalStyle.flex};
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: ${props => (props.color ? `#${props.color}` : '#da3a33')};
      border: solid 1px #d8d8d8;
      align-items: center;
      justify-content: center;
      margin-right: 15px;
    }
    .contentBlock {
      ${globalStyle.flex};
      ${globalStyle.column};
      flex: 1;
      p {
        ${globalStyle.flex};
        ${globalStyle.column};
        margin: 0px;
        span {
          color: #403f3f;
          font-size: 12px;
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 14px;
          &:nth-child(2) {
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            text-transform: uppercase;
          }
          &:nth-child(3) {
            color: #727b87;
            text-transform: uppercase;
          }
        }
      }
    }
  }
  .bottomBlock {
    flex: 1;
    .text1,
    .text2 {
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      color: #403f3f;
    }
    .upComContent {
      ${globalStyle.flex};
      ${globalStyle.row};
      flex: 1;
      align-items: center;
      .cercleBox {
        ${globalStyle.flex};
        ${globalStyle.row};
        margin-right: 15px;
        span {
          width: 28px;
          height: 28px;
          ${globalStyle.flex};
          border-radius: 50%;
          align-items: center;
          justify-content: center;
          font-weight: normal;
          font-size: 10px;
          line-height: 14px;
          color: #ffffff;
          &:nth-child(1) {
            background: #dad873;
          }
          &:nth-child(2) {
            background: #ffc212;
            margin-left: -12px;
          }
          &:nth-child(3) {
            background: #c4c4c4;
            margin-left: -12px;
          }
          &:nth-child(4) {
            background: #fd2703;
            margin-left: -12px;
          }
        }
      }
    }
  }
`;
