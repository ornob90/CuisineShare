import React from "react";
import useAuth from "../hooks/useAuth";
import Rating from "./Shared/Rating";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import DynamicRating from "./Shared/DynamicRating";

const Review = ({ review }) => {
  const { user } = useAuth();

  const { comment, rating } = review || {};
  const { displayName } = user;

  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <div className="h-[40px] w-[40px] rounded-full border-black border-2"></div>
        <p>{displayName}</p>
      </div>
      {/* <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((rate) => (
          <span key={rate}>
            {rate <= rating ? (
              <AiFillStar className="text-xl text-orange-400" />
            ) : (
              <AiOutlineStar className="text-xl text-orange-400" />
            )}
          </span>
        ))}
      </div> */}
      <DynamicRating rating={rating} />
      <p className="text-sm md:text-base font-bold w-full lg:w-[60%] mt-5">
        {comment}
      </p>
    </div>
  );
};

export default Review;
