import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useAuth } from 'store/AuthContext';
import { HomeWrapper, StyledLink } from './Home.style';
import Button from 'components/atoms/Button/Button';
import { TRAININGS } from 'constants/routes';
import gsap from 'gsap';

const Home = (props) => {
  const { logout } = useAuth();
  const _isMounted = useRef(true);
  let page = useRef(null);

  const handleLogout = async () => {
    try {
      if (_isMounted.current) {
        await logout();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(page, { duration: 0.3, autoAlpha: 0 }, { autoAlpha: 1 });
    return () => (_isMounted.current = false);
  }, []);

  return (
    <HomeWrapper ref={el => page = el}>
      <StyledLink to={TRAININGS}>
        <Button wider>Moje treningi</Button>
      </StyledLink>

      <StyledLink to={TRAININGS}>
        <Button wider>Ustawienia</Button>
      </StyledLink>
      <StyledLink to={TRAININGS}>
        <Button wider onClick={handleLogout}>
          Wyloguj się
        </Button>
      </StyledLink>
    </HomeWrapper>
  );
};

Home.propTypes = {};

export default Home;
