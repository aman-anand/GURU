import styled from 'styled-components';
import globalStyle from 'Global/styles/base';
export const FooterContainer = styled.footer`
  ${globalStyle.flex};
  ${globalStyle.row};
  flex: 1;
  position: fixed;
  background: #2e323d;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  padding: 15px;
  z-index: 9;
`;
