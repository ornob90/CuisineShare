import React, { useEffect } from "react";
import Container from "../../components/Shared/Container";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import ProfileHeader from "../../components/Profile/ProfileHeader";

const Profile = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/profile/${id}/posts`);
  }, []);

  return (
    <Container>
      <ProfileHeader id={id} />
      <div className="w-[80%] mx-auto min-h-screen">
        <Outlet context={{ id }} />
      </div>
    </Container>
  );
};

export default Profile;
