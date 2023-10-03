import React from "react";
import Container from "../../components/Shared/Container";
import { Outlet } from "react-router-dom";
import ProfileHeader from "../../components/Profile/ProfileHeader";

const Profile = () => {
  return (
    <Container>
      <ProfileHeader />
      <div className="w-[80%] mx-auto">
        <Outlet />
      </div>
    </Container>
  );
};

export default Profile;
