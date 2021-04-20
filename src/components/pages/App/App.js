import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { AppWrapper } from './App.style';
import Registration from 'components/pages/Registration/Registration';
import Login from 'components/pages/Login/Login';
import Home from 'components/pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SIGNIN, SIGNUP, HOME } from 'constants/routes';
import { AuthProvider } from 'store/AuthContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <AuthProvider>
          <AppWrapper>
            <Switch>
              <Route exact path={HOME} component={Home} />

              <Route path={SIGNUP} component={Registration} />
              <Route path={SIGNIN} component={Login} />
            </Switch>
          </AppWrapper>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
