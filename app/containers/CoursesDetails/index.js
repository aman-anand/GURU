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
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
});

export class GuruCoursesDetails extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { match } = props || {};
    const { params } = match || {};
    const { id: COURSE_ID } = params || {};
    state.COURSE_ID = COURSE_ID || null; // Set LeadId
  }

  componentDidMount() {
    const { COURSE_ID } = this.state;
    window.console.log('STATE', COURSE_ID);
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

  handleChangeAccor = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { isMobile, theme } = this.props || {};
    const { expanded } = this.state;
    // const theme = withTheme();
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
                      {!isMobile ? (
                        <div className="payItem">
                          <span>PAY AND SUBSCRIBE</span>
                          <span>&#8377; 500</span>
                        </div>
                      ) : null}
                      <div className="sectionItem">
                        <i className="icon">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M2 4H0V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H16V18H2V4ZM18 0H6C5.46957 0 4.96086 0.210714 4.58579 0.585786C4.21071 0.960859 4 1.46957 4 2V14C4 14.5304 4.21071 15.0391 4.58579 15.4142C4.96086 15.7893 5.46957 16 6 16H18C18.5304 16 19.0391 15.7893 19.4142 15.4142C19.7893 15.0391 20 14.5304 20 14V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0ZM10 12.5V3.5L16 8L10 12.5Z"
                              fill="black"
                            />
                          </svg>
                        </i>
                        <div className="_content">
                          <span>3 Sections</span>
                          <span>10 Videos</span>
                        </div>
                      </div>
                      <div className="certificateItem">
                        <i className="icon">
                          <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M2 0C0.89 0 0 0.89 0 2V12C0 12.5304 0.210714 13.0391 0.585786 13.4142C0.960859 13.7893 1.46957 14 2 14H10V19L13 16L16 19V14H18C18.5304 14 19.0391 13.7893 19.4142 13.4142C19.7893 13.0391 20 12.5304 20 12V5V3V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0H14H2ZM10 2L13 4L16 2V5.5L19 7L16 8.5V12L13 10L10 12V8.5L7 7L10 5.5V2ZM2 2H7V4H2V2ZM2 6H5V8H2V6ZM2 10H7V12H2V10Z"
                              fill="black"
                            />
                          </svg>
                        </i>
                        <div className="_content">
                          <span>CERTIFICATE</span>
                          <span>3 ASSESSMENTS</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabContainer>
                <TabContainer dir={theme.direction}>
                  <div className="cariculamBox">
                    <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChangeAccor('panel1')}>
                      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>BEGINNER FINANCE</Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <Typography>Data</Typography>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChangeAccor('panel2')}>
                      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>INTERMEDIATE FINANCE</Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <Typography>Data</Typography>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  </div>
                </TabContainer>
                <TabContainer dir={theme.direction}>Quiz Data</TabContainer>
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
)(withStyles(styles, { withTheme: true })(withSizes(mapSizesToProps)(GuruCoursesDetails)));
