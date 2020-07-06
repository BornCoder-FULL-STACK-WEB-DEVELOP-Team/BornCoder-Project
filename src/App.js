import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/Login';
import Register from './components/register';
import Navigation from './components/Layout/components/Header/components/Navigation';
import AuthService from './services/auth.service';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes('ROLE_MODERATOR'));
      setShowAdminBoard(user.roles.includes('ROLE_ADMIN'));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <Router>
      <div>
        <NavBar />
      </div>

      <div>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
