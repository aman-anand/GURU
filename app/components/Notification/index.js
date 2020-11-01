/**
 *
 * Notification
 *
 */

import React, { memo, useState } from 'react';
import withSizes from 'react-sizes';
// import PropTypes from 'prop-types';
import { NOTIFICATION_API } from '../../dataService/Home';
import { languageString } from '../../services/CommonSetterGetter';
import { NotificationContainer } from './style';

function Notification(props) {
  const { isMobile } = props || {};
  const [notify, setNotify] = useState(false);
  const [notifydata, setNotifyData] = useState([]);
  const openNotification = () => {
    setNotify(!notify);
    if (!notify) {
      NOTIFICATION_API().then(res => {
        const { data: resData } = res || {};
        const { data } = resData || {};
        setNotifyData(data);
      });
    }
  };

  // useEffect(() => {
  //   console.log('notifydata', notifydata);
  // });

  return (
    <NotificationContainer>
      <div
        className="chart notification"
        id="notification"
        role="presentation"
        onClick={() => openNotification()}
      >
        <i>
          <svg
            width="17"
            height="20"
            viewBox="0 0 17 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 15H4V8.5C4 6 6 4 8.5 4C11 4 13 6 13 8.5V15ZM15 14V8.5C15 5.43 12.86 2.86 10 2.18V1.5C10 1.10218 9.84196 0.720644 9.56066 0.43934C9.27936 0.158035 8.89782 0 8.5 0C8.10218 0 7.72064 0.158035 7.43934 0.43934C7.15804 0.720644 7 1.10218 7 1.5V2.18C4.13 2.86 2 5.43 2 8.5V14L0 16V17H17V16L15 14ZM8.5 20C9.03043 20 9.53914 19.7893 9.91421 19.4142C10.2893 19.0391 10.5 18.5304 10.5 18H6.5C6.5 18.5304 6.71071 19.0391 7.08579 19.4142C7.46086 19.7893 7.96957 20 8.5 20Z"
              fill="#403F3F"
            />
          </svg>
        </i>
      </div>

      {notify ? (
        <div className="notifyWrapper">
          {isMobile ? (
            <div className="modalHeader">
              <div
                className="close"
                onClick={() => openNotification()}
                role="presentation"
              >
                <i>
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.41003 1.42L2.83003 6L7.41003 10.59L6.00003 12L3.38077e-05 6L6.00003 1.23266e-07L7.41003 1.42Z"
                      fill="#403F3F"
                    />
                  </svg>
                </i>
              </div>
              <div className="title">{languageString('txt_notification')}</div>
            </div>
          ) : null}
          {notifydata && notifydata.length ? (
            notifydata.map(() => (
              <div className="notifyBox">
                <div className="lNot">
                  <svg
                    width="20"
                    height="14"
                    viewBox="0 0 20 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 10L13.19 7L8 4V10ZM19.56 2.17C19.69 2.64 19.78 3.27 19.84 4.07C19.91 4.87 19.94 5.56 19.94 6.16L20 7C20 9.19 19.84 10.8 19.56 11.83C19.31 12.73 18.73 13.31 17.83 13.56C17.36 13.69 16.5 13.78 15.18 13.84C13.88 13.91 12.69 13.94 11.59 13.94L10 14C5.81 14 3.2 13.84 2.17 13.56C1.27 13.31 0.69 12.73 0.44 11.83C0.31 11.36 0.22 10.73 0.16 9.93C0.0900001 9.13 0.0599999 8.44 0.0599999 7.84L0 7C0 4.81 0.16 3.2 0.44 2.17C0.69 1.27 1.27 0.69 2.17 0.44C2.64 0.31 3.5 0.22 4.82 0.16C6.12 0.0899998 7.31 0.0599999 8.41 0.0599999L10 0C14.19 0 16.8 0.16 17.83 0.44C18.73 0.69 19.31 1.27 19.56 2.17Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="rNot">
                  <p>
                    <span>
                      New courses are added for insurance, investments and
                      finance.{' '}
                    </span>
                    <span>START STUDYING</span>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="noDataMsg">
              {languageString('no_notifications_msg')}
            </div>
          )}
        </div>
      ) : null}
    </NotificationContainer>
  );
}

Notification.propTypes = {};
const mapSizesToProps = ({ width }) => ({
  isMobile: width < 768,
});

export default memo(withSizes(mapSizesToProps)(Notification));
