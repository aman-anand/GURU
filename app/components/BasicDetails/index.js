/* eslint-disable camelcase */
/**
 *
 * RegistorFrom
 *
 */

import React, { Fragment, memo } from 'react';
import PropTypes from 'prop-types';
import withSizes from 'react-sizes';
import Button from '@material-ui/core/Button';
// import uploadIcon from '../../images/uploadIcon.svg';
// import cameraIcon from '../../images/cameraIcon.svg';
import activeImg from '../../images/active.png';
import { BasicDetailsContainer } from './style';

class BasicDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      required: false,
    };
  }

  componentDidMount() {
    const { formData, aadharImageUrl, profileImage } = this.props;
    const { fName, lName, phone, number, aadharNumber, pincode, rollNumber } =
      formData || {};
    this.setState({
      fName,
      lName,
      phone,
      number,
      aadharNumber,
      pincode,
      rollNumber,
      aadharImageUrl:
        aadharImageUrl || window.localStorage.getItem('aadharImageUrl'),
      profileImage: profileImage || window.localStorage.getItem('profileImage'),
    });
  }

  onChangeAction = eve => {
    const { name, value } = eve.target;
    this.setState({
      [name]: value,
    });
  };

  submitForm = () => {
    const { submitRegistration } = this.props;
    const { fName, lName, phone, required, pincode, profileImage } =
      this.state || {};
    const jsonOBJ = {
      fName,
      lName,
      phone,
      pincode,
      profileImage,
    };
    if (!required && !(fName && lName && phone && pincode)) {
      this.setState({
        required: true,
      });
    } else {
      submitRegistration(jsonOBJ);
    }
  };

  uploadFile = event => {
    const { uploadAction } = this.props;
    uploadAction(event.target.name, event.target.files[0]);
  };

  render() {
    const { isMobile, responseError } = this.props;
    const {
      required,
      fName,
      lName,
      phone,
      number,
      pincode,
      profileImage,
      rollNumber,
    } = this.state;
    const { message, success } = responseError || {};
    window.console.log('STATE', this.state);
    return (
      <BasicDetailsContainer>
        {!isMobile ? (
          <Fragment>
            <h4 className="_hText">UPDATE YOUR BASIC DETAILS</h4>
            <span className="_decText">Start learning marketing courses</span>
          </Fragment>
        ) : null}
        <div className="_wrapper">
          {profileImage ? (
            <div className="picWrapper">
              <label className="profilePic" htmlFor="fileupload">
                <input
                  name="profileImage"
                  type="file"
                  id="fileupload"
                  onChange={e => this.uploadFile(e)}
                />
                <i className="_proPic">
                  <img src={profileImage} alt="" title="" />
                </i>
                <div className="cam">
                  {profileImage ? (
                    <img src={activeImg} alt="" title="" />
                  ) : (
                    <svg
                      width="15"
                      height="14"
                      viewBox="0 0 15 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 1.55556H3.75L5.25 0H9.75L11.25 1.55556H13.5C13.8978 1.55556 14.2794 1.71944 14.5607 2.01117C14.842 2.30289 15 2.69855 15 3.11111V12.4444C15 12.857 14.842 13.2527 14.5607 13.5444C14.2794 13.8361 13.8978 14 13.5 14H1.5C1.10218 14 0.720644 13.8361 0.43934 13.5444C0.158035 13.2527 0 12.857 0 12.4444V3.11111C0 2.69855 0.158035 2.30289 0.43934 2.01117C0.720644 1.71944 1.10218 1.55556 1.5 1.55556ZM7.5 3.88889C6.50544 3.88889 5.55161 4.29861 4.84835 5.02792C4.14509 5.75723 3.75 6.74638 3.75 7.77778C3.75 8.80918 4.14509 9.79833 4.84835 10.5276C5.55161 11.2569 6.50544 11.6667 7.5 11.6667C8.49456 11.6667 9.44839 11.2569 10.1517 10.5276C10.8549 9.79833 11.25 8.80918 11.25 7.77778C11.25 6.74638 10.8549 5.75723 10.1517 5.02792C9.44839 4.29861 8.49456 3.88889 7.5 3.88889ZM7.5 5.44444C8.09674 5.44444 8.66903 5.69028 9.09099 6.12786C9.51295 6.56545 9.75 7.15894 9.75 7.77778C9.75 8.39662 9.51295 8.99011 9.09099 9.42769C8.66903 9.86528 8.09674 10.1111 7.5 10.1111C6.90326 10.1111 6.33097 9.86528 5.90901 9.42769C5.48705 8.99011 5.25 8.39662 5.25 7.77778C5.25 7.15894 5.48705 6.56545 5.90901 6.12786C6.33097 5.69028 6.90326 5.44444 7.5 5.44444Z"
                        fill="white"
                      />
                    </svg>
                  )}
                </div>
              </label>
              <div className="rollNo">
                <i>
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5534 0H1.32303C0.975815 0.0135869 0.645969 0.181837 0.400313 0.470667C0.154656 0.759498 0.0115559 1.14731 0 1.55556L0 12.4444C0.0115559 12.8527 0.154656 13.2405 0.400313 13.5293C0.645969 13.8182 0.975815 13.9864 1.32303 14H14.5534C14.9006 13.9864 15.2304 13.8182 15.4761 13.5293C15.7217 13.2405 15.8648 12.8527 15.8764 12.4444V1.55556C15.8648 1.14731 15.7217 0.759498 15.4761 0.470667C15.2304 0.181837 14.9006 0.0135869 14.5534 0ZM14.5534 12.4444H1.32303V1.55556H14.5534V12.4444ZM9.26124 10.8889V9.91667C9.26124 8.62556 7.05177 7.97222 5.95365 7.97222C4.85553 7.97222 2.64607 8.62556 2.64607 9.91667V10.8889H9.26124ZM5.95365 3.11111C5.62656 3.11111 5.30682 3.22515 5.03485 3.43881C4.76289 3.65247 4.55092 3.95615 4.42575 4.31145C4.30058 4.66675 4.26782 5.05771 4.33164 5.4349C4.39545 5.81208 4.55296 6.15855 4.78424 6.43049C5.01553 6.70242 5.31021 6.88761 5.63101 6.96264C5.95182 7.03767 6.28434 6.99916 6.58653 6.85199C6.88872 6.70482 7.14701 6.45559 7.32873 6.13583C7.51045 5.81607 7.60744 5.44013 7.60744 5.05556C7.60744 4.80021 7.56467 4.54736 7.48156 4.31145C7.39845 4.07554 7.27663 3.86118 7.12306 3.68063C6.96949 3.50007 6.78718 3.35684 6.58653 3.25912C6.38588 3.16141 6.17083 3.11111 5.95365 3.11111ZM9.92275 5.44444V7.77778H12.5688V5.44444H9.92275Z"
                      fill="white"
                    />
                  </svg>
                </i>
                <span>ROLL NO: {rollNumber}</span>
              </div>
            </div>
          ) : null}
          <div className="_twoComumnWrapper">
            <input
              name="fName"
              type="text"
              value={fName}
              placeholder="First name *"
              onChange={e => this.onChangeAction(e)}
              required={required}
            />
            <input
              name="lName"
              type="text"
              value={lName}
              placeholder="Last name *"
              onChange={e => this.onChangeAction(e)}
              required={required}
            />
          </div>
          <div className="_twoRowWrapper">
            <input
              name="phone"
              type="tel"
              value={phone || number}
              placeholder="Phone Number *"
              onChange={e => this.onChangeAction(e)}
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              disabled
              required={required}
            />
          </div>
          {/* <input
            name="aadharNumber"
            type="text"
            value={aadharNumber}
            placeholder="Aadhar Card Number *"
            onChange={e => this.onChangeAction(e)}
            pattern="[0-9]{4}[0-9]{4}[0-9]{4}"
            required={required} 
          /> */}
          <input
            name="pincode"
            type="text"
            value={pincode}
            placeholder="Pincode *"
            onChange={e => this.onChangeAction(e)}
            pattern="[0-9]{6}"
            required={required}
          />
          {/* <div className="uploadField">
            <label htmlFor="aadharImageUpload">
              <input
                name="aadharImageUrl"
                type="file"
                id="aadharImageUpload"
                onChange={e => this.uploadFile(e)}
              />
              <div className="_leftUpload">
                {aadharImageUrl ? (
                  <span className="uploded">
                    <img src={activeImg} alt="" title="" />
                  </span>
                ) : null}
                <img src={uploadIcon} alt="" title="" />
              </div>
              <div className="_rightUpload">
                <span className="uploadText">
                  <i>
                    <img src={cameraIcon} alt="" title="" />
                  </i>
                  Upload
                </span>
                <span> Aadhar Card</span>
              </div>
            </label>
          </div> */}
          {!success ? <span className="error">{message}</span> : null}
          <Button
            variant="contained"
            color="primary"
            type="button"
            onClick={this.submitForm}
          >
            SAVE DETAILS
          </Button>
        </div>
      </BasicDetailsContainer>
    );
  }
}

BasicDetails.propTypes = {
  isMobile: PropTypes.bool,
  submitRegistration: PropTypes.func,
  responseError: PropTypes.object,
  formData: PropTypes.object,
  uploadAction: PropTypes.func,
  aadharImageUrl: PropTypes.string,
  profileImage: PropTypes.string,
};

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 768,
});

export default memo(withSizes(mapSizesToProps)(BasicDetails));
