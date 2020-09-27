/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 *
 * SessionDetails
 *
 */

import React, { memo, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import withSizes from 'react-sizes';

import injectReducer from 'utils/injectReducer';
import makeSelectSessionDetails from './selectors';
import reducer from '../Sessions/reducer';

import SessionCard from '../../components/SessionCard/Loadable';
import Header from '../../components/Header/Loadable';
import Bredcrumb from '../../components/Bredcrumb/Loadable';
import SectionHeading from '../../components/SectionHeading/Loadable';
import OptionalHeader from '../../components/OptionalHeader';
import { courseAction } from '../Sessions/actions';
// NOTE: Style
import { SessionContainer } from '../Sessions/style';

export class SessionDetails extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.onChangeRadio = this.onChangeRadio.bind(this);
  }

  onChangeRadio = params => {
    window.console.log('PARAMS', params);
  };

  componentDidMount() {
    const parms = {
      page: 1,
      limit: 4,
      status: 0,
      all: true,
    };
    this.props.dispatch(courseAction(parms));
  }

  tabComponent = () => (
    <div className="tabwrap">
      <div className="list active">
        <span>SESSIONS</span>
      </div>
      <div className="list">
        <span>CURRICULUM</span>
      </div>
    </div>
  );

  render() {
    const { isMobile, sessionDetails } = this.props;
    const { courseObj } = sessionDetails || {};
    const { data: courseData } = courseObj || {};
    return (
      <SessionContainer>
        <Helmet>
          <title>Sessions</title>
          <meta name="description" content="Description of Sessions" />
        </Helmet>
        {!isMobile ? (
          <Header title="SESSION DETAIL" />
        ) : (
          <OptionalHeader title="SESSION DETAIL" goTo="/sessions" />
        )}
        <div className="container">
          <div className="leftBox">
            {!isMobile ? (
              <Bredcrumb>
                <div className="_bWrapper">
                  <span>
                    <a>SESSIONS</a>
                  </span>
                  <span>{'>'}</span>
                  <span>SESSION DETAIL</span>
                </div>
              </Bredcrumb>
            ) : null}
            <div className="detailsSessionWrapper">
              {isMobile ? this.tabComponent() : null}
              <div className="imgWraper">dddd</div>
              {!isMobile ? this.tabComponent() : null}
              <div className="tabdata">
                <Fragment>
                  <div className="playerDesc">
                    <div className="box_1">
                      <i>I</i>
                    </div>
                    <div className="box_2">
                      <p>
                        <span className="tex_big">
                          Insurance - Basic Level{' '}
                        </span>
                        <span className="tex_small">Duration: 14 Hrs</span>
                      </p>
                    </div>
                  </div>
                  <div className="dateBox">Date: 09 September 2020</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{' '}
                  </p>
                  <p>
                    <b>Address:</b> Kamtha Village, Nanded, Maharashtra, 441601
                  </p>
                  <div className="map">
                    <meta
                      name="viewport"
                      content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
                    />
                  </div>
                </Fragment>
                <Fragment>
                  <div className="playerDesc">
                    <div className="box_1">
                      <i>I</i>
                    </div>
                    <div className="box_2">
                      <p>
                        <span className="tex_big">
                          Insurance - Basic Level{' '}
                        </span>
                        <span className="tex_small">Duration: 14 Hrs</span>
                      </p>
                    </div>
                  </div>
                  {/* Accordian */}
                  <div className="accordianwrapper">
                    <div className="acorlist">
                      <input type="radio" name="accor" />
                      <div className="accorData">Accor data</div>
                    </div>
                  </div>
                </Fragment>
              </div>
            </div>
          </div>
          {!isMobile ? (
            <div className="rightBox">
              <SectionHeading title="Other INTERESTING COURSES" />
              <div className="cardWrapper">
                {courseData &&
                  courseData.map(list => {
                    const {
                      name,
                      sections: sectionsOBJ,
                      duration: durationOBJ,
                      totalVideos: totalVideosOBJ,
                      coverImage: coverImageOBJ,
                      _id,
                    } = list || {};
                    const courseDataOBJ = {
                      courseName: name,
                      totalSections: sectionsOBJ ? sectionsOBJ.length : 0,
                      totalVideosOBJ,
                      durationOBJ,
                      coverImageOBJ,
                      _id,
                    };
                    const sticyTwoData = {
                      name: `${sectionsOBJ ? sectionsOBJ.length : 0} SECTIONS`,
                      classname: 'expert',
                    };
                    return (
                      <SessionCard
                        key={_id}
                        courseData={courseDataOBJ}
                        sticyTwo
                        sticyTwoData={sticyTwoData}
                      />
                    );
                  })}
              </div>
            </div>
          ) : null}
        </div>
      </SessionContainer>
    );
  }
}

SessionDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isMobile: PropTypes.bool,
  sessionDetails: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  sessionDetails: makeSelectSessionDetails(),
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
const withReducer = injectReducer({ key: 'sessionDetails', reducer });
export default compose(
  withReducer,
  withConnect,
  memo,
)(withSizes(mapSizesToProps)(SessionDetails));
