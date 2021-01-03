/* eslint-disable camelcase */
/**
 *
 * Certificates
 *
 */

import React, { Fragment, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import withSizes from 'react-sizes';
import Button from '@material-ui/core/Button';

import injectReducer from 'utils/injectReducer';
import makeSelectCertificates from './selectors';
import reducer from './reducer';
import SessionCard from '../../components/SessionCard/Loadable';
import Header from '../../components/Header/Loadable';
import Footer from '../../components/Footer/Loadable';
import UpcommingSession from '../../components/UpcommingSession/Loadable';
import SectionHeading from '../../components/SectionHeading/Loadable';
import CetificateBlock from '../../components/CetificateBlock/Loadable';
import { certificateAction, courseAction } from './actions';
import certificateIllustration from '../../images/certificate_illustration.png';
import { languageString } from '../../services/CommonSetterGetter';

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
        <Header title={languageString('txt_certificates').toUpperCase()} />
        <div className="container">
          <div className="leftBox">
            {certCount ? (
              <Fragment>
                <UpcommingSession
                  title={languageString('txt_certificates').toUpperCase()}
                  subtitle={`${certCount} ${languageString(
                    'txt_certificates',
                  )} earned`}
                />
                {certiObj &&
                  certiObj.map(cert => {
                    const { display_certificateDate, certificateUrl, attempt } =
                      cert || {};
                    const { course } = attempt || {};
                    const { name } = course || {};
                    const color = Math.floor(Math.random() * 16777215).toString(
                      16,
                    );
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
              </Fragment>
            ) : (
              <div className="emptyWrapper">
                <i>
                  <img src={certificateIllustration} title="" alt="" />
                </i>
                <p className="paraMsg">
                  {languageString('no_certificate_message')}
                </p>
                <Button href="/course" variant="contained" color="primary">
                  {languageString('txt_view_courses')}
                </Button>
              </div>
            )}
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
                      coverImage,
                      _id,
                    } = list || {};
                    const courseDataOBJ = {
                      courseName: name,
                      totalSections: sectionsOBJ ? sectionsOBJ.length : 0,
                      totalVideosOBJ,
                      durationOBJ,
                      coverImage,
                      _id,
                    };
                    return <SessionCard key={_id} courseData={courseDataOBJ} />;
                  })}
              </div>
            </div>
          ) : null}
        </div>
        {isMobile ? <Footer /> : null}
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
