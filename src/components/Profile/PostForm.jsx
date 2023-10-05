import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Button from "../Shared/Button";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, storage } from "../../FireStore/firestore.config";
import useAuth from "../../hooks/useAuth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const PostForm = ({ handleModal }) => {
  const categoryRef = useRef();
  const fileRef = useRef();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [imgFile, setImgFile] = useState(null);
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [imgUrl, setImgUrl] = useState(null);
  const { user } = useAuth();
  const postDbRef = collection(db, "posts");

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

  const handleAddPostDataToDB = async (data) => {
    try {
      await addDoc(postDbRef, data);
    } catch (error) {
      console.error(error);
    }
  };

  // const setImageUrl = async () => {
  //   if (!imgFile) return;

  //   const userEmail = user.email.replace(/[\W_]/g, "");
  //   const imageRef = ref(storage, `posts/${userEmail}+${v4()}`);

  //   const snapshot = await uploadBytes(imageRef, imgFile);

  //   const url = await getDownloadURL(snapshot.ref);
  //   console.log(url);

  //   setImgUrl(url);
  // };

  const handleImageUpload = async (e) => {
    const imageFile = e.target.files[0];
    const userEmail = user.email.replace(/[\W_]/g, "");
    const imageRef = ref(storage, `posts/${userEmail}+${v4()}`);

    const snapshot = await uploadBytes(imageRef, imageFile);

    const url = await getDownloadURL(snapshot.ref);
    setImgUrl(url);
    await setTimeout(() => setSubmitDisabled(false), 300);
  };

  const handlePostData = async (e) => {
    setSubmitDisabled(true);
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value || " ";
    const steps = e.target.steps.value;
    const ingredients = e.target.ingredients.value;
    const cookingTime = e.target.time.value;
    // const category = categoryRef.current.value;

    await handleAddPostDataToDB({
      title,
      description,
      steps,
      ingredients,
      cookingTime,
      userEmail: user.email,
      category: selectedCategory.value || " ",
      img: imgUrl,
      isFavorite: false,
      isLiked: false,
      createdAt: serverTimestamp(),
    });
  };

  return (
    <div className="min-h-[300px] w-[80%]] h-[70%] font-sans">
      <form
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 "
        onSubmit={handlePostData}
      >
        <TextField
          className="lg:col-span-1 col-span-2 "
          id="outlined-basic"
          label="Title"
          variant="outlined"
          name="title"
          required
        />
        <textarea
          className="focus:bg-gray-200 lg:col-span-2 col-span-2 border border-gray-300 focus:outline-none textarea textarea-ghost"
          placeholder="Description"
          name="description"
        ></textarea>
        <textarea
          className="focus:bg-gray-200 lg:col-span-2 col-span-2 border border-gray-300 focus:outline-none textarea textarea-ghost"
          placeholder="Steps"
          name="steps"
          required
        ></textarea>
        <TextField
          className="col-span-2"
          id="outlined-basic"
          label="Ingredients"
          placeholder="eggs, water, brown sugar, ground ginger"
          variant="outlined"
          name="ingredients"
          required
        />
        <TextField
          className="lg:col-span-1 col-span-2"
          id="outlined-basic"
          label="Cooking Time"
          variant="outlined"
          name="time"
          required
        />

        <Autocomplete
          ref={categoryRef}
          disablePortal
          id="combo-box-demo"
          options={category}
          onChange={(event, category) => {
            setSelectedCategory(category);
          }}
          isOptionEqualToValue={(option, value) => option.value === value.value}
          renderInput={(params) => <TextField {...params} label="Category" />}
        />
        <div className="col-span-2 flex flex-col gap-2">
          <label className="file:label text-sm font-sans">
            Upload your Image
          </label>
          <input
            ref={fileRef}
            name="image"
            type="file"
            className="col-span-2 file:font-sans file:text-sm file:font-medium w-full max-w-xs text-sm font-sans"
            // onChange={(e) => setImgFile(e.target.files[0])}
            onChange={handleImageUpload}
          />
        </div>
        <div className="flex items-center  lg:justify-end lg:col-span-2 col-span-2 gap-4">
          <Button
            onClick={handleModal}
            type="button"
            classes="bg-black text-white py-1 px-3 rounded-lg font-bold"
          >
            Close
          </Button>
          <Button
            onClick={handleModal}
            disabled={submitDisabled}
            classes={`${
              submitDisabled
                ? "bg-yellow-300 text-white"
                : "bg-yellow-500 text-white"
            }  py-1 px-3 rounded-lg font-bold`}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
