import React from 'react';
import PropTypes from 'prop-types';
import { StyledLink } from './Link.style';

const Link = ({ children, to, ...rest }) => {
  return <StyledLink to={to} {...rest}>{children}</StyledLink>;
};

Link.propTypes = {};

export default Link;
