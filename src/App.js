import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/layout/navbar/Navbar';
import Alert from './components/layout/Alert';
import Profile from './components/pages/Profile';
import Home from './components/pages/Home';

import Register from './components/auth/Register';
import Login from './components/auth/Login';
import setAuthToken from './utils/setAuthToken';

import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

import PrivateRoute from './components/routing/PrivateRoute';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <AlertState>
        <Router>
          <Fragment>
            <Navbar title="Air Handyman" icon="fas fa-hands-helping"></Navbar>
            <div className="container">
              <Alert></Alert>
              <Switch>
                <PrivateRoute path="/profile" exact component={Profile} />
                <Route path="/" exact component={Home} />
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact component={Login} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </AlertState>
    </AuthState>
  );
};

export default App;
