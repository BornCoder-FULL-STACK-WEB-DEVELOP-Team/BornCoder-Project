import React, { useContext, useEffect } from 'react';

import AuthContext from '../../../context/auth/authContext';

const MyTask = (props) => {
  const authContext = useContext(AuthContext);

  const { loadUser, user, isAuthenticated } = authContext;

  const { userName, email, userId } = user;

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div style={{ marginTop: '60px' }}>
      user id: {userId} user name: {userName}
    </div>
  );
};

export default MyTask;
