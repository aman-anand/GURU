import React from 'react';
import PropTypes from 'prop-types';
import { redirectToDashboard } from '../hooks';

export default function checkAuthenticated(Component) {
  class AuthenticatedRoute extends React.Component {
    static contextTypes = {
      store: PropTypes.object,
      router: PropTypes.object,
      location: PropTypes.object,
    };

    componentWillMount() {
      redirectToDashboard(this.props);
    }

    componentWillReceiveProps(nextProps) {
      // not 100% sure about using `locatoin.key` to distinguish between routes
      if (nextProps.location.key !== this.props.location.key) {
        redirectToDashboard(nextProps);
      }
    }

    render() {
      return React.createElement(Component, { ...this.props });
    }
  }

  AuthenticatedRoute.propTypes = {
    location: PropTypes.object,
  };

  return AuthenticatedRoute;
}
