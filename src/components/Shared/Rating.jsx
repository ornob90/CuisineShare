import React from "react";

const Rating = ({ rating, handleRating, editable }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        onClick={() => handleRating(editable, 1)}
        type="radio"
        name="rating-2"
        className="bg-orange-400 star"
        disabled={!editable}
        checked={false}
      />
      <input
        onClick={() => handleRating(editable, 2)}
        type="radio"
        name="rating-3"
        className="bg-orange-400 star"
        disabled={!editable}
        checked={rating <= 2}
      />
      <input
        onClick={() => handleRating(editable, 3)}
        type="radio"
        name="rating-4"
        className="bg-orange-400 star"
        disabled={!editable}
        checked={rating <= 3}
      />
      <input
        onClick={() => handleRating(editable, 4)}
        type="radio"
        name="rating-5"
        className="bg-orange-400 star"
        disabled={!editable}
        checked={rating <= 4}
      />
      <input
        onClick={() => handleRating(editable, 5)}
        type="radio"
        name="rating-6"
        className="bg-orange-400 star"
        disabled={!editable}
        checked={rating <= 5}
      />
    </div>
  );
};

export default Rating;
