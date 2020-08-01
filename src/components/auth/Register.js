import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './auth.module.css';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'User already exists') {
      setAlert(error, 'danger');
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error, props.history, isAuthenticated]);

  const [user, setUser] = useState({
    userName: '',
    email: '',
    password: '',
    password2: '',
    roleId: 1,
  });

  const { userName, email, password, password2, roleId } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (userName === '' || email === '' || password === '') {
      setAlert('Can not be empty', 'danger');
    } else if (password !== password2) {
      setAlert('Password should be same', 'danger');
    } else {
      register({
        userName,
        email,
        password,
        roleId,
      });

      console.log('Register');
    }
  };
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <h2>Register</h2>
        {/* <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className={styles.profileImgCard}
        /> */}
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Username</label>
            <input
              type="text"
              name="userName"
              value={userName}
              onChange={onChange}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              required
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              minLength="6"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="password2">Confirm Password</label>
            <input
              type="password"
              name="password2"
              value={password2}
              onChange={onChange}
              minLength="6"
            ></input>
          </div>
          <div className="form-group" style={{ display: 'none' }}>
            <label htmlFor="role">Role</label>
            <input
              type="text"
              name="roleId"
              value={roleId}
              onChange={onChange}
            ></input>
          </div>

          <input type="submit" value="Register" className={styles.btn}></input>
          <div>
            <span>Already have an account?</span>
            <Link to="/login" className={styles.toggle}>
              Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
