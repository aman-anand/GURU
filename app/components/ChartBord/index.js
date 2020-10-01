/**
 *
 * ChartBord
 *
 */

import React, { memo, Fragment } from 'react';
import PropTypes from 'prop-types';
import withSizes from 'react-sizes';
import Search from '../Search/Loadable';
import UpcommingSession from '../UpcommingSession/Loadable';
import GuruListCard from '../GuruListCard/Loadable';
import { ChartBordContainer } from './style';

export class ChartBord extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { isMobile } = this.props;
    return (
      <ChartBordContainer id="chartBoard">
        {!isMobile ? (
          <div className="chartLeftBox" id="chartBoardClose" />
        ) : null}
        <div className="chartRightBox">
          <div className="chartHeader">
            <div className="_left_ch_h">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.4 1.6V7.2H2.536L1.6 8.136V1.6H10.4ZM11.2 0H0.8C0.587827 0 0.384344 0.0842854 0.234315 0.234315C0.0842854 0.384344 0 0.587827 0 0.8V12L3.2 8.8H11.2C11.4122 8.8 11.6157 8.71571 11.7657 8.56569C11.9157 8.41566 12 8.21217 12 8V0.8C12 0.587827 11.9157 0.384344 11.7657 0.234315C11.6157 0.0842854 11.4122 0 11.2 0ZM15.2 3.2H13.6V10.4H3.2V12C3.2 12.2122 3.28429 12.4157 3.43431 12.5657C3.58434 12.7157 3.78783 12.8 4 12.8H12.8L16 16V4C16 3.78783 15.9157 3.58434 15.7657 3.43431C15.6157 3.28429 15.4122 3.2 15.2 3.2Z"
                  fill="#2E323D"
                />
              </svg>
            </div>
            <div className="_conte_ch_h">
              <span>CHAT WITH GURU</span>
            </div>
            <div className="_right_ch_h">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 1L1 13"
                  stroke="#403F3F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 1L13 13"
                  stroke="#403F3F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <Fragment>
            <div className="guruWrapper">
              <Search />
              <div className="gu_list_wrapper">
                <UpcommingSession title="GURU LIST" subtitle="2 Guru" />
                <GuruListCard />
                <GuruListCard />
                <GuruListCard />
              </div>
            </div>
          </Fragment>
          {['chart'].includes(this.state.stage) ? (
            <Fragment>
              <div className="chartContainer">
                <div className="converList left">
                  <div className="conv_img_box" />
                  <div className="conversession">
                    <div className="context">Chat bubble 1 Short message</div>
                    <span className="datetime">27/07/20 | 02:30 PM</span>
                  </div>
                </div>
                <div className="converList right">
                  <div className="conv_img_box" />
                  <div className="conversession">
                    <div className="context">Chat bubble 1 Short message</div>
                    <span className="datetime">27/07/20 | 02:30 PM</span>
                  </div>
                </div>
              </div>
              <div className="chartAction">
                <div className="message">
                  <input type="text" placeholder="Type your message here..." />
                </div>
                <div className="sendAction" />
              </div>
            </Fragment>
          ) : null}
        </div>
      </ChartBordContainer>
    );
  }
}

ChartBord.propTypes = {
  isMobile: PropTypes.bool,
};
const mapSizesToProps = ({ width }) => ({
  isMobile: width < 768,
});

export default memo(withSizes(mapSizesToProps)(ChartBord));
