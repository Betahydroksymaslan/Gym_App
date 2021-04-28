import React from 'react';
import PropTypes from 'prop-types';
import {StyledSelect} from './Select.style';

const Select = ({ register, options, name, ...rest }) => {
  return (
    <StyledSelect {...register(name)} {...rest}>
      {options.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </StyledSelect>
  );
};

Select.propTypes = {};

export default Select;
