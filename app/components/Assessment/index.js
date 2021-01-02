/* eslint-disable no-nested-ternary */
/**
 *
 * Assessment
 *
 */

import React, { memo } from 'react';
import { languageString } from '../../services/CommonSetterGetter';
import { AssessmentContainer } from './style';

function Assessment(props) {
  const { attempt, data, onAction } = props || {};
  const { time, title, questions } = data || {};
  const { score, locked, completed } = attempt || {};
  const quLength = questions ? questions.length : 0;
  return (
    <AssessmentContainer
      className={completed ? 'completed' : locked ? 'locked' : 'pending'}
    >
      <div className="iconBox">
        {!locked ? (
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 0C13.24 0 11 2.24 11 5V7H2C0.9 7 0 7.89 0 9V19C0 20.11 0.9 21 2 21H14C15.11 21 16 20.11 16 19V9C16 7.9 15.11 7 14 7H13V5C13 3.34 14.34 2 16 2C17.66 2 19 3.34 19 5V7H21V5C21 2.24 18.76 0 16 0ZM8 12C9.1 12 10 12.89 10 14C10 15.11 9.11 16 8 16C6.9 16 6 15.11 6 14C6 12.9 6.9 12 8 12Z"
              fill="black"
            />
          </svg>
        ) : (
          <svg
            width="16"
            height="21"
            viewBox="0 0 16 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 16C8.53043 16 9.03914 15.7893 9.41421 15.4142C9.78929 15.0391 10 14.5304 10 14C10 12.89 9.1 12 8 12C7.46957 12 6.96086 12.2107 6.58579 12.5858C6.21071 12.9609 6 13.4696 6 14C6 14.5304 6.21071 15.0391 6.58579 15.4142C6.96086 15.7893 7.46957 16 8 16ZM14 7C14.5304 7 15.0391 7.21071 15.4142 7.58579C15.7893 7.96086 16 8.46957 16 9V19C16 19.5304 15.7893 20.0391 15.4142 20.4142C15.0391 20.7893 14.5304 21 14 21H2C1.46957 21 0.960859 20.7893 0.585786 20.4142C0.210714 20.0391 0 19.5304 0 19V9C0 7.89 0.9 7 2 7H3V5C3 3.67392 3.52678 2.40215 4.46447 1.46447C5.40215 0.526784 6.67392 0 8 0C8.65661 0 9.30679 0.129329 9.91342 0.380602C10.52 0.631876 11.0712 1.00017 11.5355 1.46447C11.9998 1.92876 12.3681 2.47995 12.6194 3.08658C12.8707 3.69321 13 4.34339 13 5V7H14ZM8 2C7.20435 2 6.44129 2.31607 5.87868 2.87868C5.31607 3.44129 5 4.20435 5 5V7H11V5C11 4.20435 10.6839 3.44129 10.1213 2.87868C9.55871 2.31607 8.79565 2 8 2Z"
              fill="black"
            />
          </svg>
        )}
      </div>
      <div className="mContent">
        {completed ? (
          <span className="complete">
            {languageString('txt_completed').toUpperCase()}
          </span>
        ) : (
          <span className="pending">
            {languageString('txt_pending').toUpperCase()}
          </span>
        )}
        <span>{title}</span>
        <span>
          {quLength} {languageString('txt_questions')} | {time}{' '}
          {languageString('txt_minutes')}
        </span>
      </div>
      <div className="mRight">
        {completed ? (
          <span className="score">Score: {score}</span>
        ) : (
          <span
            className="startButton"
            onClick={() => onAction(data)}
            role="presentation"
          >
            {languageString('txt_start').toUpperCase()}
          </span>
        )}
      </div>
    </AssessmentContainer>
  );
}

Assessment.propTypes = {};

export default memo(Assessment);
