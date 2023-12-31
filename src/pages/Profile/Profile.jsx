import React, { useEffect, useState } from "react";
import Container from "../../components/Shared/Container";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileChatBox from "../../components/Profile/ProfileChatBox";
import useDb from "../../hooks/useDb";
import useAuth from "../../hooks/useAuth";

const Profile = () => {
  const { id } = useParams();
  const { users } = useDb();
  const { user } = useAuth();
  const [chatBoxOpen, setChatBoxOpen] = useState(
    users[id]?.email !== user?.email
  );
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/profile/${id}/posts`);
  }, []);

  return (
    <Container>
      <ProfileHeader
        chatBoxOpen={chatBoxOpen}
        setChatBoxOpen={setChatBoxOpen}
        id={id}
      />
      <div className="w-[80%] mx-auto min-h-[400px] relative">
        <Outlet context={{ id }} />
        <ProfileChatBox
          chatBoxOpen={chatBoxOpen}
          setChatBoxOpen={setChatBoxOpen}
          id={id}
        />
      </div>
    </Container>
  );
};

export default Profile;
