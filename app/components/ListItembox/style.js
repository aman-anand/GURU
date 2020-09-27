import styled from 'styled-components';
import globalStyle from '../../common/styles/var';
export const ListItemboxContainer = styled.div`
  ${globalStyle.flex};
  ${globalStyle.row};
  flex: 1;
  cursor: pointer;
  border-bottom: 0.5px solid #ced4db;
  padding: 7.5px 0px;
  & > div {
    ${globalStyle.flex};
    ${globalStyle.column};
  }
  .iconbox {
    background-color: #da3a33;
    width: 48px;
    height: 32px;
    margin-right: 10px;
    justify-content: center;
    align-items: center;
    &.video {
      background-color: #da3a33;
    }
    &.pdf {
      background-color: #c5c5c5;
    }
    &.blog {
      background-color: #868282;
    }
  }
  .listContent {
    flex: 1;
    align-items: flex-start;
    justify-content: center;
    span {
      &:nth-child(1) {
        font-weight: 500;
        font-size: 12px;
        color: #000000;
        text-transform: uppercase;
      }
      &:nth-child(2) {
        font-weight: normal;
        font-size: 10px;
        line-height: 126.9%;
        color: #727b87;
      }
    }
  }
  .listStatus {
    align-items: center;
    justify-content: center;
  }
`;
