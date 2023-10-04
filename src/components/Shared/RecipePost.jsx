import { Rating } from "@mui/material";
import React from "react";
import Button from "./Button";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const RecipePost = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <div className="w-full md:w-auto">
        <img
          src="https://www.teenaagnel.com/wp-content/uploads/2019/12/food-photography-in-dubai.jpg"
          alt=""
          className="object-cover w-full h-full rounded-lg"
        />
      </div>

      <div className="flex flex-col justify-between w-full gap-2 md:w-auto">
        <div className="flex justify-between">
          <h1 className="mb-2 text-3xl font-bold">Burger</h1>
          <div className="flex gap-4 text-2xl">
            <AiOutlineHeart className="text-3xl" />
            <FaRegBookmark />
          </div>
        </div>
        <Rating className="pt-4 z-[-1]" name="read-only" value={3.5} readOnly />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio,
          dolor. Pariatur tempora magnam saepe minus dolorum, culpa nesciunt
          cumque explicabo.
        </p>
        <p>
          <span className="font-bold">Cooking Time: </span> 1:20 Hour
        </p>
        <div className="flex items-center gap-4">
          <div className="badge badge-outline">Italian</div>
          <div className="badge badge-outline">Italian</div>
          <div className="badge badge-outline">Italian</div>
        </div>
        <div>
          <Button
            onClick={() => navigate("/details")}
            classes="bg-black text-white px-4 py-2 rounded-lg"
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecipePost;
