/**
 *
 * VideoPlayer
 *
 */

import React, { memo } from 'react';
import ModalVideo from 'react-modal-video';
import PropTypes from 'prop-types';
import { VideoPlayerContainer } from './style';

export class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.setVideoOpen = this.setVideoOpen.bind(this);
  }

  setVideoOpen = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  };

  // const [isOpen, setVideoOpen] = useState(false);

  render() {
    const { data } = this.props;
    const { isOpen } = this.state;
    const { coverImage, courseName, duration, youtubeId } = data || {};
    const [first] = courseName ? courseName.split('') : [];
    return (
      <VideoPlayerContainer>
        <div className="playerBox">
          <img
            src={coverImage}
            alt=""
            title=""
            role="presentation"
            onClick={() => this.setVideoOpen()}
          />
          {youtubeId ? (
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId={youtubeId}
              onClose={() => this.setVideoOpen()}
            />
          ) : null}
        </div>
        <div className="playerDesc">
          <div className="box_1">
            <i>{first}</i>
          </div>
          <div className="box_2">
            <p>
              <span className="tex_big">{courseName}</span>
              <span className="tex_small">Duration: {duration}</span>
            </p>
          </div>
        </div>
      </VideoPlayerContainer>
    );
  }
}

VideoPlayer.propTypes = {
  data: PropTypes.object,
};

export default memo(VideoPlayer);
