import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const DynamicRating = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((rate) => (
        <span key={rate}>
          {rate <= rating ? (
            <AiFillStar className="text-xl text-orange-400" />
          ) : (
            <AiOutlineStar className="text-xl text-orange-400" />
          )}
        </span>
      ))}
    </div>
  );
};

export default DynamicRating;
