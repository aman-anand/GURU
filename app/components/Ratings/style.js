/* eslint-disable indent */
import styled from 'styled-components';
export const RatingsContainer = styled.div`
  .star-rating {
    display: flex;
    flex-direction: row-reverse;
    font-size: 14px;
    justify-content: space-around;
    padding: 0 5px;
    text-align: center;
  }

  .star-rating input {
    display: none;
  }

  .star-rating label {
    color: #ccc;
    cursor: pointer;
  }

  .star-rating :checked ~ label {
    color: #f90;
  }

  .star-rating label:hover,
  .star-rating label:hover ~ label {
    color: #fc0;
  }
`;
