import { Container } from "@mui/material";
import React from "react";
import Button from "../../components/Shared/Button";
import Select from "../../components/Shared/Select";
import RecipePost from "../../components/Shared/RecipePost";

const RecipeFeed = () => {
  return (
    <Container>
      <div className=" bg-white sticky top-[8%] sm:top-[15%] md:top-[11%] grid grid-cols-1 md:grid-cols-2 w-full place-content-center">
        <div className="relative pt-4 flex ">
          <input
            className=" border focus:outline-none w-full py-3 pl-5 rounded-l-lg text-md "
            type="text"
            placeholder="Search Your Food"
          />
          <Button classes="bg-black py-3 px-8 text-sm rounded-r-lg text-white ">
            Search
          </Button>
        </div>

        <div className="w-full flex gap-2 justify-end ">
          <Select name="Sort By" options={["Date", "Reviews", "Ratings"]} />
          <Select
            name="Category"
            options={[
              "Breakfast",
              "Desserts",
              "Baking",
              "Vegan",
              "Asian",
              "Mexican",
              "Italian",
              "BBQ",
              "Seafood",
            ]}
          />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8">
        <RecipePost />
        <RecipePost />
        <RecipePost />
        <RecipePost />
        <RecipePost />
        <RecipePost />
        <RecipePost />
        <RecipePost />
        <RecipePost />
        <RecipePost />
        <RecipePost />
      </div>
    </Container>
  );
};

export default RecipeFeed;
