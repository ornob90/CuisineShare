import React, { useEffect, useState } from "react";
import { Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useDb from "../../hooks/useDb";
import DynamicRating from "./DynamicRating";

const RecipeCard = ({ post }) => {
  const { img, title, id } = post || {};
  const navigate = useNavigate();
  const { reviews } = useDb();

  const [avgRating, setAvgRating] = useState(0);

  useEffect(() => {
    let totalRating = 0;
    let numOfReview = 0;

    reviews?.forEach((review) => {
      // console.log(review?.postId, curPostID);
      if (review?.postID === post?.id) {
        totalRating += review.rating;
        numOfReview++;
      }
      setAvgRating(parseInt(totalRating / numOfReview));
    });

    console.log(totalRating);
  }, [reviews]);

  return (
    <div
      onClick={() => navigate(`/details/${id}`)}
      className={`duration-300 min-h-[200px] hover:scale-[1.01]`}
    >
      <div className="w-full h-[65%] object-cover mb-2">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <DynamicRating rating={avgRating} />
      <h1 className="text-gray-600 font-medium">{title}</h1>
    </div>
  );
};

export default RecipeCard;
