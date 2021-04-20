import React from 'react';
import PropTypes from 'prop-types';
import { useAuth } from 'store/AuthContext';
import {HomeWrapper} from './Home.style';
import Button from 'components/atoms/Button/Button';

const Home = (props) => {
  const { logout } = useAuth();

  return (
    <HomeWrapper>
    <Button wider>Moje treningi</Button>
    <Button wider>Ustawienia</Button>
      <Button wider onClick={logout}>Wyloguj się</Button>
    </HomeWrapper>
  );
};

Home.propTypes = {};

export default Home;
