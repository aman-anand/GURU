/**
 *
 * Setting
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import withSizes from 'react-sizes';
import Button from '@material-ui/core/Button';
import injectReducer from 'utils/injectReducer';
import makeSelectSetting from './selectors';
import reducer from './reducer';
import Header from '../../components/Header/Loadable';
import { language } from '../../services/CommonSetterGetter';
import { SettingContainer } from './style';

export class Setting extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      language: 'eng',
    };
  }

  languageChange = e => {
    // console.log('EEE', e.target.value);
    this.setState({
      language: e.target.value,
    });
  };

  render() {
    return (
      <SettingContainer>
        <Helmet>
          <title>Setting</title>
          <meta name="description" content="Description of Setting" />
        </Helmet>
        <Header />
        <div className="settingWrapper">
          <div className="heading">
            <div className="hleft">
              <i>
                <svg
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.179 14.79L0 9.3228H1.8258V0H18.2614V2.5806H4.301V9.3228H6.1268L3.179 14.79ZM22.1272 12.7092H19.159L24.65 0H26.8498L32.2898 12.7228H29.2842L28.152 9.928H23.222L22.1272 12.7092ZM24.1672 7.548H27.2272L25.6904 3.5462L24.1672 7.548ZM7.65 20.57H9.1936V24.7622C8.8303 24.9456 8.42744 25.0366 8.0206 25.0274C7.56705 25.0199 7.12403 24.8895 6.7388 24.65C6.56116 24.4955 6.36466 24.3641 6.154 24.259C6.50041 23.9252 6.77292 23.5225 6.95389 23.0768C7.13486 22.6311 7.22027 22.1524 7.2046 21.6716C7.2046 19.533 5.8446 18.0982 3.8046 18.0982C3.19043 18.0892 2.58465 18.2415 2.04772 18.5398C1.51078 18.8381 1.06146 19.272 0.7446 19.7982L0.6494 19.958L2.3086 21.811L2.4752 21.4914C2.57819 21.2382 2.75401 21.0214 2.98039 20.8682C3.20676 20.7151 3.4735 20.6326 3.7468 20.6312C4.403 20.6312 4.8144 21.114 4.8144 21.8892C4.8144 22.4502 4.6376 23.392 3.4544 23.392H2.6316V25.9216H3.8148C4.811 25.9216 5.3142 26.3704 5.3142 27.2578C5.3142 27.9854 4.947 28.7606 3.9202 28.7606C2.737 28.7606 2.091 27.7406 1.921 27.4006L1.751 27.0878L0 29.07L0.1054 29.2298C0.513297 29.8687 1.07581 30.3944 1.74086 30.7581C2.40591 31.1218 3.15199 31.3119 3.91 31.3106C6.1404 31.3106 7.7078 29.6752 7.7622 27.3156C8.22835 27.4767 8.7327 27.4909 9.2072 27.3564V32.3H11.713V20.57H14.11V32.3H16.6158V20.57H18.5402V18.19H7.65V20.57ZM26.1698 21.862H27.9956V29.41H19.7268V32.3H30.4708V21.862H32.3L29.1176 15.7182L26.1698 21.862Z"
                    fill="#403F3F"
                  />
                </svg>
              </i>
            </div>
            <div className="hright">
              <span>UPDATE LANGUAGE</span>
              <span>UPDATE LANGUAGE (in Hindi)</span>
            </div>
          </div>
          <p style={{ textAlign: 'center' }}>
            {language().txt_choose_language_convenience}
          </p>
          <div className="radioWrapper">
            <label htmlFor="eng">
              <input
                type="radio"
                name="language"
                id="eng"
                value="eng"
                checked={!!this.state.language}
                onChange={e => this.languageChange(e)}
              />
              <div className="radioBox">
                <span className="title">English</span>
                <span className="icon" />
              </div>
            </label>
            <label htmlFor="hin">
              <input
                type="radio"
                name="language"
                id="hin"
                value="hin"
                checked={!!this.state.language}
                onChange={e => this.languageChange(e)}
              />
              <div className="radioBox">
                <span className="title">{language().txt_hindi}</span>
                <span className="icon" />
              </div>
            </label>
            <label htmlFor="mh">
              <input
                type="radio"
                name="language"
                id="mh"
                value="mh"
                onChange={e => this.languageChange(e)}
                checked={!!this.state.language}
              />
              <div className="radioBox">
                <span className="title">{language().txt_marathi}</span>
                <span className="icon" />
              </div>
            </label>
          </div>
          <div className="buttons">
            <Button
              variant="contained"
              color="primary"
              className="updateButton"
            >
              {language().txt_update_language}
            </Button>
          </div>
        </div>
      </SettingContainer>
    );
  }
}

Setting.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  setting: makeSelectSetting(),
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
const withReducer = injectReducer({ key: 'setting', reducer });

export default compose(
  withReducer,
  withConnect,
  memo,
)(withSizes(mapSizesToProps)(Setting));
