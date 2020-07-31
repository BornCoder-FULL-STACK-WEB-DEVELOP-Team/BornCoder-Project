import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/layout/Navigation/navbar/Navbar';
import Alert from './components/layout/Alert';
import Profile from './components/pages/Profile';
import Home from './components/pages/Home';
import MyTask from './components/pages/MyTask';
import Notification from './components/pages/Notification';

import Register from './components/auth/Register';
import Login from './components/auth/Login';
import setAuthToken from './utils/setAuthToken';

import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

import PrivateRoute from './components/routing/PrivateRoute';
import BrowseTasks from './components/pages/BrowseTasks';
import Toolbar from './components/layout/Navigation/Toolbar/Toolbar';

import SideDrawer from './components/layout/Navigation/SideDrawer/SideDrawer';

// if (localStorage.token) {
//   setAuthToken(localStorage.token);
// }

const App = () => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  return (
    <AuthState>
      <AlertState>
        <Router>
          <Fragment>
            <Toolbar drawerToggleClicked={sideDrawerToggleHandler}>
              {/* <Navbar title="Air Handyman" icon="fas fa-hands-helping"></Navbar> */}
            </Toolbar>
            <SideDrawer
              open={showSideDrawer}
              closed={sideDrawerClosedHandler}
            />
            <div className="container">
              <Alert></Alert>
              <Switch>
                <PrivateRoute exact path="/profile" component={Profile} />
                <PrivateRoute exact path="/my-task" component={MyTask} />
                <PrivateRoute
                  path="/notification"
                  exact
                  component={Notification}
                />
                <Route path="/" exact component={Home} />
                <Route path="/register" exact component={Register} />
                <Route path="/browse-tasks" exact component={BrowseTasks} />
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
