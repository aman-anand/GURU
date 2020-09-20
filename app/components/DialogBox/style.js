import styled from 'styled-components';
import globalStyle from '../../common/style/var';
export const DialogBoxContainer = styled.div`
  ${globalStyle.flex};
  ${globalStyle.column};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(32 44 68 / 0.8);
  box-sizing: border-box;
  -webkit-transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -o-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  transition: all 500ms ease;
  transform: translate(0, 100%);
  &.active {
    transform: translate(0, 0);
  }
  .dialogWreapper {
    background-color: #ffffff;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    .heading {
      ${globalStyle.flex};
      ${globalStyle.row};
      align-items: center;
      margin-bottom: 30px;
      h3 {
        flex: 1;
        margin: 10px 0px 0px 0px;
        font-size: 24px;
        font-weight: 300;
      }
      i {
        width: 25px;
        height: 25px;
        display: block;
        border: solid 1px red;
        background-color: #dedede;
      }
    }
  }
`;
