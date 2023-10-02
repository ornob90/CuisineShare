import { Rating } from "@mui/material";
import React from "react";
import Button from "./Button";

const RecipePost = () => {
  return (
    <div className="flex justify-end gap-5">
      <div className="w-[40%]">
        <img
          src="https://www.teenaagnel.com/wp-content/uploads/2019/12/food-photography-in-dubai.jpg"
          alt=""
          className="rounded-lg"
        />
      </div>
      <div className="w-[60%] flex flex-col gap-2 justify-between">
        <h1 className="text-3xl font-bold mb-2">Burger</h1>
        <Rating className="pt-4 -z-1" name="read-only" value={3.5} readOnly />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio,
          dolor. Pariatur tempora magnam saepe minus dolorum, culpa nesciunt
          cumque explicabo.
        </p>
        <p>
          <span>Cooking Time: </span> 1:20 Hour
        </p>
        <div className="flex items-center gap-4">
          <div class="badge badge-outline">Italian</div>
          <div class="badge badge-outline">Italian</div>
          <div class="badge badge-outline">Italian</div>
        </div>
        <div>
          <Button classes="bg-black text-white px-4 py-2 rounded-lg">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecipePost;
