import React from "react";
import { Rating } from "@mui/material";

const RecipeCard = ({ image, title }) => {
  return (
    <div className=" ">
      <div className="w-full h-[300px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <Rating className="pt-4" name="read-only" value={3.5} readOnly />
      <h1 className="text-gray-600 font-medium">{title}</h1>
    </div>
  );
};

export default RecipeCard;
