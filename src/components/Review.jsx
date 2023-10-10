import React from "react";
import useAuth from "../hooks/useAuth";
import Rating from "./Shared/Rating";

const Review = ({ review, setRating }) => {
  const { user } = useAuth();

  const { comment, rating } = review || {};
  const { displayName } = user;

  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <div className="h-[40px] w-[40px] rounded-full border-black border-2"></div>
        <p>{displayName}</p>
      </div>
      <Rating rating={rating} setRating={setRating} />
      <p className="text-sm md:text-base font-bold w-full lg:w-[60%] mt-5">
        {comment}
      </p>
    </div>
  );
};

export default Review;
