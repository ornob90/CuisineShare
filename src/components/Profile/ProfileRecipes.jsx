import React, { useEffect, useState } from "react";
import RecipePost from "../Shared/RecipePost";
import useDb from "../../hooks/useDb";
import useAuth from "../../hooks/useAuth";

const ProfileRecipes = () => {
  const [profileRecipes, setProfileRecipes] = useState([]);

  const { posts } = useDb();
  const { user } = useAuth();

  useEffect(() => {
    setProfileRecipes(
      Object.keys(posts).filter((post) => posts[post].userEmail === user.email)
    );

    // // console.log(posts);
  }, [posts]);

  return (
    <div className="mt-20 grid grid-cols-1 gap-10">
      {profileRecipes.map((post) => (
        <RecipePost key={posts[post].id} post={posts[post]} />
      ))}
    </div>
  );
};

export default ProfileRecipes;
