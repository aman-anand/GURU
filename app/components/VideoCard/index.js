/**
 *
 * VideoCard
 *
 */

import React, { memo } from 'react';
import videoimg from '../../images/videoimg.png';
import { VideoCardContainer } from './style';

function VideoCard(props) {
  const { dataOBJ } = props || {};
  // eslint-disable-next-line no-unused-vars
  const { name, thumb, _id } = dataOBJ || {};
  return (
    <VideoCardContainer className="VideoCardContainer" bg={thumb || videoimg}>
      <a href={`/videos/${_id}`} className="imageBox" role="button">
        <div className="bottomBox">
          <div className="_lb">
            <p>
              <i>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.99"
                    d="M6.4 11.6V4.4L11.2 8L6.4 11.6ZM8 0C6.94943 0 5.90914 0.206926 4.93853 0.608964C3.96793 1.011 3.08601 1.60028 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.08601 14.3997 3.96793 14.989 4.93853 15.391C5.90914 15.7931 6.94943 16 8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 6.94943 15.7931 5.90914 15.391 4.93853C14.989 3.96793 14.3997 3.08601 13.6569 2.34315C12.914 1.60028 12.0321 1.011 11.0615 0.608964C10.0909 0.206926 9.05058 0 8 0Z"
                    fill="white"
                  />
                </svg>
              </i>
              <span>{name || 'Name'}</span>
            </p>
          </div>
        </div>
      </a>
    </VideoCardContainer>
  );
}

VideoCard.propTypes = {};

export default memo(VideoCard);
