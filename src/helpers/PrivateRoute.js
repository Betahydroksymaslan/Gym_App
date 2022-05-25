import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from 'store/AuthContext';
import { SIGNIN } from 'constants/routes';

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to={SIGNIN} />
        );
      }}
    ></Route>
  );
}