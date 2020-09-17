import styled from 'styled-components';
import globalStyle from 'Global/styles/base';
export const AppContainer = styled.section`
  ${globalStyle.flex};
  ${globalStyle.column};
  height: 100%;
  @media (max-width: ${globalStyle.small}) {
    height: 100vh;
  }
`;
