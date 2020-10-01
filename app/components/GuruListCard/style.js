import styled from 'styled-components';
import globalStyle from '../../common/styles/var';
export const GuruListCardContainer = styled.section`
  ${globalStyle.flex};
  ${globalStyle.row};
  width: 100%;
  margin-top: 15px;
  cursor: pointer;
  & > div {
    ${globalStyle.flex};
  }
  .guru_img {
    width: 50px;
    height: 50px;
    background-color: #ededed;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
    }
  }
  .guru_content {
    flex: 1;
    ${globalStyle.column};
    margin-left: 15px;
    justify-content: center;
    span {
      font-size: 14px;
      &:nth-child(2) {
        color: #acb5bf;
      }
    }
  }
  .guru_chart {
    i {
      width: 40px;
      height: 40px;
      ${globalStyle.flex};
      align-items: center;
      justify-content: center;
    }
  }
`;
