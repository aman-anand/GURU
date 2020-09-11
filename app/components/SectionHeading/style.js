import styled from 'styled-components';
import globalStyle from 'Global/styles/base';
export const SectionHeadingContainer = styled.div`
  ${globalStyle.flex};
  ${globalStyle.column};
  margin-bottom: 2px;
  &.marginTop {
    margin-top: 10px;
  }
  h6 {
    margin: 0px;
    text-transform: uppercase;
  }
`;
