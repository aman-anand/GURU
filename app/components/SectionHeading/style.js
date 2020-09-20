import styled from 'styled-components';
import globalStyle from '../../common/styles/var';
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
