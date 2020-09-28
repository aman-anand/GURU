/* eslint-disable indent */
import styled from 'styled-components';
import globalStyle from '../../common/styles/var';
export const ArticleCardContainer = styled.div`
  ${globalStyle.flex};
  ${globalStyle.column};
  box-sizing: border-box;
  width: 100%;
  margin: 8px 0px;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  background-color: rgba(249, 250, 252, 0.3);
  @media (min-width: ${globalStyle.small}) {
    width: 255px;
    margin: 15px;
  }
  .imageBox {
    ${globalStyle.flex};
    ${globalStyle.column};
    text-decoration: none;
  }
  .imgBox {
    ${globalStyle.flex};
    ${globalStyle.column};
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
    }
    .content {
      position: absolute;
      ${globalStyle.flex};
      ${globalStyle.column};
      background: linear-gradient(
        0deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(0, 0, 0, 1) 0%,
        rgba(255, 255, 255, 0.007440476190476164) 75%
      );
      bottom: 0;
      width: 100%;
      height: 100%;
      p {
        position: absolute;
        display: flex;
        flex-direction: column;
        margin: 0px;
        padding: 10px 18px;
        bottom: 0;
        span {
          display: flex;
          text-transform: uppercase;
          line-height: 16px;
          &:nth-child(1) {
            text-transform: uppercase;
            color: #ffffff;
            font-weight: 400;
            font-size: 12px;
          }
          &:nth-child(2) {
            text-transform: uppercase;
            color: #ffffff;
            font-weight: 300;
            font-size: 11px;
          }
        }
      }
    }
  }
  .bottomBox {
    ${globalStyle.flex};
    ${globalStyle.row};
    padding: 13px 12px;
    align-items: flex-start;
    & > div {
      ${globalStyle.flex};
      ${globalStyle.column};
    }
    .icon {
      width: 40px;
      height: 40px;
      ${globalStyle.flex};
      margin-right: 8px;
      border-radius: 60px;
      align-items: center;
      justify-content: center;
      background-color: ${props =>
        props.color ? `#${props.color}` : '#ffc212'};
      font-weight: bold;
      font-size: 12px;
      line-height: 14px;
      text-transform: uppercase;
      border: solid 1px #dedede;
      color: #ffffff;
    }
    .content {
      ${globalStyle.flex};
      flex: 1;
      p {
        margin: 0px;
        ${globalStyle.flex};
        ${globalStyle.column};
        span {
          ${globalStyle.flex};
          &:nth-child(1) {
            font-weight: 600;
            font-size: 14px;
            line-height: 17px;
            text-transform: uppercase;
            color: #000000;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            max-width: 80px;
            display: block;
            @media (min-width: ${globalStyle.small}) {
              max-width: 180px;
            }
          }
          &:nth-child(2) {
            font-weight: 300;
            font-size: 10px;
            line-height: 12px;
            text-transform: uppercase;
            color: #000000;
          }
        }
      }
    }
  }
`;
