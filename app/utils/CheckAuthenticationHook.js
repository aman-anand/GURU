import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { redirectToLogin } from '../hooks';
// import { getPermissions } from '../containers/Signup/service';

export default function checkAuthenticated(Component, Permission) {
  class AuthenticatedRoute extends React.Component {
    static contextTypes = {
      store: PropTypes.object,
      router: PropTypes.object,
      location: PropTypes.object,
    };

    componentDidMount() {
      redirectToLogin(this.props);
    }

    render() {
      const element = React.createElement(Component, { ...this.props });
      return <Fragment>{Permission ? element : <div>Un Authorized Page</div>}</Fragment>;
    }
  }

  AuthenticatedRoute.propTypes = {
    // location: PropTypes.object,
  };

  return AuthenticatedRoute;
}
