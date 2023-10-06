import React from "react";
import useAuth from "../hooks/useAuth";

const Review = ({ review }) => {
  const { user } = useAuth();

  const { comment } = review;
  const { displayName } = user;

  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="h-[40px] w-[40px] rounded-full border-black border-2"></div>
        <p>{displayName}</p>
      </div>
      <p className="text-sm md:text-base w-full lg:w-[60%] mt-5">{comment}</p>
    </div>
  );
};

export default Review;
