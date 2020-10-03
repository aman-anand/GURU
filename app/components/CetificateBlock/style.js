import styled from 'styled-components';
import globalStyle from '../../common/styles/var';
export const CetificateBlockContainer = styled.section`
  ${globalStyle.flex};
  ${globalStyle.column};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  background: #ffffff;
  padding: 15px;
  margin-top: 15px;
  @media (min-width: ${globalStyle.small}) {
    ${globalStyle.row};
    align-items: center;
    padding: 20px;
  }
  @media (max-width: ${globalStyle.small}) {
    background: #e4e4e4;
  }
  & > div {
    ${globalStyle.flex};
    ${globalStyle.row};
    align-items: center;
  }
  ._leftBox {
    @media (max-width: ${globalStyle.small}) {
      margin-bottom: 10px;
    }
    flex: 1;
    .icon {
      ${globalStyle.flex};
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: ${props => (props.color ? `#${props.color}` : '#da3a33')};
      margin-right: 15px;
      align-items: center;
      justify-content: center;
      border: solid 1px #ededed;
    }
    .txt {
      ${globalStyle.flex};
      ${globalStyle.column};
      margin: 0px;
      span {
        &:nth-child(1) {
          font-weight: 500;
          font-size: 14px;
          line-height: 17px;
          text-transform: uppercase;
          color: #403f3f;
        }
        &:nth-child(2) {
          font-weight: normal;
          font-size: 12px;
          line-height: 14px;
          text-transform: uppercase;
          color: #727b87;
        }
      }
    }
  }
  ._rightBox {
    @media (max-width: ${globalStyle.small}) {
      margin: 0px -7.5px;
    }
    button {
      ${globalStyle.flex};
      padding: 10px !important;
      margin: 0px 7.5px;
      @media (max-width: ${globalStyle.small}) {
        flex: 1;
      }
      @media (min-width: ${globalStyle.small}) {
        width: 145px;
      }
    }
  }
  .pdfPreview {
    border: solid 1px red;
  }
`;
