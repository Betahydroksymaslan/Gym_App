import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { AppWrapper } from './App.style';
import Registration from 'components/pages/Registration/Registration';
import Login from 'components/pages/Login/Login';
import Home from 'components/pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SIGNIN, SIGNUP, HOME, TRAININGS } from 'constants/routes';
import { AuthProvider } from 'store/AuthContext';
import PrivateRoute from 'helpers/PrivateRoute';
import Trainings from 'components/pages/Trainings/Trainings';
import { DatabaseProvider } from 'store/databaseContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <AuthProvider>
          <DatabaseProvider>
            <AppWrapper>
              <Switch>
                <PrivateRoute exact path={HOME} component={Home} />
                <Route path={SIGNUP} component={Registration} />
                <Route path={SIGNIN} component={Login} />
                <PrivateRoute path={TRAININGS} component={Trainings} />
              </Switch>
            </AppWrapper>
          </DatabaseProvider>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
