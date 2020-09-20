import styled from 'styled-components';
import globalStyle from '../../common/styles/var';
export const RegistrationContainer = styled.div`
  ${globalStyle.flex};
  ${globalStyle.column};
  width: 100%;
  @media (min-width: ${globalStyle.small}) {
    max-width: 500px;
    align-items: center;
  }
  ._wrapper {
    margin-top: 20px;
    ${globalStyle.flex};
    ${globalStyle.column};
    align-self: stretch;
  }
  input,
  select {
    ${globalStyle.flex};
    margin-bottom: 12px;
    align-self: stretch;
  }
  button {
    margin-bottom: 12px;
    align-self: stretch;
  }
  .donthavetext {
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    @media (min-width: ${globalStyle.small}) {
      color: #ffffff;
    }
  }
  ._secText {
    @media (min-width: ${globalStyle.small}) {
      color: #ffffff;
    }
  }
  ._hText,
  ._decText {
    @media (min-width: ${globalStyle.small}) {
      color: #ffffff;
    }
  }
  ._hText {
    margin: 0px;
    line-height: 17px;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    @media (min-width: ${globalStyle.small}) {
      font-size: 18px;
    }
  }
  ._decText {
    font-size: 14px;
    font-weight: 300;
    @media (min-width: ${globalStyle.small}) {
      font-size: 18px;
    }
  }
  ._twoComumnWrapper {
    box-sizing: border-box;
    ${globalStyle.flex};
    ${globalStyle.row};
    margin: 0px -6px 12px -6px;
    input,
    select {
      margin: 0px 6px;
      width: 50%;
    }
  }
  ._twoRowWrapper {
    box-sizing: border-box;
    ${globalStyle.flex};
    ${globalStyle.column};
    margin: 0px -10px 0px -10px;
    input {
      margin: 0px 10px 12px 10px;
    }
  }

  .genderWrapper {
    ${globalStyle.flex};
    ${globalStyle.row};
    align-items: center;
    margin-bottom: 12px;
    span {
      ${globalStyle.flex};
      @media (min-width: ${globalStyle.small}) {
        color: #ffffff;
      }
    }
    ._genderBox {
      ${globalStyle.flex};
      ${globalStyle.row};
      flex: 1;
      margin-left: 25px;
      margin-right: -7.5px;
      label {
        ${globalStyle.flex};
        flex: 1;
        margin-left: 7.5px;
        margin-right: 7.5px;
        cursor: pointer;
        span {
          ${globalStyle.flex};
          color: #727b87;
          background: #f7f7f7;
          border-radius: 5px;
          padding: 10px;
          box-sizing: border-box;
          justify-content: center;
          flex: 1;
          @media (min-width: ${globalStyle.small}) {
            background: rgba(255, 255, 255, 0.1);
          }
        }
        input {
          display: none;
          &:checked {
            & + span {
              padding: 10px;
              background-color: #2e323d;
              color: #ffffff;
              @media (min-width: ${globalStyle.small}) {
                background: #0976be;
              }
            }
          }
        }
      }
    }
  }
`;
