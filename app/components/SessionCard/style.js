import styled from 'styled-components';
import globalStyle from 'Global/styles/base';
export const SessionCardContainer = styled.div`
  ${globalStyle.flex};
  ${globalStyle.column};
  box-sizing: border-box;
  width: 100%;
  margin: 8px 0px;
  border-radius: 5px;
  min-height: 210px;
  max-height: 210px;
  position: relative;
  flex: 1;
  @media (min-width: ${globalStyle.small}) {
    min-width: 350px;
    max-width: 350px;
    margin: 15px;
  }
  .imageBox {
    background-image: url(${props => (props.bg ? props.bg : '')});
    background-size: cover;
    ${globalStyle.flex};
    ${globalStyle.column};
    position: absolute;
    border-radius: 5px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    text-decoration: none;
    &::after {
      content: '';
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 36.46%, rgba(0, 0, 0, 0.74) 82.29%, #000000 100%);
      position: absolute;
      left: 0;
      bottom: 0;
      margin: auto;
      height: 100%;
      width: 100%;
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    .topBox,
    .bottomBox {
      ${globalStyle.flex};
      z-index: 1;
    }
    .topBox {
      flex: 1;
      position: relative;
    }
    .bottomBox {
      ${globalStyle.row};
      & > div {
        ${globalStyle.flex};
      }
      ._lb {
        flex: 1;
        padding: 16px 23px;
        p {
          margin: 0px;
          color: #ffffff;
          ${globalStyle.flex};
          ${globalStyle.column};
          span {
            &:nth-child(1) {
              font-weight: 500;
              font-size: 14px;
              line-height: 17px;
              text-transform: uppercase;
            }
            &:nth-child(2) {
              font-weight: normal;
              font-size: 10px;
              line-height: 12px;
              text-transform: uppercase;
            }
          }
        }
      }
    }
  }
  .cardSticker {
    ${globalStyle.flex};
    ${globalStyle.row};
    position: absolute;
    right: 0;
    top: 18px;
    background: #da3a33;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.05);
    & > div {
      ${globalStyle.flex};
      color: #ffffff;
      padding: 10px;
      align-items: center;
      &:nth-child(1) {
        background-color: rgba(64, 63, 63, 0.5);
        font-weight: 700;
        font-size: 18px;
        line-height: 17px;
        text-align: center;
        text-transform: uppercase;
      }
      &:nth-child(2) {
        flex: 1;
        font-weight: normal;
        font-size: 14px;
        line-height: 14px;
      }
    }
  }
  .secoundCardSticker {
    ${globalStyle.flex};
    ${globalStyle.row};
    position: absolute;
    right: -5px;
    top: 16px;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.05);
    & > div {
      ${globalStyle.flex};
      color: #ffffff;
      padding: 8px 10px;
      align-items: center;
      background-color: #fd2703;
      color: #ffffff;
      font-weight: 500;
      font-size: 10px;
      line-height: 12px;
      text-transform: uppercase;
      &.expert {
        background-color: #fd2703;
        &::before {
          content: '';
          width: 0;
          height: 0;
          border-top: 13.5px solid transparent;
          border-right: 12px solid #fd2703;
          border-bottom: 13px solid transparent;
          position: absolute;
          left: -12px;
        }
        &::after {
          content: '';
          width: 0;
          height: 0;
          border-top: 5px solid #fd2703;
          border-right: 5px solid transparent;
          position: absolute;
          right: 0px;
          bottom: -5px;
        }
      }
      &.beginner {
        background-color: #58b368;
        &::before {
          content: '';
          width: 0;
          height: 0;
          border-top: 13.5px solid transparent;
          border-right: 12px solid #58b368;
          border-bottom: 13px solid transparent;
          position: absolute;
          left: -12px;
        }
        &::after {
          content: '';
          width: 0;
          height: 0;
          border-top: 5px solid #58b368;
          border-right: 5px solid transparent;
          position: absolute;
          right: 0px;
          bottom: -5px;
        }
      }
      &.intermediate {
        background-color: #0976be;
        &::before {
          content: '';
          width: 0;
          height: 0;
          border-top: 13.5px solid transparent;
          border-right: 12px solid #0976be;
          border-bottom: 13px solid transparent;
          position: absolute;
          left: -12px;
        }
        &::after {
          content: '';
          width: 0;
          height: 0;
          border-top: 5px solid #0976be;
          border-right: 5px solid transparent;
          position: absolute;
          right: 0px;
          bottom: -5px;
        }
      }
    }
  }
`;
