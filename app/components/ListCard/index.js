/**
 *
 * ListCard
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import UpcommingSession from '../UpcommingSession/Loadable';
import { ListCardContainer } from './style';

function ListCard() {
  return (
    <ListCardContainer>
      <UpcommingSession seeall />
      <div className="listWrapper">
        <div className="listBox">
          <div className="icon">i</div>
          <div className="content">
            <p>
              <span>Expenses Name</span>
              <span>26/07/2020 | 02:00 PM</span>
            </p>
          </div>
          <div className="price">&#8377; 200</div>
        </div>
        <div className="listBox">
          <div className="icon">i</div>
          <div className="content">
            <p>
              <span>Expenses Name</span>
              <span>26/07/2020 | 02:00 PM</span>
            </p>
          </div>
          <div className="price">&#8377; 200</div>
        </div>
        <div className="listBox">
          <div className="icon">i</div>
          <div className="content">
            <p>
              <span>Expenses Name</span>
              <span>26/07/2020 | 02:00 PM</span>
            </p>
          </div>
          <div className="price">&#8377; 200</div>
        </div>
        <div className="listBox">
          <div className="icon">i</div>
          <div className="content">
            <p>
              <span>Expenses Name</span>
              <span>26/07/2020 | 02:00 PM</span>
            </p>
          </div>
          <div className="price">&#8377; 200</div>
        </div>
        <div className="listBox">
          <div className="icon">i</div>
          <div className="content">
            <p>
              <span>Expenses Name</span>
              <span>26/07/2020 | 02:00 PM</span>
            </p>
          </div>
          <div className="price">&#8377; 200</div>
        </div>
        <div className="listBox">
          <div className="icon">i</div>
          <div className="content">
            <p>
              <span>Expenses Name</span>
              <span>26/07/2020 | 02:00 PM</span>
            </p>
          </div>
          <div className="price">&#8377; 200</div>
        </div>
      </div>
    </ListCardContainer>
  );
}

ListCard.propTypes = {};

export default ListCard;
