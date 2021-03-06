/* eslint-disable jsx-a11y/media-has-caption */
/**
 *
 * VideoPlayer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import ReactPlayer from 'react-player/lazy';
import { VideoPlayerContainer } from './style';

function VideoPlayer(props) {
  const { data } = props;
  const { coverImage, coverVideo, courseName, duration } = data || {};
  const [first] = courseName ? courseName.split('') : [];
  return (
    <VideoPlayerContainer>
      <div>
        <video width="100%" controls poster={coverImage}>
          <source src={coverVideo} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      </div>
      <div className="playerDesc">
        <div className="box_1">
          <i>{first}</i>
        </div>
        <div className="box_2">
          <p>
            <span className="tex_big">{courseName}</span>
            <span className="tex_small">Course Duration: {duration}</span>
          </p>
        </div>
      </div>
    </VideoPlayerContainer>
  );
}

VideoPlayer.propTypes = {
  data: PropTypes.object,
};

export default VideoPlayer;
