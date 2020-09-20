/**
 *
 * ProfileDetails
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { ProfileDetailsContainer } from './style';

function ProfileDetails() {
  return (
    <ProfileDetailsContainer>
      <div className="scroll">
        <div className="field_row">
          <div className="fieldWrapper">
            <p>FIRST NAME</p>
            <input type="text" placeholder="Jonathan" />
          </div>
          <div className="fieldWrapper">
            <p>FIRST NAME</p>
            <input type="text" placeholder="Bolton" />
          </div>
        </div>
        <div className="field_row">
          <div className="fieldWrapper">
            <p>EMAIL ADDRESS</p>
            <input type="text" placeholder="Jonathan" />
          </div>
          <div className="fieldWrapper mobile">
            <p>MOBILE NUMBER</p>
            <input type="text" placeholder="8777777777" />
            <span className="mobileNumber">
              <i className="icon" />
              +91
            </span>
          </div>
        </div>
      </div>
      <div className="field_row">
        <div className="buttonWrapper">
          <button type="button" className="saveButton">
            Save
          </button>
          <button type="button" className="updateButton">
            Update Password
          </button>
        </div>
      </div>
    </ProfileDetailsContainer>
  );
}

ProfileDetails.propTypes = {};

export default memo(ProfileDetails);
