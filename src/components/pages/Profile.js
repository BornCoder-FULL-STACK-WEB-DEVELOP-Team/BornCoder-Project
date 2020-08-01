import React, { useContext, useEffect } from "react";

import AuthContext from "../../context/auth/authContext";

import ProfileContent from "./Profile/ProfileContent";

const Profile = () => {
  const authContext = useContext(AuthContext);

  const { loadUser, user } = authContext;

  const { userName, email, userId } = user;

  useEffect(() => {
    loadUser();
  }, []);

  console.log(userId);
  return (
    <div style={{ marginTop: "60px" }}>
      <ProfileContent userId={userId} />
    </div>
  );
};

export default Profile;
