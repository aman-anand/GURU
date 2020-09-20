/**
 *
 * OrderList
 *
 */

import React, { memo, Fragment } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import withSizes from 'react-sizes';
import { OrderListContainer } from './style';
import proImg from '../../images/img_icon.jpg';

function OrderList(props) {
  return (
    <OrderListContainer>
      <div className="topBox">
        <div className="_wrapper">
          <div className="left">
            <i className="icon">
              <img src={proImg} alt="" title="" />
            </i>
          </div>
          <div className="middle">
            <h4>Advance Track for Sr. Programmer</h4>
            {!props.isMobile ? (
              <p>
                <span>Order ID: 9898989888989</span>
                <span>.</span>
                <span>Ordered on: 28-08-2020</span>
              </p>
            ) : null}
          </div>
          <div className="right">
            {!props.isMobile ? (
              <Fragment>
                <span className="without_discount">Rs. 3,250</span>
                <span className="discount">Rs. 2,400</span>
              </Fragment>
            ) : (
              <i className="arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path
                    fill="#202c44"
                    fillRule="evenodd"
                    d="M6.45 5.55L7.5 4.5 12 9 7.5 13.5 6.45 12.45 9.9 9z"
                  />
                </svg>
              </i>
            )}
          </div>
        </div>
        {props.isMobile ? (
          <div className="_wrapper_two">
            <div className="left">
              <Fragment>
                <span className="without_discount">Rs. 3,250</span>
                <span className="discount">Rs. 2,400</span>
              </Fragment>
            </div>
            <div className="right">
              <p className="failed">
                <i />
                <span>Failed</span>
              </p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottomBox">
        <div className="bottom_left">
          {!props.isMobile ? (
            <p>
              <span>
                <a href="/" title="">
                  View Order Details
                </a>
              </span>
              <span>
                <a href="/">Help</a>
              </span>
              <span>
                <a href="/">Reorder</a>
              </span>
            </p>
          ) : null}
          {props.isMobile ? (
            <p>
              <span>Order ID:</span>
              <span>9898989888989</span>
            </p>
          ) : null}
        </div>
        <div className="bottom_right">
          {props.isMobile ? (
            <p>
              <span>Ordered on:</span>
              <span>28-08-2020</span>
            </p>
          ) : null}
          {!props.isMobile ? (
            <p className="failed">
              <i />
              <span>Failed</span>
            </p>
          ) : null}
        </div>
      </div>
    </OrderListContainer>
  );
}

OrderList.propTypes = {
  isMobile: PropTypes.bool,
};
const mapSizesToProps = ({ width }) => ({
  isMobile: width < 768,
});

export default memo(withSizes(mapSizesToProps)(OrderList));
