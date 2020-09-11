import styled from 'styled-components';
import globalStyle from 'Global/styles/base';
export const VideoCardContainer = styled.div`
  ${globalStyle.flex};
  ${globalStyle.column};
  box-sizing: border-box;
  width: 100%;
  margin: 8px 0px;
  border-radius: 5px;
  min-height: 185px;
  max-height: 185px;
  position: relative;
  overflow: hidden;
  @media (max-width: ${globalStyle.small}) {
    min-height: 200px;
    max-height: 200px;
  }
  @media (min-width: ${globalStyle.small}) {
    width: 255px;
    margin: 15px;
  }
  .imageBox {
    background-image: url(${props => (props.bg ? props.bg : '')});
    background-size: cover;
    @media (min-width: ${globalStyle.small}) {
      background-size: contain;
    }
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
    .bottomBox {
      ${globalStyle.flex};
      z-index: 1;
    }
    .bottomBox {
      ${globalStyle.row};
      position: absolute;
      bottom: 0;
      width: 100%;
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
          ${globalStyle.row};
          align-items: center;
          i {
            ${globalStyle.flex};
            width: 16px;
            height: 16px;
            margin-right: 10px;
            align-items: center;
          }
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
`;
