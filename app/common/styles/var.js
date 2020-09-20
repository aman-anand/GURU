import { css } from 'styled-components';
export default {
  input: css``,
  relative: css`
    position: relative;
  `,
  absolute: css`
    position: absolute;
  `,
  button: css``,
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
  columnCenterStretch: css`
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
  `,
  columnCenterStart: css`
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  `,
  columnCenterEnd: css`
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
  `,
  columnCenterCenter: css`
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  rowCenterStretch: css`
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
  `,
  rowCenterStart: css`
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  `,
  rowCenterEnd: css`
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
  `,
  rowCenterCenter: css`
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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
  stretch: css`
    align-self: stretch;
  `,
  flexstart: css`
    justify-content: flex-start;
  `,
  flexend: css`
    justify-content: flex-end;
  `,
  // Animation
  transition: css`
    -webkit-transition: all 1s ease-in-out;
    -moz-transition: all 1s ease-in-out;
    -o-transition: all 1s ease-in-out;
    transition: all 1s ease-in-out;
  `,
  // test Ecllips
  ellipsis: css`
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  `,
  // Color
  blue: css`#236df1`,
  large: css`1147px`,
  Xlarge: css`1480px`,
  medium: css`960px`,
  small: css`768px`,
  Xsmall: css`410px`,
};
