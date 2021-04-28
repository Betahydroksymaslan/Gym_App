import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useAuth } from 'store/AuthContext';
import { HomeWrapper, StyledLink } from './Home.style';
import Button from 'components/atoms/Button/Button';
import { TRAININGS } from 'constants/routes';

const Home = (props) => {
  const { logout } = useAuth();
  const _isMounted = useRef(true);

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
    return () => (_isMounted.current = false);
  }, []);

  return (
    <HomeWrapper>
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
