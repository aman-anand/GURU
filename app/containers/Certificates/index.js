/* eslint-disable camelcase */
/**
 *
 * Certificates
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import withSizes from 'react-sizes';

import injectReducer from 'utils/injectReducer';
import makeSelectCertificates from './selectors';
import reducer from './reducer';
import SessionCard from '../../components/SessionCard/Loadable';
import Header from '../../components/Header/Loadable';
import UpcommingSession from '../../components/UpcommingSession/Loadable';
import SectionHeading from '../../components/SectionHeading/Loadable';
import CetificateBlock from '../../components/CetificateBlock/Loadable';
import { certificateAction, courseAction } from './actions';

// NOTE: Style
import { CertificatesContainer } from './style';

export class Certificates extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const parms = {
      page: 1,
      limit: 4,
      status: 0,
      all: true,
    };
    this.props.dispatch(courseAction(parms));
    this.props.dispatch(certificateAction());
  }

  render() {
    const { isMobile, certificates } = this.props;
    const { certificateObj, courseObj } = certificates || {};
    const { data: courseData } = courseObj || {};
    const { data: certiObj } = certificateObj || {};
    const certCount = certiObj ? certiObj.length : 0;
    return (
      <CertificatesContainer>
        <Helmet>
          <title>Certificates</title>
          <meta name="description" content="Description of Certificates" />
        </Helmet>
        <Header title="CERTIFICATES" />
        <div className="container">
          <div className="leftBox">
            <UpcommingSession
              title="CERTIFICATES"
              subtitle={`${certCount} certificates earned`}
            />
            {certiObj &&
              certiObj.map(cert => {
                const { display_certificateDate, certificateUrl, attempt } =
                  cert || {};
                const { course } = attempt || {};
                const { name } = course || {};
                const color = Math.floor(Math.random() * 16777215).toString(16);
                return (
                  <CetificateBlock
                    data={{
                      color,
                      display_certificateDate,
                      certificateUrl,
                      name,
                    }}
                  />
                );
              })}
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
      </CertificatesContainer>
    );
  }
}

Certificates.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isMobile: PropTypes.bool,
  certificates: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  certificates: makeSelectCertificates(),
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

const withReducer = injectReducer({ key: 'certificates', reducer });

export default compose(
  withReducer,
  withConnect,
  memo,
)(withSizes(mapSizesToProps)(Certificates));
