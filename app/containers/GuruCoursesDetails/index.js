/**
 *
 * GuruCoursesDetails
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import withSizes from 'react-sizes';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';

import injectReducer from 'utils/injectReducer';
import { GuruCoursesDetailsContainer } from './style';
import makeSelectGuruCoursesDetails from './selectors';
import reducer from './reducer';
import Header from '../../components/Header/Loadable';
import Footer from '../../components/Footer/Loadable';
import Search from '../../components/Search/Loadable';
import SessionCard from '../../components/SessionCard/Loadable';
import VideoCard from '../../components/VideoCard/Loadable';
import Bredcrumb from '../../components/Bredcrumb/Loadable';
import VideoPlayer from '../../components/VideoPlayer/Loadable';
import SectionHeading from '../../components/SectionHeading/Loadable';

/* eslint-disable react/prefer-stateless-function */

function TabContainer({ children, dir }) {
  return (
    <Typography className="tabsWrapper" component="div" dir={dir}>
      {children}
    </Typography>
  );
}
TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string,
};

export class GuruCoursesDetails extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  handleChange = (event, newValue) => {
    this.setState({
      value: newValue,
    });
  };

  handleChangeIndex = index => {
    this.setState({
      value: index,
    });
  };

  render() {
    const { isMobile } = this.props || {};
    const theme = withTheme();
    return (
      <GuruCoursesDetailsContainer>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Description of Home" />
        </Helmet>
        <Header title="Home" />
        <div className="container">
          {isMobile ? <Search /> : null}
          <div className="leftBox">
            <Bredcrumb>
              <div className="_bWrapper">
                <span>
                  <a href="#">COURSES</a>
                </span>
                <span>&gt;</span>
                <span>
                  <a href="#">SAVINGS EDUCATION</a>
                </span>
                <span>&gt;</span>
                <span>
                  <a href="#">BRIEF</a>
                </span>
              </div>
            </Bredcrumb>
            <VideoPlayer />
            <div className="tabsContainer">
              <AppBar position="static" color="default" className="tabsHeader">
                <Tabs
                  value={this.state.value}
                  onChange={this.handleChange}
                  indicatorColor="secondary"
                  textColor="secondary"
                  variant="fullWidth"
                  className="tabBlock"
                >
                  <Tab label="BRIEF" />
                  <Tab label="CURRICULUM" />
                  <Tab label="QUIZ" />
                </Tabs>
              </AppBar>
              <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={this.state.value} onChangeIndex={this.handleChangeIndex}>
                <TabContainer dir={theme.direction}>
                  <div className="tabDataBox">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="brifSessionBox">
                      <div className="payItem">box</div>
                      <div className="sectionItem">box</div>
                      <div className="certificateItem">box</div>
                    </div>
                  </div>
                </TabContainer>
                <TabContainer dir={theme.direction}>Item Two</TabContainer>
                <TabContainer dir={theme.direction}>Item Three</TabContainer>
              </SwipeableViews>
            </div>
          </div>
          <div className="rightBox">
            <SectionHeading title="Other INTERESTING COURSES" />
            <div className="cardWrapper">
              <SessionCard sticyTwo sticyTwoData={{ name: '3 SECTIONS', classname: 'expert' }} />
              <SessionCard sticyTwo sticyTwoData={{ name: 'BEGINNER', classname: 'beginner' }} />
            </div>
            <SectionHeading class_name="marginTop" title="Other INTERESTING VIDEOS" />
            <div className="cardWrapper">
              <VideoCard />
              <VideoCard />
            </div>
          </div>
        </div>
        {isMobile ? <Footer /> : null}
      </GuruCoursesDetailsContainer>
    );
  }
}

GuruCoursesDetails.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  guruCoursesDetails: makeSelectGuruCoursesDetails(),
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

const withReducer = injectReducer({ key: 'guruCoursesDetails', reducer });

export default compose(
  withReducer,
  withConnect,
)(withSizes(mapSizesToProps)(GuruCoursesDetails));
