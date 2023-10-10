import React from "react";

const Rating = ({ rating, handleRating }) => {
  return (
    <div className="rating">
      <input
        onClick={() => handleRating(1)}
        type="radio"
        name="rating-2"
        className="bg-orange-400 mask mask-star-2"
        defaultChecked
      />
      <input
        onClick={() => handleRating(2)}
        type="radio"
        name="rating-2"
        className="bg-orange-400 mask mask-star-2"
      />
      <input
        onClick={() => handleRating(3)}
        type="radio"
        name="rating-2"
        className="bg-orange-400 mask mask-star-2"
      />
      <input
        onClick={() => handleRating(4)}
        type="radio"
        name="rating-2"
        className="bg-orange-400 mask mask-star-2"
      />
      <input
        onClick={() => handleRating(5)}
        type="radio"
        name="rating-2"
        className="bg-orange-400 mask mask-star-2"
      />
    </div>
  );
};

export default Rating;
