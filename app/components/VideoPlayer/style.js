import styled from 'styled-components';
import globalStyle from 'Global/styles/base';
export const VideoPlayerContainer = styled.div`
  ${globalStyle.flex};
  ${globalStyle.column};
  height: 360px;
  border-radius: 5px;
  background-color: #dedede;
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.05);
  border: solid 1px #c1bfbf;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 36.46%, rgba(0, 0, 0, 0.74) 82.29%, #000000 100%);
`;
