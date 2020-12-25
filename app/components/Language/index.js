/**
 *
 * Language
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import withSizes from 'react-sizes';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';
import { languageString } from '../../services/CommonSetterGetter';
import { LanguageContainer } from './style';
function Language() {
  const [open, setOpen] = useState(false);
  return (
    <LanguageContainer>
      <div className="icon" onClick={() => setOpen(true)} role="presentation">
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.87 8.7L0 5.484H1.074V0H10.742V1.518H2.53V5.484H3.604L1.87 8.7ZM13.016 7.476H11.27L14.5 0H15.794L18.994 7.484H17.226L16.56 5.84H13.66L13.016 7.476ZM14.216 4.44H16.016L15.112 2.086L14.216 4.44ZM4.5 12.1H5.408V14.566C5.19429 14.6739 4.95732 14.7274 4.718 14.722C4.45121 14.7176 4.19061 14.6409 3.964 14.5C3.8595 14.4091 3.74392 14.3318 3.62 14.27C3.82377 14.0737 3.98407 13.8368 4.09052 13.5746C4.19698 13.3124 4.24722 13.0308 4.238 12.748C4.238 11.49 3.438 10.646 2.238 10.646C1.87672 10.6407 1.52038 10.7303 1.20454 10.9058C0.888695 11.0812 0.62439 11.3365 0.438 11.646L0.382 11.74L1.358 12.83L1.456 12.642C1.51658 12.4931 1.62001 12.3655 1.75317 12.2754C1.88633 12.1853 2.04323 12.1368 2.204 12.136C2.59 12.136 2.832 12.42 2.832 12.876C2.832 13.206 2.728 13.76 2.032 13.76H1.548V15.248H2.244C2.83 15.248 3.126 15.512 3.126 16.034C3.126 16.462 2.91 16.918 2.306 16.918C1.61 16.918 1.23 16.318 1.13 16.118L1.03 15.934L0 17.1L0.062 17.194C0.301939 17.5698 0.632832 17.879 1.02404 18.093C1.41524 18.307 1.85411 18.4187 2.3 18.418C3.612 18.418 4.534 17.456 4.566 16.068C4.84021 16.1628 5.13688 16.1711 5.416 16.092V19H6.89V12.1H8.3V19H9.774V12.1H10.906V10.7H4.5V12.1ZM15.394 12.86H16.468V17.3H11.604V19H17.924V12.86H19L17.128 9.246L15.394 12.86Z"
            fill="#403F3F"
          />
        </svg>
      </div>
      {/* NOTE: Exam responce */}
      <Dialog open={open}>
        <DialogContent>
          <DialogContentText className="logoutWrapp">
            <span>{languageString('txt_change_language_message')}</span>
            <Button
              href="/setting"
              variant="contained"
              color="primary"
              className="goToSettingButton"
            >
              Go to Settings
            </Button>
            <Button onClick={() => setOpen(false)}>CANCEL</Button>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </LanguageContainer>
  );
}

Language.propTypes = {
  // isMobile: PropTypes.bool,
};
const mapSizesToProps = ({ width }) => ({
  isMobile: width < 768,
});

export default memo(withSizes(mapSizesToProps)(Language));
