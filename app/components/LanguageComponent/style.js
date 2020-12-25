import styled from 'styled-components';
import globalStyle from '../../common/styles/var';
import right from '../../images/right.png';

export const LanguageComponentContainer = styled.div`
    ${globalStyle.flex};
    ${globalStyle.column};
    label {
    ${globalStyle.flex};
    ${globalStyle.column};
    margin-bottom: 15px;
    width: 100%;
    @media (min-width: ${globalStyle.small}) {
      width: 350px;
    }
    input {
      display: none;
      &:checked {
        & + div {
            border: 4px solid #58b368;
            box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.05);
              span {
                &.icon {
                  background-image: url('${right}');
                  background-position: center center;
                  background-repeat: no-repeat;
                  background-color: #58b368;
                }
              }
            }
          }
    }
    .radioBox {
        ${globalStyle.flex};
        ${globalStyle.row};
        background-color: #ffffff;
        box-sizing: border-box;
        border-radius: 5px;
        cursor: pointer;
        padding: 20px 30px;
        align-items: center;
        justify-content: center;
        border: 1px solid #ced4db;
        span {
        ${globalStyle.flex};
        &.title {
            flex: 1;
            font-style: normal;
            font-weight: bold;
            font-size: 18px;
            line-height: 21px;
            color: #000000;
            text-transform: uppercase;
        }
        &.icon {
            width: 24px;
            height: 24px;
            border-radius: 50px;
            background: #ced4db;
        }
        }
    }
    }
`;
