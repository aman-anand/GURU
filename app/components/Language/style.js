import styled from 'styled-components';
import globalStyle from '../../common/styles/var';

export const LanguageContainer = styled.div`
  ${globalStyle.flex};
  ${globalStyle.column};
  margin-right: 10px;
  .icon {
    width: 21px;
    height: 21px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
  }
`;
