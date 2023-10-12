import { Rating } from "@mui/material";
import React, { useState } from "react";
import Button from "./Button";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { db } from "../../FireStore/firestore.config";
import {
  collection,
  deleteDoc,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import useDb from "../../hooks/useDb";
import useAuth from "../../hooks/useAuth";

const RecipePost = ({ post }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const navigate = useNavigate();

  const {
    title,
    ingredients,
    category,
    description,
    id: curPostID,
    img,
    cookingTime,
    createdAt,
    userEmail,
  } = post || {};

  const favoritesRef = collection(db, "favorites");
  const likesRef = collection(db, "likes");

  const { usersByEmail, favorites, likes } = useDb();
  const { user } = useAuth();

  const userId = usersByEmail[userEmail].id;

  const getDate = (seconds, nanoseconds) => {
    const milliseconds = seconds * 1000 + nanoseconds / 1000000;

    const date = new Date(milliseconds);

    const formattedDate = `${date.getDate()} ${
      months[date.getMonth()]
    } ${date.getFullYear()} | ${date.getHours() % 12} ${
      date.getHours() >= 12 ? "PM" : "AM"
    }`;

    return formattedDate;
  };

  const handleAddLikes = async () => {
    try {
      const curUserEmail = user?.email;

      const newData = {
        email: curUserEmail,
        postId: curPostID,
      };

      const likeDocRef = doc(likesRef, newData.postId);
      await setDoc(likeDocRef, newData);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDelLikes = async () => {
    try {
      const likeDocRef = doc(likesRef, curPostID);
      await deleteDoc(likeDocRef, likeDocRef);
    } catch (error) {
      console.error(error.message);
    }
  };
  const handleAddFavorite = async () => {
    try {
      const curUserEmail = user.email;

      const newData = {
        email: curUserEmail,
        postId: curPostID,
      };

      const favoriteDocRef = doc(favoritesRef, newData.postId);
      await setDoc(favoriteDocRef, newData);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDelFavorite = async () => {
    try {
      const favoriteDocRef = doc(favoritesRef, curPostID);
      await deleteDoc(favoriteDocRef, favoriteDocRef);
    } catch (error) {
      console.error(error.message);
    }
  };

  //   // await setFavorite(!favorite);
  //   // await updateFavorite(!favorite);

  //   // await updateFavorite(!isFavorite);
  //   try {
  //     const isExist =
  //       favorites.length > 0 &&
  //       favorites.filter(({ postId, postUserEmail }) => {
  //         return postId === id && postUserEmail === userEmail;
  //       });

  //      if(isExist) {

  //         const favDoc = doc(db, "favorites", )
  //      } else {

  //        await addDoc(favoriteDbRef, data);
  //      }

  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  let createdTime = " ";
  if (createdAt) {
    createdTime = getDate(createdAt?.seconds, createdAt?.nanoseconds);
  }

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <div className="w-full md:w-auto">
        <img
          src={img}
          alt={title}
          className="object-cover w-full h-[400px] rounded-lg"
        />
      </div>

      <div className="flex flex-col justify-between w-full gap-2 md:w-auto">
        <div className="flex justify-between">
          <h1 className="mb-2 text-3xl font-bold">{title}</h1>
          <div className="flex items-center justify-end gap-2">
            <p className="font-semibold">{usersByEmail[userEmail].userName}</p>
            <div
              onClick={() => navigate(`/profile/${userId}`)}
              className="h-[40px] w-[40px] rounded-full border-black border-2"
            ></div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Rating
            className="pt-4 z-[-1]"
            name="read-only"
            value={3.5}
            readOnly
          />
          <div className="flex gap-4 text-2xl">
            {likes && likes[curPostID]?.email === user.email ? (
              <AiTwotoneHeart
                className="text-3xl text-yellow-400 duration-300 active:scale-95"
                onClick={handleDelLikes}
              />
            ) : (
              <AiOutlineHeart
                className="text-3xl duration-300 active:scale-95"
                onClick={handleAddLikes}
              />
            )}

            {favorites[curPostID] &&
            favorites[curPostID]?.email === user.email ? (
              <FaBookmark
                className="duration-300 active:scale-95"
                onClick={handleDelFavorite}
              />
            ) : (
              <FaRegBookmark
                className="duration-300 active:scale-95"
                onClick={handleAddFavorite}
              />
            )}
          </div>
        </div>
        <p>{description}</p>
        <p>
          <span className="font-bold">Cooking Time: </span> {cookingTime}
        </p>
        <p className="font-sans">
          <span className="font-bold">Created At: </span> {createdTime}
        </p>

        <div className="badge badge-outline">{category}</div>

        <div>
          <Button
            onClick={() => navigate(`/details/${id}`)}
            classes="bg-black text-white px-4 py-2 rounded-lg"
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecipePost;
