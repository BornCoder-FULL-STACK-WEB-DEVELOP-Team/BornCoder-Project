import React, { useContext, useEffect } from "react";

import AuthContext from "../../../context/auth/authContext";

const Notification = () => {
  const authContext = useContext(AuthContext);

  const { loadUser, user } = authContext;

  const { userName, email, userId } = user;

  console.log(user);

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div style={{ marginTop: "60px" }}>
      user: {userName}
      email: {email}
      userId: {userId}
    </div>
  );
};

export default Notification;
