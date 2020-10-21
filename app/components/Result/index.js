/* eslint-disable camelcase */
/**
 *
 * Result
 *
 */

import React, { memo, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { ResultContainer } from './style';
import { language } from '../../services/CommonSetterGetter';
import retryExam from '../../images/retryExam.svg';
import congrats from '../../images/congrats.svg';

function Result(props) {
  const { type, certificate } = props || {};
  const {
    txt_results,
    txt_failed_course_message,
    txt_another_attempt,
    txt_next_section,
    navigation_drawer_close,
    txt_result_congratulations,
    txt_succesfully_completed_course,
  } = language() || {};
  return (
    <ResultContainer>
      <div className="TH">
        <span className="close">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
              fill="#403F3F"
            />
          </svg>
        </span>
        <span className="text">{txt_results.toUpperCase()}</span>
      </div>
      <div className="BC">
        <div className="BC_content">
          {['failed'].includes(type) ? (
            <Fragment>
              <div className="shape">
                <img src={retryExam} alt="" title="" />
              </div>
              <h4>TRY AGAIN</h4>
              <p>{txt_failed_course_message}</p>
              <Button
                variant="contained"
                color="primary"
                type="button"
                className="tryAgainButton"
                onClick={() => window.location.reload()}
              >
                <i>
                  <svg
                    width="21"
                    height="18"
                    viewBox="0 0 21 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 9C0 13.97 4.03 18 9 18C11.39 18 13.68 17.06 15.4 15.4L13.9 13.9C12.63 15.25 10.86 16 9 16C2.76 16 -0.36 8.46 4.05 4.05C8.46 -0.36 16 2.77 16 9H13L17 13H17.1L21 9H18C18 4.03 13.97 0 9 0C4.03 0 0 4.03 0 9Z"
                      fill="white"
                    />
                  </svg>
                </i>
                <span>{txt_another_attempt}</span>
              </Button>
              <span className="closeText">
                <a href="/home">{navigation_drawer_close.toUpperCase()}</a>
              </span>
            </Fragment>
          ) : null}
          {['passed'].includes(type) ? (
            <Fragment>
              <div className="shape">
                <img src={congrats} alt="" title="" />
              </div>
              <h4>CONGRATS</h4>
              <p>{txt_failed_course_message}</p>
              <Button
                variant="contained"
                color="primary"
                type="button"
                className="tryAgainButton"
                onClick={() => window.location.reload()}
              >
                <i>
                  <svg
                    width="21"
                    height="18"
                    viewBox="0 0 21 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 9C0 13.97 4.03 18 9 18C11.39 18 13.68 17.06 15.4 15.4L13.9 13.9C12.63 15.25 10.86 16 9 16C2.76 16 -0.36 8.46 4.05 4.05C8.46 -0.36 16 2.77 16 9H13L17 13H17.1L21 9H18C18 4.03 13.97 0 9 0C4.03 0 0 4.03 0 9Z"
                      fill="white"
                    />
                  </svg>
                </i>
                <span>
                  {['failed'].includes(type) ? txt_another_attempt : null}
                  {['passed'].includes(type) ? txt_next_section : null}
                </span>
              </Button>
              <span className="closeText">
                <a href="/home">{navigation_drawer_close.toUpperCase()}</a>
              </span>
            </Fragment>
          ) : null}
          {['passed'].includes(type) && certificate ? (
            <Fragment>
              <div className="shape">
                <img src={congrats} alt="" title="" />
              </div>
              <h4>{txt_result_congratulations}</h4>
              <p>{txt_succesfully_completed_course}</p>
              <Button
                variant="contained"
                color="primary"
                type="button"
                className="tryAgainButton"
                onClick={() => window.location.reload()}
              >
                <i>
                  <svg
                    width="21"
                    height="18"
                    viewBox="0 0 21 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 9C0 13.97 4.03 18 9 18C11.39 18 13.68 17.06 15.4 15.4L13.9 13.9C12.63 15.25 10.86 16 9 16C2.76 16 -0.36 8.46 4.05 4.05C8.46 -0.36 16 2.77 16 9H13L17 13H17.1L21 9H18C18 4.03 13.97 0 9 0C4.03 0 0 4.03 0 9Z"
                      fill="white"
                    />
                  </svg>
                </i>
                <span>
                  {['failed'].includes(type) ? txt_another_attempt : null}
                  {['passed'].includes(type) ? txt_next_section : null}
                </span>
              </Button>
              <span className="closeText">
                <a href="/home">{navigation_drawer_close.toUpperCase()}</a>
              </span>
            </Fragment>
          ) : null}
        </div>
      </div>
    </ResultContainer>
  );
}

Result.propTypes = {};

export default memo(Result);