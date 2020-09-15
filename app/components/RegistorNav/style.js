import styled from 'styled-components';
import globalStyle from 'Global/styles/base';
export const RegistorNavContainer = styled.div`
  ${globalStyle.flex};
  ${globalStyle.row};
  background-color: #2e323d;
  & > div {
    ${globalStyle.flex};
    justify-content: center;
    flex: 1;
    color: #ffffff;
    font-weight: bold;
    font-size: 14px;
    padding: 16px;
    cursor: pointer;
    opacity: 0.5;
    &.active {
      background: rgba(250, 250, 250, 0.1);
      opacity: 1;
    }
    a {
      text-decoration: none;
      color: #ffffff;
    }
  }
`;
