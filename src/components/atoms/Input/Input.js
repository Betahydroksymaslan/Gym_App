import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from './Input.style';

const Input = ({register, name, ...rest}) => {
  return <StyledInput {...register(name)} {...rest} />;
};

Input.propTypes = {};

export default Input;
