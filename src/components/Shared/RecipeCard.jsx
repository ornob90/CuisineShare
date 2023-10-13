import React from "react";
import { Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ post, image, title }) => {
  const { img, title: dbTitle, id } = post || {};
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/details/${id}`)}
      className={`duration-300 min-h-[200px] hover:scale-[1.01]`}
    >
      <div className="w-full h-[65%] object-cover">
        <img
          src={img || image}
          alt={dbTitle || title}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <Rating className="pt-4 -z-1" name="read-only" value={3.5} readOnly />
      <h1 className="text-gray-600 font-medium">{dbTitle || title}</h1>
    </div>
  );
};

export default RecipeCard;
