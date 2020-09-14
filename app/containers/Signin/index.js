/* eslint-disable react/no-unused-prop-types */
/**
 *
 * Signin
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withSizes from 'react-sizes';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import history from '../../utils/history';
import makeSelectSignin from './selectors';
import reducer from './reducer';
import SigninForm from '../../components/SigninForm/Loadable';
// import RegistorFrom from '../../components/RegistorFrom/Loadable';
import RegistorNav from '../../components/RegistorNav/Loadable';
// import Authentication from '../../components/Authentication/Loadable';
// import Registration from '../../components/Registration/Loadable';
// import Stapes from '../../components/Stapes/Loadable';
import { SigninContainer } from './style';
import splashIMG from '../../images/splash.png';
import logoIMG from '../../images/logo.svg';
import { loginAction } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class Signin extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitMobile = params => {
    this.props.dispatch(loginAction(params)).then(res => {
      const { payload } = res || {};
      const { data } = payload || {};
      const { auth, role } = data || {};
      const { token } = auth || {};
      if (token && role) {
        history.push('/home');
      }
    });
  };

  render() {
    const { isMobile } = this.props;
    return (
      <SigninContainer>
        <Helmet>
          <title>Signin</title>
          <meta name="description" content="Description of Signin" />
        </Helmet>
        <div className="wrapper">
          <div className="leftArticle">
            <div className="navigation">
              {!isMobile ? (
                <div className="logo">
                  <img src={logoIMG} alt="" title="" />
                </div>
              ) : (
                <RegistorNav />
              )}
            </div>
            <div className="content">
              {/* {false && !isMobile ? <Stapes /> : null} */}
              <div className="blackBox">
                <SigninForm submitFun={this.submitMobile} />
                {/* {undefined ? <Authentication /> : null}
                {undefined ? <RegistorFrom /> : null}
                <Registration /> */}
              </div>
            </div>
          </div>
          {!isMobile ? (
            <div className="rightArticle">
              <img src={splashIMG} alt="" title="" />
            </div>
          ) : null}
        </div>
      </SigninContainer>
    );
  }
}

Signin.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isMobile: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  signin: makeSelectSignin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 768,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'signin', reducer });

export default compose(
  withReducer,
  withConnect,
)(withSizes(mapSizesToProps)(Signin));
