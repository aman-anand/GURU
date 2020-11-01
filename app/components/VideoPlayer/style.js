import styled from 'styled-components';
import globalStyle from '../../common/styles/var';
export const VideoPlayerContainer = styled.div`
  ${globalStyle.flex};
  ${globalStyle.column};
  /* height: 225px; */
  border-radius: 5px;
  position: relative;
  @media (min-width: ${globalStyle.small}) {
    border: solid 1px #c1bfbf;
  }
  .playerBox {
    @media (min-width: ${globalStyle.small}) {
      /* max-height: 455px; */
      overflow: hidden;
    }
    img {
      width: 100%;
    }
  }
`;
