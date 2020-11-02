/**
 *
 * Feedback
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import withSizes from 'react-sizes';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import injectReducer from 'utils/injectReducer';
import Button from '@material-ui/core/Button';
import makeSelectFeedback from './selectors';
import reducer from './reducer';
import Header from '../../components/Header/Loadable';
import OptionalHeader from '../../components/OptionalHeader';
import { submitReviewAction } from './actions';
import { FeedbackContainer } from './style';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export class Feedback extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      feedback: '',
      snake: false,
    };
  }

  submitForm = () => {
    const { feedback } = this.state;
    const ID = window.localStorage.getItem('id');
    const JSON = {
      review: feedback,
      addedForId: ID,
      typeOf: 'feedback',
      reviewType: 'text',
    };
    if (feedback.length > 10) {
      this.props.dispatch(submitReviewAction(JSON)).then(() => {
        window.location.reload();
        this.setState({
          snake: true,
        });
      });
    }
  };

  handleClose = () => {
    this.setState({
      snake: false,
    });
  };

  onChnageText = values => {
    this.setState({
      feedback: values,
    });
    // window.console.log('Value', values);
  };

  render() {
    const { isMobile } = this.props || {};
    const { feedback } = this.state || {};
    return (
      <FeedbackContainer>
        <Helmet>
          <title>Feedback</title>
          <meta name="description" content="Description of Feedback" />
        </Helmet>
        {!isMobile ? (
          <Header title="SUBMIT A FEEDBACK" />
        ) : (
          <OptionalHeader title="SUBMIT A FEEDBACK" goTo="/home" />
        )}
        <div className="wrapper">
          <div className="container">
            <div className="cData">
              <i>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.6 0H2.4C1.08 0 0 1.08 0 2.4V16.8C0 18.12 1.08 19.2 2.4 19.2H7.2V22.8C7.2 23.52 7.68 24 8.4 24H9C9.24 24 9.6 23.88 9.84 23.64L14.28 19.2H21.6C22.92 19.2 24 18.12 24 16.8V2.4C24 1.08 22.92 0 21.6 0ZM10.8 13.2H6V8.16L7.56 4.8H9.96L8.28 8.4H10.8V13.2ZM18 13.2H13.2V8.16L14.76 4.8H17.16L15.48 8.4H18V13.2Z"
                    fill="white"
                  />
                </svg>
              </i>
              <h4>FEEDBACK</h4>
              <p>
                We would love to know what you think about us. Please write to
                us and share your feedback.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="feedbackform">
            <textarea
              type="text"
              placeholder="Write your feedback here"
              onChange={e => this.onChnageText(e.target.value)}
            />
            {this.state.success && this.state.message ? (
              <span>{this.state.message}</span>
            ) : null}
            <Button
              variant="contained"
              color="primary"
              type="button"
              onClick={this.submitForm}
              disabled={feedback.length < 10}
            >
              SUBMIT FEEDBACK
            </Button>
          </div>
        </div>
        <Snackbar
          open={this.state.snake}
          autoHideDuration={2000}
          onClose={this.handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert
            onClose={this.handleClose}
            severity="success"
            className="successAlert"
          >
            Feedback submit successfully
          </Alert>
        </Snackbar>
      </FeedbackContainer>
    );
  }
}

Feedback.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  feedback: makeSelectFeedback(),
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

const withReducer = injectReducer({ key: 'feedback', reducer });

export default compose(
  withReducer,
  withConnect,
  memo,
)(withSizes(mapSizesToProps)(Feedback));
