import { Container } from "@mui/material";
import React from "react";
import Button from "../../components/Shared/Button";
import Select from "../../components/Shared/Select";
import RecipePost from "../../components/Shared/RecipePost";
import PrivateRoute from "../../routes/PrivateRoute";

const RecipeFeed = () => {
  return (
    <PrivateRoute>
      <Container>
        <div className=" bg-white sticky top-[8%] sm:top-[15%] md:top-[11%] grid grid-cols-1 md:grid-cols-2 w-full place-content-center pb-2 sm:pb-4 pt-9 md:pt-6 lg:py-4">
          <div className="relative pt-4 flex z-[1]">
            <input
              className=" border focus:outline-none w-full py-2 sm:py-3 pl-4 sm:pl-5 rounded-l-lg text-sm sm:text-md "
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
    </PrivateRoute>
  );
};

export default RecipeFeed;
