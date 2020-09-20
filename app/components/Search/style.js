import styled from 'styled-components';
import globalStyle from '../../common/styles/var';
export const SearchContainer = styled.div`
  ${globalStyle.flex};
  ${globalStyle.column};
  background: #f9fafc;
  border: 1px solid #ced4db;
  box-sizing: border-box;
  border-radius: 5px;
  position: relative;
  margin-bottom: 16px;
  span {
    ${globalStyle.flex};
    position: absolute;
    left: 10px;
    top: 0;
    bottom: 0;
    width: 20px;
    height: 20px;
    margin: auto;
    justify-content: center;
    align-items: center;
  }
  input {
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-transform: capitalize;
    color: #727b87;
    padding-left: 40px;
  }
`;
