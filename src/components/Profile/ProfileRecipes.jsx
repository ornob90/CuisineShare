import React, { useEffect, useState } from "react";
import RecipePost from "../Shared/RecipePost";
import useDb from "../../hooks/useDb";
import useAuth from "../../hooks/useAuth";
import { useOutletContext } from "react-router-dom";

const ProfileRecipes = () => {
  const [profileRecipes, setProfileRecipes] = useState([]);

  const { posts } = useDb();
  const { user } = useAuth();
  const { users } = useDb();
  const { id } = useOutletContext();

  // console.log(Object.entries(posts));

  useEffect(() => {
    const profilePostIds = Object.keys(posts).filter((post) => {
      // console.log(posts[post].userEmail, users[id].email);
      return posts[post].userEmail === users[id].email;
    });

    // setProfileRecipes(
    //   profilePostIds.sort(
    //     (id1, id2) =>
    //       posts[id1].createdAt.seconds - posts[id2].createdAt.seconds
    //   )
    // );

    setProfileRecipes(profilePostIds);

    // console.log(posts);
  }, [posts, id]);

  return (
    <div className="mt-20 grid grid-cols-1 gap-10">
      {profileRecipes.map((post) => (
        <RecipePost key={posts[post].id} post={posts[post]} />
      ))}
    </div>
  );
};

export default ProfileRecipes;
