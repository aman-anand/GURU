/**
 *
 * Chart
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import makeSelectChart from './selectors';
import reducer from './reducer';
import ChartBord from '../../components/ChartBord/Loadable';

// NOTE: Style
import { ChartContainer } from './style';

export function Chart() {
  useInjectReducer({ key: 'chart', reducer });

  return (
    <ChartContainer>
      <Helmet>
        <title>Chart</title>
        <meta name="description" content="Description of Chart" />
      </Helmet>
      <ChartBord />
    </ChartContainer>
  );
}

Chart.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  chart: makeSelectChart(),
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

export default compose(
  withConnect,
  memo,
)(Chart);
