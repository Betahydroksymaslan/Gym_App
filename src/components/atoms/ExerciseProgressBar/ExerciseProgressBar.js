import React from 'react';
import PropTypes from 'prop-types';
import { BarWrapper, Bar } from './ExerciseProgressBar.style';

const ExerciseProgressBar = ({progress}) => {
  return (
    <BarWrapper>
      <Bar width={progress} />
    </BarWrapper>
  );
};

ExerciseProgressBar.propTypes = {};

export default ExerciseProgressBar;
