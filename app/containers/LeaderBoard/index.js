/**
 *
 * LeaderBoard
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
import makeSelectLeaderBoard from './selectors';
import reducer from './reducer';
import Header from '../../components/Header/Loadable';

// NOTE: Style
import { LeaderBoardContainer } from './style';

export class LeaderBoard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <LeaderBoardContainer>
        <Helmet>
          <title>LeaderBoard</title>
          <meta name="description" content="Description of LeaderBoard" />
        </Helmet>
        <Header title="Sessions" />
        <div className="topSection">
          <div className="container">
            <div className="topHeading">LEADERBOARD</div>
            <div className="boardTeamBox">
              <div className="secound">
                <span className="imgBox">
                  <img
                    src="https://bimapaathshala-uat.s3.ap-south-1.amazonaws.com/content/18a1a5a753220b52804ab2a1e8c4c76740c93816a0cb0570ff73c0e7bb5234.jpg"
                    alt=""
                    title=""
                  />
                  <span className="batch">bb</span>
                </span>
                <span className="text">Keshav Pimple</span>
              </div>
              <div className="first">
                <span className="imgBox">
                  <img
                    src="https://bimapaathshala-uat.s3.ap-south-1.amazonaws.com/content/18a1a5a753220b52804ab2a1e8c4c76740c93816a0cb0570ff73c0e7bb5234.jpg"
                    alt=""
                    title=""
                  />
                  <span className="batch">bb</span>
                </span>
                <span className="text">Ajay Verma</span>
              </div>
              <div className="third">
                <span className="imgBox">
                  <img
                    src="https://bimapaathshala-uat.s3.ap-south-1.amazonaws.com/content/18a1a5a753220b52804ab2a1e8c4c76740c93816a0cb0570ff73c0e7bb5234.jpg"
                    alt=""
                    title=""
                  />
                  <span className="batch">bb</span>
                </span>
                <span className="text">Durgesh Walke</span>
              </div>
            </div>
          </div>
        </div>
      </LeaderBoardContainer>
    );
  }
}

LeaderBoard.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  leaderBoard: makeSelectLeaderBoard(),
});

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 768,
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'leaderBoard', reducer });

export default compose(
  withReducer,
  withConnect,
  memo,
)(withSizes(mapSizesToProps)(LeaderBoard));
