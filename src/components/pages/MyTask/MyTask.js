import React, { useContext, useEffect } from "react";

import AuthContext from "../../../context/auth/authContext";

const MyTask = (props) => {
  const authContext = useContext(AuthContext);

  const { loadUser, user, isAuthenticated } = authContext;

  const { userName, email, userId } = user;

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div style={{ marginTop: "60px" }}>
      userid: {userId}
      {/* <MyTaskContent /> */}
    </div>
  );
};

export default MyTask;
