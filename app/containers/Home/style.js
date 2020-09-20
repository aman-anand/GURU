import styled from 'styled-components';
import globalStyle from '../../common/styles/var';
export const HomeContainer = styled.section`
  ${globalStyle.flex};
  ${globalStyle.column};
  @media (max-width: ${globalStyle.small}) {
    background-color: #f9fafc;
    height: 100vh;
  }
  .container {
    padding: 15px;
    ${globalStyle.flex};
    ${globalStyle.column};
    box-sizing: border-box;
    @media (min-width: ${globalStyle.small}) {
      ${globalStyle.row};
      padding: 10px 0px;
      margin-top: 24px;
    }
    @media (max-width: ${globalStyle.small}) {
      flex: 1;
    }
  }
  .leftBox,
  .rightBox {
    box-sizing: border-box;
    ${globalStyle.flex};
    ${globalStyle.column};
    @media (min-width: ${globalStyle.small}) {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
  .leftBox {
    flex: 1;
    width: 100%;
  }
  .rightBox {
    @media (min-width: ${globalStyle.small}) {
      width: 33%;
    }
  }
  p._sessionBox {
    margin: 0px;
    ${globalStyle.flex};
    ${globalStyle.column};
    span {
      &:nth-child(1) {
        font-weight: bold;
        font-size: 12px;
        line-height: 14px;
        text-transform: uppercase;
        color: #000000;
      }
      &:nth-child(2) {
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        color: #403f3f;
      }
    }
  }
  .attendanceUpdates {
    margin-top: 24px;
    ._sessionBox {
      @media (min-width: ${globalStyle.small}) {
        align-items: center;
      }
    }
  }
`;
