import styled from 'styled-components';
import globalStyle from '../../common/style/var';
export const CoursesContainer = styled.section`
  ${globalStyle.flex};
  ${globalStyle.column};
  align-items: center;
  background-color: #ffffff;
  padding-top: 30px;
  .container {
    ${globalStyle.flex};
    ${globalStyle.column};
    @media (min-width: ${globalStyle.medium}) {
      ${globalStyle.row};
    }
    width: 100%;
    @media (min-width: ${globalStyle.medium}) {
      width: 1024px;
    }
    & > div {
      ${globalStyle.flex};
      ${globalStyle.column};
      @media (max-width: ${globalStyle.medium}) {
        width: 100%;
      }
    }
    .leftWrapper {
      @media (min-width: ${globalStyle.medium}) {
        width: 260px;
        border-right: solid 1px rgba(165 165 165 / 0.3);
        min-height: 500px;
      }
      h2 {
        color: #202c44;
        margin: 10px 0px;
        padding: 0px 16px;
        @media (min-width: ${globalStyle.medium}) {
          margin: 6px 0px 0px 0px;
          padding: 0px;
        }
      }
      ul {
        margin: 30px 0px 0px 0px;
        @media (min-width: ${globalStyle.medium}) {
          margin: 35px 0px 0px 0px;
        }
        padding: 0px;
        list-style: none;
        ${globalStyle.flex};
        ${globalStyle.column};
        li {
          ${globalStyle.flex};
          ${globalStyle.column};
          position: relative;
          @media (max-width: ${globalStyle.medium}) {
            border-bottom: solid 1px rgba(165 165 165 / 0.3);
            padding: 0px 16px;
          }
          div {
            ${globalStyle.flex};
            ${globalStyle.row};
            align-items: center;
            text-decoration: none;
            color: #202c44;
            padding: 16px 0px;
            font-weight: 300;
            cursor: pointer;
            p {
              ${globalStyle.flex};
              margin: 0px;
              ${globalStyle.flex};
              ${globalStyle.column};
              flex: 1;
              span {
                &:nth-child(1) {
                  font-size: 17px;
                  color: #202c44;
                }
                &:nth-child(2) {
                  font-size: 13px;
                  color: rgba(32 44 68 / 0.5);
                }
              }
            }
            i {
              ${globalStyle.flex};
              width: 24px;
              height: 28px;
              border: solid 1px rgba(165 165 165 / 0.3);
              margin-right: 10px;
              &:nth-last-child(1) {
                margin-right: 0px;
              }
              &.arrow {
                border: none;
                height: auto;
                width: auto;
              }
            }
          }
          &.active {
            &::after {
              content: '';
              position: absolute;
              right: 0;
              width: 2px;
              height: 100%;
              background-color: #ed5e50;
            }
            div {
              p {
                span {
                  color: #ed5e50;
                }
              }
              font-weight: 400;
              i {
                border: solid 1px #ed5e50;
              }
            }
          }
        }
      }
    }
    .rightWrapper {
      flex: 1;
      flex-wrap: wrap;
      @media (min-width: ${globalStyle.medium}) {
        ${globalStyle.row};
        padding-left: 100px;
      }
    }
  }
  .orderHistoryContainer {
    ${globalStyle.flex};
    ${globalStyle.column};
    width: 100%;
    align-self: flex-start;
    @media (max-width: ${globalStyle.medium}) {
      padding: 16px;
    }
    & > h4 {
      font-size: 18px;
      color: #202c44;
    }
  }
`;
