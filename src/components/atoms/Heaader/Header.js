import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeader } from './Header.style';

const Header = ({ children, ...rest }) => {
  return <StyledHeader {...rest}>{children}</StyledHeader>;
};

Header.propTypes = {};

export default Header;
