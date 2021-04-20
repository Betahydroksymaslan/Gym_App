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
import { SIGNUP } from 'constants/routes';
import { useForm } from 'react-hook-form';
import { useAuth } from 'store/AuthContext';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin } = useAuth();

  const onSubmit = async (data) => {
    try {
      await signin(data.email, data.password);
      history.push('/');
    } catch {
      setErrorMessage('Login lub hasło są niepoprawne :/');
    }
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
        <Button type="submit">Zaloguj się</Button>
      </Form>
      <LinkWrapper>
        <Text>Nie masz jeszcze konta?</Text>
        <StyledLink to={SIGNUP}>Zarejestruj się</StyledLink>
      </LinkWrapper>
    </PageWrapper>
  );
};

Login.propTypes = {};

export default Login;
