import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Circle, MenuWrapper, MenuItem } from './OptionsCirc.style';

const OptionsCirc = ({ data }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  const renderOptions = data.map((item) => (
    <MenuItem key={item}>{item}</MenuItem>
  ));
  const menu = useRef(null);

  const handleClick = (e) => {
    if (menu.current.contains(e.target)) {
      openMenu();
    } else if (!menu.current.contains(e.target)) {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <Wrapper ref={menu} onClick={handleClick}>
      {isMenuOpen ? (
        <MenuWrapper>{data && renderOptions}</MenuWrapper>
      ) : (
        <Circle />
      )}
    </Wrapper>
  );
};

OptionsCirc.propTypes = {};

export default OptionsCirc;
