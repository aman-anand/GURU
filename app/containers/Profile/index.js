/**
 *
 * Profile
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import withSizes from 'react-sizes';

import injectReducer from 'utils/injectReducer';
import makeSelectProfile from './selectors';
import reducer from './reducer';
import Header from '../../components/Header/Loadable';
import BasicDetails from '../../components/BasicDetails/Loadable';
import Registration from '../../components/Registration/Loadable';
// NOTE: Style
import { ProfileContainer } from './style';
export class Profile extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedTabs: 'basicinfo',
    };
  }

  tabChange = params => {
    this.setState({
      selectedTabs: params,
    });
  };

  render() {
    const { isMobile } = this.props || {};
    return (
      <ProfileContainer>
        <Helmet>
          <title>Profile</title>
          <meta name="description" content="Description of Profile" />
        </Helmet>
        <Header title="PROFILE" />
        <div className="profileContainer">
          <div className="tabsWraper">
            <div
              className={`${
                ['basicinfo'].includes(this.state.selectedTabs)
                  ? 'tab active'
                  : 'tab'
              }`}
              onClick={() => this.tabChange('basicinfo')}
              role="presentation"
            >
              <span>{!isMobile ? 'Basic Details' : 'Basic Info'}</span>
            </div>
            <div
              className={`${
                ['moreinfo'].includes(this.state.selectedTabs)
                  ? 'tab active'
                  : 'tab'
              }`}
              onClick={() => this.tabChange('moreinfo')}
              role="presentation"
            >
              <span>More Info</span>
            </div>
          </div>
          <div className="tabContent">
            <div className="basicDetailsForm">
              {['basicinfo'].includes(this.state.selectedTabs) ? (
                <BasicDetails />
              ) : null}
              {['moreinfo'].includes(this.state.selectedTabs) ? (
                <Registration />
              ) : null}
            </div>
          </div>
        </div>
      </ProfileContainer>
    );
  }
}

Profile.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  profile: makeSelectProfile(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 768,
});

const withReducer = injectReducer({ key: 'profile', reducer });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withConnect,
  memo,
)(withSizes(mapSizesToProps)(Profile));
