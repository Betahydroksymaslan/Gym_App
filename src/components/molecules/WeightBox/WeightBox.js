import React from 'react';
import PropTypes from 'prop-types';
import { StyledBox, StyledLabel, IconWrapper, WeightValue } from './WeightBox.style';
import { ReactComponent as ScaleIcon } from 'assets/icons/scaleIcon.svg';

const WeightBox = (props) => {
  return (
    <div>
      <StyledLabel>waga</StyledLabel>
      <StyledBox>
        <IconWrapper>
          <ScaleIcon />
        </IconWrapper>
        <WeightValue>82,8</WeightValue>
      </StyledBox>
    </div>
  );
};

WeightBox.propTypes = {};

export default WeightBox;
