import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import PostButton from "./components/PostButton/PostButton";
import BecomeTasker from "./components/BecomeTasker/BecomeTasker";
import PostTask from "./components/PostTask/PostTask";
import BrowseTask from "./components/BrowseTask/BrowseTask";
import MyTask from "./components/MyTask/MyTask";

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand  bg-light">
          <Link to={"/"} className="navbar-brand">
            Handy Booking
          </Link>
          <div className="navbar-nav mr-auto">
            {/* <li className="nav-item">
              <Link to={'/home'} className="nav-link">
                Home
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to={"/post-task"} className="nav-link">
                <PostButton />
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/become-tasker"} className="nav-link">
                <BecomeTasker />
              </Link>
            </li>

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/mytask"} className="nav-link">
                  My Task
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/browse-task"} className="nav-link">
                  Browse tasks
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="page-layout">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path="/post-task" component={PostTask} />
            <Route path="/browse-task" component={BrowseTask} />
            <Route path="/become-tasker" component={BecomeTasker} />
            {/* <Route path="/mytask" component={MyTask} /> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
