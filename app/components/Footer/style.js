import styled from 'styled-components';
import globalStyle from '../../common/styles/var';
export const FooterContainer = styled.footer`
  ${globalStyle.flex};
  ${globalStyle.column};
  background-color: #2e323d;
  ul {
    margin: 0px;
    padding: 10px;
    ${globalStyle.flex};
    ${globalStyle.row};
    list-style: none;
    justify-content: center;
    li {
      ${globalStyle.flex};
      ${globalStyle.row};
      margin: 0px 5px;
      a {
        ${globalStyle.flex};
        ${globalStyle.row};
        text-decoration: none;
        color: #ffffff;
        padding: 7px;
        justify-content: center;
        align-items: center;
        .icon {
          ${globalStyle.flex};
          width: 18px;
        }
        span {
          ${globalStyle.flex};
          font-weight: 400;
          font-size: 13px;
          text-transform: uppercase;
          color: #ffffff;
          display: none;
        }
        &.active {
          background: rgba(255, 255, 255, 9%);
          border-radius: 5px;
          padding: 7px 15px;
          .icon {
            margin-right: 5px;
          }
          span {
            display: block;
          }
        }
      }
    }
  }
`;
