import { css } from 'styled-components';
export default {
  input: css`
    border-radius: 4px;
    background-color: #ffffff;
    border: solid 1px #e0e0e0;
    color: #354052;
    width: 100%;
    padding: 13px;
    font-size: 14px;
    &::-webkit-input-placeholder {
      color: rgba(0, 0, 0, 0.34);
    }
    &::-moz-placeholder {
      color: rgba(0, 0, 0, 0.34);
    }
    &:-ms-input-placeholder {
      color: rgba(0, 0, 0, 0.34);
    }
    &:-moz-placeholder {
      color: rgba(0, 0, 0, 0.34);
    }
    &:focus {
      outline: none;
    }
  `,
  relative: css`
    position: relative;
  `,
  absolute: css`
    position: absolute;
  `,
  flex: css`
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
  `,
  flexcenter: css`
    align-items: center;
    justify-content: center;
  `,
  justifyenter: css`
    justify-content: center;
  `,
  aligncenter: css`
    align-items: center;
  `,
  flexstretch: css`
    align-items: stretch;
  `,
  column: css`
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  `,
  row: css`
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
  `,
  // Color
  large: css`1147px`,
  Xlarge: css`1480px`,
  medium: css`960px`,
  small: css`768px`,
  Xsmall: css`410px`,
};
