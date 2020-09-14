import React from 'react';
// import styled from 'styled-components';
import { LoaderContainer } from './style';

// eslint-disable-next-line react/prefer-stateless-function
class Loader extends React.Component {
  render() {
    return (
      <LoaderContainer id="loaderDiv" className="loader">
        <span className="loader loader-quart"> </span>
      </LoaderContainer>
    );
  }
}

Loader.propTypes = {};

export default Loader;
