import styled from 'styled-components';
import globalStyle from 'Global/styles/base';
export const UpcommingSessionContainer = styled.div`
  ${globalStyle.flex};
  ${globalStyle.row};
  ._leftUpcomming,
  ._rightUpcomming {
    ${globalStyle.flex};
    align-self: center;
  }
  ._leftUpcomming {
    flex: 1;
  }
  ._rightUpcomming {
    ${globalStyle.flex};
    ${globalStyle.column};
    ._wrapButton {
      ${globalStyle.flex};
      ${globalStyle.row};
      span {
        ${globalStyle.flex};
        ${globalStyle.row};
        background-color: #58b368;
        border-radius: 5px;
        color: #ffffff;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        text-transform: uppercase;
        padding: 10px 16px;
        align-items: center;
        margin: 0px 7.5px;
        &:nth-child(1) {
          i {
            margin-right: 7.5px;
          }
        }
        &:nth-child(2) {
          i {
            margin-left: 7.5px;
          }
        }
        i {
          ${globalStyle.flex};
          width: 9px;
          height: 12px;
        }
      }
    }
    .seeAll {
      font-weight: normal;
      font-size: 12px;
      line-height: 14px;
      text-transform: uppercase;
      color: #403f3f;
      a {
        text-decoration: none;
        color: #403f3f;
      }
    }
  }
`;
