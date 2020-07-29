import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './auth.module.css';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/auth/authContext';

const Login = (props) => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/my-task');
    }

    if (error === 'User not exist') {
      setAlert(error, 'danger');
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error, props.history, isAuthenticated]);

  const [user, setUser] = useState({
    userName: '',
    password: '',
  });

  const { userName, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (userName === '' || password === '') {
      setAlert('Can not be empty', 'danger');
    } else {
      login({ userName, password });
    }
  };
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <h2>Login</h2>
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className={styles.profileImgCard}
        />

        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              name="userName"
              value={userName}
              onChange={onChange}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
            ></input>
          </div>

          <Link className={styles.toggle}>Forgot Password?</Link>

          <input type="submit" value="Login" className={styles.btn}></input>
        </form>
      </div>
    </div>
  );
};

export default Login;
