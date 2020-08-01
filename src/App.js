import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/layout/navbar/Navbar";
import Alert from "./components/layout/Alert";
import Profile from "./components/pages/Profile";
import Home from "./components/pages/Home";
import MyTask from "./components/pages/MyTask";
import BrowseTask from "./components/pages/BrowseTask/BrowseTask";
import Notification from "./components/pages/Notification";
import PostTask from "./components/pages/PostTask/PostTask";

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import setAuthToken from "./utils/setAuthToken";

import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";

import PrivateRoute from "./components/routing/PrivateRoute";

// if (localStorage.token) {
//   setAuthToken(localStorage.token);
// }

const App = () => {
  return (
    <AuthState>
      <AlertState>
        <Router>
          <div>
            <Navbar title="Air Handyman" icon="fas fa-hands-helping"></Navbar>
            <div className="container">
              <Alert></Alert>
              <Switch>
                <PrivateRoute path="/profile" exact component={Profile} />
                <PrivateRoute path="/post-a-task" exact component={PostTask} />
                <PrivateRoute path="/my-task" exact component={MyTask} />
                <PrivateRoute path="/my-task/:id" exact component={MyTask} />
                <PrivateRoute
                  path="/notification"
                  exact
                  component={Notification}
                />

                <Route path="/" exact component={Home} />
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact component={Login} />
                <Route path="/browse-tasks" exact component={BrowseTask} />
                <Route path="/browse-tasks/:id" exact component={BrowseTask} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </AuthState>
  );
};

export default App;
