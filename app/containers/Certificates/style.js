import styled from 'styled-components';
import globalStyle from '../../common/styles/var';
export const CertificatesContainer = styled.section`
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

  .emptyWrapper {
    ${globalStyle.flex};
    ${globalStyle.column};
    align-items: center;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 15px;
    i {
      width: 200px;
      img {
        width: 100%;
      }
    }
    .paraMsg {
      max-width: 350px;
      text-align: center;
    }
  }
`;
