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
} from './Registration.style';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Form from 'components/organisms/Form/Form';
import { SIGNIN } from 'constants/routes';
import { useForm } from 'react-hook-form';
import { useAuth } from 'store/AuthContext';
import { useHistory } from 'react-router-dom';

const Registration = (props) => {
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signup } = useAuth();

  const onSubmit = async (data) => {
    console.log(data.email);
    try {
      await signup(data.email, data.password);
      history.push('/');
    } catch {
      setErrorMessage('Ups, coś poszło nie tak :/');
    }
  };
  return (
    <PageWrapper>
      <Header>Rejestracja</Header>
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
        <Button type="submit">Zarejestruj się</Button>
      </Form>
      <LinkWrapper>
        <Text>Masz już konto?</Text>
        <StyledLink to={SIGNIN}>Zaloguj się</StyledLink>
      </LinkWrapper>
    </PageWrapper>
  );
};

Registration.propTypes = {};

export default Registration;
