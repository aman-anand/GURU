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
  overflow: hidden;
  @media (min-width: ${globalStyle.small}) {
    width: 350px;
    margin: 15px;
  }
  .imageBox {
    background-image: url(${props => (props.bg ? props.bg : '')});
    background-size: contain;
    ${globalStyle.flex};
    ${globalStyle.column};
    position: absolute;
    overflow: hidden;
    border-radius: 5px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    &::after {
      content: '';
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 36.46%, rgba(0, 0, 0, 0.74) 82.29%, #000000 100%);
      position: absolute;
      left: 0;
      bottom: 0;
      margin: auto;
      height: 100%;
      width: 100%;
    }
    .topBox,
    .bottomBox {
      ${globalStyle.flex};
      z-index: 1;
    }
    .topBox {
      flex: 1;
      position: relative;
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
      ._rb {
      }
    }
  }
`;
