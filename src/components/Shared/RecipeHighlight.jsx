import React, { useEffect, useState } from "react";
import useDb from "../../hooks/useDb";
import Container from "./Container";
import RecipeCard from "./RecipeCard";

const RecipeHighlight = ({ title, recipes }) => {
  const { posts } = useDb();

  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    setRecentPosts(
      Object.entries(posts).sort(
        (a, b) => b[1].createdAt.seconds - a[1].createdAt.seconds
      )
    );
  }, [posts]);

  return (
    <Container>
      <div className="w-[90%] mx-auto">
        <h1 className="font-bold text-3xl mb-8">{title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentPosts?.map((post) => (
            <RecipeCard key={post[1].id} post={post[1]} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default RecipeHighlight;
