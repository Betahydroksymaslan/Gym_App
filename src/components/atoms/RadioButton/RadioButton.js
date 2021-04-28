import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './RadioButton.style';

const RadioButton = ({ register, name, ...rest }) => {
  return <StyledButton {...register(name, { required: true })} {...rest} />;
};

RadioButton.propTypes = {};

export default RadioButton;
