import styled from 'styled-components';
import globalStyle from 'Global/styles/base';
export const BredcrumbContainer = styled.div`
  ${globalStyle.flex};
  ${globalStyle.column};
  margin-bottom: 12px;
  ._bWrapper {
    ${globalStyle.flex};
    ${globalStyle.row};
    span {
      ${globalStyle.flex};
      font-weight: normal;
      font-size: 12px;
      line-height: 14px;
      text-transform: uppercase;
      &:nth-child(even) {
        margin-left: 3px;
        margin-right: 3px;
      }
      &:nth-last-child(1) {
        font-weight: 600;
      }
      a {
        text-decoration: none;
        color: #000000;
      }
    }
  }
`;
