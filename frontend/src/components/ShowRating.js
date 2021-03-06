import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Material-UI

const StyledDiv = styled('div')`
    height: 45px,
    width: 100px,
    text-align: center,
    padding: 10px,
    vertical-align: middle;
    display: inline;
`;

const ShowRating = ({ averageScore, numberOfRatings }) => (
  <StyledDiv>
    {Math.round(averageScore * 10) / 10}/5 from {numberOfRatings} ratings
  </StyledDiv>
);

ShowRating.propTypes = {
  averageScore: PropTypes.number,
  numberOfRatings: PropTypes.number,
};

ShowRating.defaultProps = {
  averageScore: 0,
  numberOfRatings: 0,
};

export default ShowRating;
