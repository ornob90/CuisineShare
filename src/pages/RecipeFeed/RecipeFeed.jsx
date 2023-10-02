import { Container } from "@mui/material";
import React from "react";
import Button from "../../components/Shared/Button";
import Select from "../../components/Shared/Select";

const RecipeFeed = () => {
  return (
    <Container>
      <div className="mt-[100px] flex justify-between items-center w-full ">
        <div className="w-[40%]  relative  sm:w-[55%] pt-4 flex">
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
    </Container>
  );
};

export default RecipeFeed;
