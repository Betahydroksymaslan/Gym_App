import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  PageWrapper,
  Header,
  Text,
  StyledLink,
  LinkWrapper,
  ErrorMessage,
  ServerErrorMessage,
} from './Registration.style';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Form from 'components/organisms/Form/Form';
import { SIGNIN, HOME } from 'constants/routes';
import { useAuth } from 'store/AuthContext';
import { useHistory } from 'react-router-dom';
import Loader from 'components/atoms/Loader/Loader';
import { db } from 'assets/firebase/firebase';

const Registration = (props) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const _isMounted = useRef(true);

  const { signup } = useAuth();

  const addUserToDB = async (user) => {
    await db.ref(`/users/${user.user.uid}`).set({
      email: user.user.email,
      uid: user.user.uid,
    });
  };

  const onSubmit = async (data) => {
    try {
      if (_isMounted.current) {
        setLoading(true);
        let response = await signup(data.email, data.password);
        console.log(response);
        await addUserToDB(response);
        history.push(HOME);
      }
    } catch {
      setErrorMessage('Ups, coś poszło nie tak :/');
    }
    setLoading(false);
  };

  useEffect(() => {
    return () => (_isMounted.current = false);
  }, []);

  return (
    <PageWrapper>
      <Header>Rejestracja</Header>
      {errorMessage && <ServerErrorMessage>{errorMessage}</ServerErrorMessage>}
      <Form onSubmit={onSubmit}>
        <Input placeholder="email" type="email" name="email" />
        {/*errors.email && <ErrorMessage>pole wymagane</ErrorMessage>*/}
        <Input placeholder="hasło" type="password" name="password" />
        {/*errors.password && <ErrorMessage>pole wymagane</ErrorMessage>*/}
        <Button disabled={loading} type="submit">
          Zarejestruj się
        </Button>
      </Form>
      <LinkWrapper>
        <Text>Masz już konto?</Text>
        <StyledLink to={SIGNIN}>Zaloguj się</StyledLink>
      </LinkWrapper>
      {loading && <Loader />}
    </PageWrapper>
  );
};

Registration.propTypes = {};

export default Registration;
