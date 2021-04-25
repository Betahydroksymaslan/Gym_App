import React from 'react';
import PropTypes from 'prop-types';
import {
  ProgressBarMain,
  ProgressBarBall,
  ProgressBarWrapper,
} from './ProgressBar.style';

const ProgressBar = ({ step }) => {
  return (
    <ProgressBarWrapper>
      <ProgressBarBall  active>1</ProgressBarBall>
      <ProgressBarMain active={step === 2 || step === 3}></ProgressBarMain>
      <ProgressBarBall  active={step === 2 || step === 3}>2</ProgressBarBall>
      <ProgressBarMain active={step === 3}></ProgressBarMain>
      <ProgressBarBall active={step === 3} >3</ProgressBarBall>
    </ProgressBarWrapper>
  );
};

ProgressBar.propTypes = {};

export default ProgressBar;
