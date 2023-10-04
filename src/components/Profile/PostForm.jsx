import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import Button from "../Shared/Button";

const PostForm = ({ handleModal }) => {
  const category = [
    {
      label: "Beef",
      value: "Beef",
    },
    {
      label: "Chicken",
      value: "Chicken",
    },
    {
      label: "Dessert",
      value: "Dessert",
    },
    {
      label: "Lamb",
      value: "Lamb",
    },
    {
      label: "Miscellaneous",
      value: "Miscellaneous",
    },
    {
      label: "Pasta",
      value: "Pasta",
    },

    {
      label: "Seafood",
      value: "Seafood",
    },

    {
      label: "Side",
      value: "Side",
    },

    {
      label: "Starter",
      value: "Starter",
    },

    {
      label: "Vegan",
      value: "Vegan",
    },

    {
      label: "Vegetarian",
      value: "Vegetarian",
    },

    {
      label: "Breakfast",
      value: "Breakfast",
    },

    {
      label: "Goat",
      value: "Goat",
    },
  ];

  return (
    <div className="">
      <form className="grid grid-cols-2 gap-4">
        <TextField
          className="col-span-1 "
          id="outlined-basic"
          label="Title"
          variant="outlined"
        />
        <textarea
          className="col-span-2 border border-gray-300 focus:outline-none textarea textarea-ghost"
          placeholder="Description"
        ></textarea>
        <textarea
          className="col-span-2 border border-gray-300 focus:outline-none textarea textarea-ghost"
          placeholder="Steps"
        ></textarea>
        <TextField
          className="col-span-1"
          id="outlined-basic"
          label="Cooking Time"
          variant="outlined"
          name=""
        />

        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={category}
          renderInput={(params) => <TextField {...params} label="Category" />}
        />
        <div className="flex items-center justify-end col-span-2 gap-4">
          <Button
            onClick={handleModal}
            type="button"
            classes="bg-black text-white py-1 px-3 rounded-lg font-bold"
          >
            Close
          </Button>
          <Button
            type="button"
            classes="bg-yellow-500 text-white py-1 px-3 rounded-lg font-bold"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
