import { css } from 'styled-components';
import globalStyle from '../var';
export const GlobalSkeleton = () => css`
  .contCardSkeleton {
    width: 100%;
    ${globalStyle.flex};
    ${globalStyle.column};
    flex: 1;
    padding: 15px 20px;
    border-radius: 4px !important;
    height: 85px;
    .CardTitle {
      width: 100%;
      height: 14px;
      margin-bottom: 15px;
      ${globalStyle.boxLoaderTwo};
      @media (min-width: ${globalStyle.small}) {
        width: 150px;
      }
    }
    .ExtraEvents {
      width: 40px;
      height: 24px;
      ${globalStyle.boxLoaderTwo};
    }
  }
  .filterCardSkeleton {
    ${globalStyle.flex};
    ${globalStyle.row};
    .filterBox1 {
      width: 45px;
      height: 15px;
      margin-right: 7.5px;
      ${globalStyle.boxLoaderOne};
    }
    .filterBox2 {
      width: 206px;
      height: 15px;
      ${globalStyle.boxLoaderOne};
    }
  }
  .downloadAppCardSkeleton {
    ${globalStyle.flex};
    ${globalStyle.row};
    padding: 15px;
    margin-bottom: 0px;
    border-radius: 4px !important;
    .dSkeletonLeft {
      ${globalStyle.flex};
      ${globalStyle.column};
      order: 1;
      flex: 1;
      .box1 {
        width: 70px;
        height: 70px;
        margin-bottom: 21px;
        ${globalStyle.boxLoaderTwo};
      }
      .box2 {
        width: 180px;
        height: 15px;
        margin-bottom: 8px;
        ${globalStyle.boxLoaderTwo};
      }
      .box3 {
        width: 120px;
        height: 15px;
        margin-bottom: 8px;
        ${globalStyle.boxLoaderTwo};
      }
      .box4 {
        width: 60px;
        height: 15px;
        ${globalStyle.boxLoaderTwo};
      }
    }
    .dSkeletonRight {
      ${globalStyle.flex};
      ${globalStyle.column};
      padding-left: 15px;
      order: 2;
      .box1 {
        width: 50px;
        height: 15px;
        margin-bottom: 21px;
        ${globalStyle.boxLoaderTwo};
      }
    }
  }
  .weekSkeleton,
  .monthSkeleton {
    ${globalStyle.boxLoaderTwo};
    width: 50px;
    height: 15px;
  }
  .leadSkeleton {
    padding: 10px;
    ${globalStyle.flex};
    ${globalStyle.row};
    height: 60px;
    margin-bottom: 4px;
    .leadSkeletonLeft {
      ${globalStyle.flex};
      ${globalStyle.row};
      ${globalStyle.aligncenter};
      order: 1;
      flex: 1;
      .box1 {
        width: 40px;
        height: 40px;
        ${globalStyle.boxLoaderTwo};
        margin-right: 8px;
        border-radius: 100px;
      }
      .box2 {
        width: 100px;
        height: 10px;
        ${globalStyle.boxLoaderTwo};
      }
    }
    .leadSkeletonRight {
      ${globalStyle.flex};
      ${globalStyle.column};
      ${globalStyle.aligncenter};
      ${globalStyle.justifyenter};
      order: 2;
      .box1 {
        width: 50px;
        height: 20px;
        ${globalStyle.boxLoaderTwo};
      }
    }
  }
  .contentCardSkeleton {
    ${globalStyle.flex};
    flex-direction: row !important;
    padding: 15px;
    margin-bottom: 0px;
    border-radius: 4px !important;
    .dSkeletonLeft {
      ${globalStyle.flex};
      ${globalStyle.column};
      order: 1;
      .box1 {
        width: 100px;
        height: 100px;
        ${globalStyle.boxLoaderTwo};
      }
    }
    .dSkeletonRight {
      ${globalStyle.flex};
      ${globalStyle.column};
      padding-left: 15px;
      order: 2;
      flex: 60%;
      .box1 {
        width: 112px;
        height: 15px;
        ${globalStyle.boxLoaderTwo};
        margin-bottom: 9px;
      }
      .box {
        ${globalStyle.relative};
        width: 100%;
        height: 15px;
        margin-bottom: 26px;
        .bixBox {
          width: 140px;
          ${globalStyle.boxLoaderTwo};
          height: 15px;
        }
        .bixBoxRight {
          ${globalStyle.absolute};
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          ${globalStyle.boxLoaderTwo};
          width: 15px;
        }
      }
      .box2 {
        width: 105px;
        height: 35px;
        ${globalStyle.boxLoaderTwo};
      }
    }
  }

  .skeletonSubHeader {
    height: 10px;
    width: 130px;
    margin-bottom: 21px;
    ${globalStyle.boxLoaderTwo};
  }
  .SkeletonCreatQuoteContainer {
    ${globalStyle.flex};
    ${globalStyle.column};
    @media (min-width: ${globalStyle.small}) {
      ${globalStyle.row};
    }
    .paper {
      ${globalStyle.flex};
      ${globalStyle.column};
      color: ${globalStyle.gray4};
      border-radius: 4px;
      color: ${globalStyle.gray4};
      font-weight: 400;
      font-size: 14px;
      padding: 15px;
      ${globalStyle.aligncenter};
      margin-bottom: 8px;
      ${globalStyle.relative};
      @media (min-width: ${globalStyle.small}) {
        cursor: pointer;
      }
    }
    .AccordianTab {
      flex: 45%;
      order: 1;
      .paper {
        ${globalStyle.row};
        min-height: 54px;
        @media (min-width: ${globalStyle.small}) {
          opacity: 0.6;
        }
        &.open {
          background-color: ${globalStyle.white};
          opacity: 1;
          @media (min-width: ${globalStyle.small}) {
            &::after {
              content: '';
              ${globalStyle.absolute};
              width: 15px;
              height: 100%;
              right: -9px;
              background-color: ${globalStyle.white};
              top: 0;
              z-index: 9;
            }
          }
        }
        .box {
          ${globalStyle.flex};
          .box1 {
            height: 10px;
            ${globalStyle.boxLoaderTwo};
          }
          &:nth-child(1) {
            order: 1;
            .box1 {
              width: 22px;
            }
          }
          &:nth-child(2) {
            order: 2;
            flex: 1;
            padding-left: 7px;
            .box1 {
              width: 142px;
            }
          }
          &:nth-child(3) {
            order: 3;
            .box1 {
              width: 10px;
            }
          }
        }
      }
    }
    .AccordianTabData {
      ${globalStyle.flex};
      flex: 55%;
      order: 2;
      padding-left: 8px;
      .paper {
        @media (min-width: ${globalStyle.small}) {
          padding: 30px 50px;
        }
        @media (max-width: ${globalStyle.small}) {
          box-shadow: none;
          padding: 15px 0px 0px 0px;
        }
        flex: 1;
        border-radius: 4px;
        ${globalStyle.flex};
        ${globalStyle.flexcenter};
        align-items: flex-start;
        ${globalStyle.column};
        ${globalStyle.stretch};
        .box {
          ${globalStyle.boxLoaderTwo};
          &:nth-child(1) {
            width: 192px;
            height: 10px;
            margin-bottom: 25px;
          }
          &:nth-child(2),
          &:nth-child(3),
          &:nth-child(4) {
            width: 100%;
            height: 14px;
            margin-bottom: 14px;
          }
        }
      }
    }
  }
`;
