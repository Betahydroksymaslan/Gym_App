import React from 'react';
import PropTypes from 'prop-types';
import { useAuth } from 'store/AuthContext';
import { HomeWrapper, StyledLink } from './Home.style';
import Button from 'components/atoms/Button/Button';
import { TRAININGS } from 'constants/routes';

const Home = (props) => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

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
