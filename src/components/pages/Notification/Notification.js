import React, { useContext, useEffect } from "react";

import AuthContext from "../../../context/auth/authContext";

import NotificationContent from "./NotificationContent";

const Notification = () => {
  const authContext = useContext(AuthContext);

  const { loadUser, user } = authContext;

  const { userName, userPhoto, userId } = user;

  console.log(user);

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div style={{ marginTop: "60px" }}>
      <NotificationContent
        userId={userId}
        userName={userName}
        userPhoto={userPhoto}
      />
    </div>
  );
};

export default Notification;
