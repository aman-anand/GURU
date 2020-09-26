/* eslint-disable camelcase */
/**
 *
 * CetificateBlock
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { CetificateBlockContainer } from './style';

const viewUrl = url => {
  window.open(url, '_blank');
};

function CetificateBlock(props) {
  const { data } = props;
  const { display_certificateDate, certificateUrl, name, color } = data || {};
  return (
    <CetificateBlockContainer color={color}>
      <div className="_leftBox">
        <i className="icon">
          <svg
            width="15"
            height="18"
            viewBox="0 0 15 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.6 18C13.0774 18 13.5352 17.8104 13.8728 17.4728C14.2104 17.1352 14.4 16.6774 14.4 16.2V1.8C14.4 0.801 13.59 0 12.6 0H7.2V6.3L4.95 4.95L2.7 6.3V0H1.8C1.32261 0 0.864773 0.189642 0.527208 0.527208C0.189642 0.864773 0 1.32261 0 1.8V16.2C0 16.6774 0.189642 17.1352 0.527208 17.4728C0.864773 17.8104 1.32261 18 1.8 18H12.6Z"
              fill="white"
            />
          </svg>
        </i>
        <p className="txt">
          <span>{name}</span>
          <span>{display_certificateDate}</span>
        </p>
      </div>
      <div className="_rightBox">
        <Button
          variant="contained"
          color="primary"
          type="button"
          onClick={() => viewUrl(certificateUrl)}
        >
          VIEW
        </Button>
        <Button variant="contained" color="primary" type="button">
          DOWNLOAD
        </Button>
      </div>
    </CetificateBlockContainer>
  );
}

CetificateBlock.propTypes = {
  data: PropTypes.object,
};

export default memo(CetificateBlock);
