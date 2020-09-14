/**
 * Created by sumantaparida on 9/11/17.
 */
import styled, { keyframes } from 'styled-components';
import globalStyle from '../../common/styles/base';
const spin = keyframes`
0% {
  -webkit-transform: rotate(0deg);
  tranform: rotate(0deg);
}
100% {
  -webkit-transform: rotate(360deg);
  tranform: rotate(360deg);
}
`;
const LoaderContainer = styled.div`
  ${globalStyle.absolute};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99999;
  display: none;
  background-color: rgb(51, 51, 51);
  opacity: 0.5;
  height: 100%;
  width: 100%;
  .loader {
    ${globalStyle.absolute};
    width: 50px;
    height: 50px;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
  }
  .loader-quart {
    border-radius: 50px;
    border: 6px solid rgba(255, 255, 255, 1);
    &::after {
      content: '';
      ${globalStyle.absolute};
      top: -6px;
      right: -6px;
      bottom: -6px;
      left: -6px;
      border-radius: 50px;
      border: 6px solid transparent;
      border-top-color: ${globalStyle.green2}5;
      -webkit-animation: ${spin} 1s linear infinite;
      animation: ${spin} 1s linear infinite;
    }
  }
`;
export { LoaderContainer };
