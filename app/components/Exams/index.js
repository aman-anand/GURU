/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
/**
 *
 * Exams
 *
 */

import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import { ExamsContainer } from './style';

function Exams(props) {
  const [quesAttem, setQuesAttem] = useState(0);
  const [selectAnswar, setSelectAnswar] = useState({});
  const [answarList, setAnswarList] = useState([]);
  const [open, setOpen] = React.useState(false);
  const { data } = props;
  const { startAssesment, courseName, attemptID } = data || {};
  const { time, title, questions } = startAssesment || {};
  // window.console.log('PROPS', props);
  useEffect(() => {
    const duration = time ? 60 * parseInt(time, 10) : 1;
    let timer = duration;
    let minutes;
    let seconds;
    const downloadTimer = setInterval(function function1() {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? `0${minutes}` : minutes;
      seconds = seconds < 10 ? `0${seconds}` : seconds;
      document.getElementById(
        'countdown',
      ).innerHTML = `TIME LEFT ${minutes} : ${seconds} MINS`;

      timer -= 1;
      if (timer <= 0) {
        clearInterval(downloadTimer);
        document.getElementById('countdown').innerHTML = 'Time is up!';
      }
    }, 1000);
  });
  const nextQuestion = qusParms => {
    const radios = document.querySelectorAll('input[type="radio"]:checked');
    const value = radios.length > 0 ? radios[0].value : null;
    // console.log('NEXT', value);
    if (value) {
      const ele = document.querySelectorAll('input[type="radio"]');
      for (let i = 0; i < ele.length; i += 1) ele[i].checked = false;
      if (quesAttem + 1 < qusParms.length) {
        setQuesAttem(quesAttem + 1);
        setAnswarList([...answarList, selectAnswar]);
      } else {
        answarList.push(selectAnswar);
        submitAnswar();
      }
      // submitAnswar();
      window.console.log('window.answarList', answarList);
    } else {
      setOpen(true);
      window.console.log('Please select answar');
    }
  };

  const submitAnswar = () => {
    props.submitQuiz({ answarList, data, attemptID });
    console.log('SUBMIT', answarList);
  };
  window.onbeforeunload = function(evt) {
    const message = 'Are you sure you want to leave?';
    if (typeof evt === 'undefined') {
      evt = window.event;
    }
    if (evt) {
      evt.returnValue = message;
    }
    return message;
  };
  const handleClose = () => {
    setOpen(false);
  };
  const { _id: qusId } = questions[quesAttem] || {};
  window.console.log('DATA', data);
  const percentage = 100 / (quesAttem + 1);
  console.log('Percentage', percentage);
  return (
    <ExamsContainer percentage={percentage}>
      <div className="topSec">
        <div className="topSecData">
          <div className="tlSect">
            <span className="textH">{courseName}</span>
            <span className="textS">{title}</span>
          </div>
          <div className="trSect">
            <div className="examTimes" id="countdown">
              TIME LEFT: {time} MINS
            </div>
          </div>
        </div>
        <div className="percentage">
          <span className="percent_30" />
        </div>
      </div>
      <div className="middleSec">
        <div className="quesWrapper">
          <h5>{questions[quesAttem].question}</h5>
          <div className="answarOpt">
            {questions[quesAttem].options.map((ele, idx) => (
              <div className="ansBox">
                <input
                  type="radio"
                  id={`and_${idx}`}
                  name={`answar_${quesAttem}`}
                  value={ele}
                  onChange={() =>
                    setSelectAnswar({
                      answer: ele,
                      _id: qusId,
                    })
                  }
                />
                <label htmlFor={`and_${idx}`}>
                  <i className="icon" />
                  <span>{ele}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bottomSec">
        <div className="quesCount">
          {quesAttem + 1} / {questions.length}
        </div>
        {quesAttem + 1 < questions.length ? (
          <div
            className="next questionButton"
            onClick={() => nextQuestion(questions)}
            role="presentation"
          >
            <i>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C11.3132 0 12.6136 0.258658 13.8268 0.761205C15.0401 1.26375 16.1425 2.00035 17.0711 2.92893C17.9997 3.85752 18.7362 4.95991 19.2388 6.17317C19.7413 7.38642 20 8.68678 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C8.68678 20 7.38642 19.7413 6.17317 19.2388C4.95991 18.7362 3.85752 17.9997 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10ZM15 10L10 5V8H6V12H10V15L15 10Z"
                  fill="black"
                />
              </svg>
            </i>

            <span>NEXT QUESTION</span>
          </div>
        ) : (
          <div
            className="submitAnswar questionButton"
            onClick={() => nextQuestion(questions)}
            role="presentation"
          >
            <i>
              <svg
                width="14"
                height="11"
                viewBox="0 0 14 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 1.1566L4.4 11L0 6.48844L1.128 5.33184L4.4 8.6786L12.872 0L14 1.1566Z"
                  fill="white"
                />
              </svg>
            </i>
            <span>SUBMIT ANSWAR</span>
          </div>
        )}
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'bottom' }}
        open={open}
        onClose={handleClose}
        message="Please select answar"
        key={{ vertical: 'bottom' } + { horizontal: 'right' }}
      />
    </ExamsContainer>
  );
}

Exams.propTypes = {
  data: PropTypes.object,
  submitQuiz: PropTypes.func,
};

export default memo(Exams);
