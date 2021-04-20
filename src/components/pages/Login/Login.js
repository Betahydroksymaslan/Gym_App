import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  PageWrapper,
  Header,
  Text,
  StyledLink,
  LinkWrapper,
  ErrorMessage,
  ServerErrorMessage,
} from './Login.style';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Form from 'components/organisms/Form/Form';
import { SIGNUP, HOME } from 'constants/routes';
import { useForm } from 'react-hook-form';
import { useAuth } from 'store/AuthContext';
import { useHistory } from 'react-router-dom';
import Loader from 'components/atoms/Loader/Loader';

const Login = (props) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login } = useAuth();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await login(data.email, data.password);
      history.push(HOME);
    } catch {
      setErrorMessage('Login lub hasło są niepoprawne :/');
    }
    setLoading(false);
  };
  return (
    <PageWrapper>
      <Header>Logowanie</Header>
      {errorMessage && <ServerErrorMessage>{errorMessage}</ServerErrorMessage>}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="email"
          type="email"
          {...register('email', { required: true })}
        />
        {errors.email && <ErrorMessage>pole wymagane</ErrorMessage>}
        <Input
          placeholder="hasło"
          type="password"
          {...register('password', { required: true })}
        />
        {errors.password && <ErrorMessage>pole wymagane</ErrorMessage>}
        <Button disabled={loading} type="submit">Zaloguj się</Button>
      </Form>
      <LinkWrapper>
        <Text>Nie masz jeszcze konta?</Text>
        <StyledLink to={SIGNUP}>Zarejestruj się</StyledLink>
      </LinkWrapper>
      {loading && <Loader />}
    </PageWrapper>
  );
};

Login.propTypes = {};

export default Login;
