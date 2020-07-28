import React, { useContext, useEffect } from 'react';

import AuthContext from '../../context/auth/authContext';

const Profile = () => {
  const authContext = useContext(AuthContext);

  const { loadUser, user } = authContext;

  const { userName, email } = user;

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div style={{ marginTop: '60px' }}>
      {userName}
      {email}
    </div>
  );
};

export default Profile;
