import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { AppWrapper } from './App.style';
import Registration from 'components/pages/Registration/Registration';
import Login from 'components/pages/Login/Login';
import Home from 'components/pages/Home/Home';
import Training from 'components/pages/Training/Training';
import DoTraining from 'components/pages/DoTraining/DoTraining';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SIGNIN, SIGNUP, HOME, TRAININGS, DO_TRAINING } from 'constants/routes';
import { AuthProvider } from 'store/AuthContext';
import PrivateRoute from 'helpers/PrivateRoute';
import Trainings from 'components/pages/Trainings/Trainings';
import { DatabaseProvider } from 'store/DatabaseContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <AuthProvider>
          <DatabaseProvider>
            <AppWrapper>
              <Switch>
                <Route path={SIGNUP} component={Registration} />
                <Route path={SIGNIN} component={Login} />
                <PrivateRoute exact path={HOME} component={Home} />
                <PrivateRoute exact path={TRAININGS} component={Trainings} />
                <PrivateRoute
                  exact
                  path={`${TRAININGS}/:id`}
                  component={Training}
                />
                <PrivateRoute
                  exact
                  path={`${DO_TRAINING}/:training/:day`}
                  component={DoTraining}
                />
              </Switch>
            </AppWrapper>
          </DatabaseProvider>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
