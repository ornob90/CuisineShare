import React from "react";
import { Rating } from "@mui/material";

const RecipeCard = ({ posts }) => {
  const { img, title } = posts;
  return (
    <div className={`duration-300 min-h-[200px]`}>
      <div className="w-full h-[65%] object-cover">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <Rating className="pt-4 -z-1" name="read-only" value={3.5} readOnly />
      <h1 className="text-gray-600 font-medium">{title}</h1>
    </div>
  );
};

export default RecipeCard;
