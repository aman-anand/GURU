import styled from 'styled-components';
import globalStyle from '../../common/styles/var';
export const StapesContainer = styled.div`
  background: #ffffff;
  border-radius: 5px;
  ${globalStyle.flex};
  ${globalStyle.row};
  padding: 14px 40px;
  .stepsBox {
    ${globalStyle.flex};
    ${globalStyle.row};
    flex: 1;
    align-items: center;
    .icon {
      border: solid 1px #dedede;
      ${globalStyle.flex};
      ${globalStyle.column};
      align-items: center;
      width: 20px;
      height: 20px;
      border-radius: 60px;
      margin-right: 10px;
    }
    span {
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
    }
  }
`;
