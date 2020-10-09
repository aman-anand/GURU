import styled from 'styled-components';
import globalStyle from '../../common/styles/var';
export const FeedbackContainer = styled.section`
  ${globalStyle.flex}
  ${globalStyle.column}
  .wrapper {
    ${globalStyle.flex}
    ${globalStyle.column}
    align-items: center;
    background-color: #2e323d;
    padding: 20px;
  }
  .container {
    ${globalStyle.flex}
    ${globalStyle.column}
    @media (min-width: 1142px) {
      width: 700px;
    }
  }
  .cData {
    i {
      ${globalStyle.flex}
      margin-bottom: 10px;
    }
    h4 {
      ${globalStyle.flex}
      font-weight: bold;
      font-size: 18px;
      line-height: 21px;
      text-transform: uppercase;
      color: #ffffff;
      margin: 0px;
    }
    p {
      ${globalStyle.flex}
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      text-transform: capitalize;
      color: #ffffff;
    }
  }

  .feedbackform {
    ${globalStyle.flex};
    ${globalStyle.column}
    @media (max-width: ${globalStyle.small}) {
      padding: 0px 15px 15px 15px;
    }
    textarea {
      padding: 10px;
      height: 150px;
      margin: 15px 0px;
      &:focus {
        outline: 0;
      }
    }
  }
`;
