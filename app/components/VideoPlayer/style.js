import styled from 'styled-components';
import globalStyle from 'Global/styles/base';
export const VideoPlayerContainer = styled.div`
  ${globalStyle.flex};
  ${globalStyle.column};
  /* height: 225px; */
  border-radius: 5px;
  @media (min-width: ${globalStyle.small}) {
    border: solid 1px #c1bfbf;
    background-color: #dedede;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.05);
    position: relative;
    height: 360px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 36.46%, rgba(0, 0, 0, 0.74) 82.29%, #000000 100%);
  }
  .playerDesc {
    ${globalStyle.flex};
    ${globalStyle.row};
    background-color: transparent;
    padding: 10px;
    @media (min-width: ${globalStyle.small}) {
      padding: 16px 24px;
      color: #ffffff;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .box_1,
    .box_2 {
      ${globalStyle.flex};
      ${globalStyle.column};
    }
    .box_1 {
      i {
        width: 40px;
        height: 40px;
        border-radius: 100%;
        background: #ffc212;
        font-weight: bold;
        font-size: 12px;
        line-height: 14px;
        text-transform: uppercase;
        color: #ffffff;
        ${globalStyle.flex};
        justify-content: center;
        align-items: center;
        font-style: normal;
      }
    }
    .box_2 {
      padding-left: 10px;
      justify-content: center;
      flex: 1;
      p {
        margin: 0px;
        ${globalStyle.flex};
        ${globalStyle.column};
        span {
          &.tex_big {
            font-weight: bold;
            font-size: 14px;
            line-height: 17px;
            text-transform: uppercase;
            @media (max-width: ${globalStyle.small}) {
              color: #000000;
            }
          }
          &.tex_small {
            font-weight: normal;
            font-size: 10px;
            line-height: 12px;
            text-transform: uppercase;
            color: #727b87;
          }
        }
      }
    }
  }
`;
