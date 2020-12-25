import styled from 'styled-components';
import globalStyle from '../../common/styles/var';

export const ResultContainer = styled.div`
  ${globalStyle.flex};
  ${globalStyle.column};
  width: 100%;
  background-color: ${props => (props.green ? `#58B368` : '#ffffff')};
  align-self: center;
  @media (min-width: 1142px) {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    width: 1143px;
    margin-top: 24px;
    min-height: 500px;
    padding: 0px 50px;
  }
  @media (max-width: ${globalStyle.small}) {
    position: absolute;
    z-index: 100;
    height: 100%;
  }
  .TH {
    ${globalStyle.flex};
    color: ${props => (props.green ? `#ffffff` : '#403f3f')};
    padding: 20px 0px;
    align-items: center;
    justify-content: center;
    @media (min-width: ${globalStyle.small}) {
      border-bottom: 0.5px solid
        ${props => (props.green ? `#ffffff` : '#727b87')};
    }
    @media (max-width: ${globalStyle.small}) {
      padding: 20px;
    }
    span {
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 17px;
      ${globalStyle.flex};
    }
    .text {
      flex: 1;
      justify-content: center;
      text-transform: uppercase;
    }
    .close {
      display: none;
      @media (max-width: ${globalStyle.small}) {
        display: block;
      }
    }
  }
  .BC {
    ${globalStyle.flex};
    flex: 1;
    padding-top: 40px;
    justify-content: center;
    @media (max-width: ${globalStyle.small}) {
      background-color: ${props => (props.green ? `#58B368` : '#f7f7f7')};
    }
    .BC_content {
      ${globalStyle.flex};
      ${globalStyle.column};
      align-items: center;
      @media (min-width: ${globalStyle.small}) {
        max-width: 335px;
      }
      @media (max-width: ${globalStyle.small}) {
        padding: 0px 20px;
      }
      .shape {
        margin-bottom: 20px;
      }
      h4 {
        margin: 0px;
        color: ${props => (props.green ? `#ffffff` : '#000000')};
      }
      p {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        color: ${props => (props.green ? `#ffffff` : '#000000')};
      }
    }
    .tryAgainButton {
      ${globalStyle.flex};
      ${globalStyle.row};
      align-items: center;
      width: 100%;
      @media (min-width: ${globalStyle.small}) {
        min-width: 330px;
      }
      i {
        margin-right: 7.5px;
      }
    }
  }
  .closeText {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: ${props => (props.green ? `#ffffff` : '#000000')};
    margin-top: 16px;
    a {
      text-decoration: none;
      color: ${props => (props.green ? `#ffffff` : '#000000')};
    }
  }
`;
