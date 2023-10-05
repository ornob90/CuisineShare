import { Rating } from "@mui/material";
import React, { useState } from "react";
import Button from "./Button";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const RecipePost = ({ post }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const navigate = useNavigate();
  const {
    title,
    ingredients,
    isFavorite,
    isLiked,
    category,
    description,
    id,
    img,
    cookingTime,
    createdAt,
  } = post || {};

  const [favorite, setFavorite] = useState(isLiked);
  const [liked, setLiked] = useState(isFavorite);

  const getDate = (seconds, nanoseconds) => {
    const milliseconds = seconds * 1000 + nanoseconds / 1000000;

    const date = new Date(milliseconds);

    const formattedDate = `${date.getDate()} ${
      months[date.getMonth()]
    } ${date.getFullYear()} | ${date.getHours() % 12} ${
      date.getHours() >= 12 ? "PM" : "AM"
    }`;

    return formattedDate;
  };

  const createdTime = getDate(createdAt.seconds, createdAt.nanoseconds);

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <div className="w-full md:w-auto">
        <img
          src={img}
          alt={title}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>

      <div className="flex flex-col justify-between w-full gap-2 md:w-auto">
        <div className="flex justify-between">
          <h1 className="mb-2 text-3xl font-bold">{title}</h1>
          <div className="flex gap-4 text-2xl">
            {liked ? (
              <AiTwotoneHeart
                className="active:scale-95 duration-300 text-3xl text-yellow-400"
                onClick={() => setLiked(!liked)}
              />
            ) : (
              <AiOutlineHeart
                className="active:scale-95 duration-300 text-3xl"
                onClick={() => setLiked(!liked)}
              />
            )}

            {favorite ? (
              <FaBookmark
                className="active:scale-95 duration-300"
                onClick={() => setFavorite(!favorite)}
              />
            ) : (
              <FaRegBookmark
                className="active:scale-95 duration-300"
                onClick={() => setFavorite(!favorite)}
              />
            )}
          </div>
        </div>
        <Rating className="pt-4 z-[-1]" name="read-only" value={3.5} readOnly />
        <p>{description}</p>
        <p>
          <span className="font-bold">Cooking Time: </span> {cookingTime}
        </p>
        <p className="font-sans">
          <span className="font-bold">Created At: </span> {createdTime}
        </p>

        <div className="badge badge-outline">{category}</div>

        <div>
          <Button
            onClick={() => navigate(`/details/${id}`)}
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
