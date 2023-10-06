import React, { useEffect, useRef, useState } from "react";
import Container from "../../components/Shared/Container";
import { Rating } from "@mui/material";
import Button from "../../components/Shared/Button";
import Review from "../../components/Review";
import useAuth from "../../hooks/useAuth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../FireStore/firestore.config";
import { useParams } from "react-router-dom";
import useDb from "../../hooks/useDb";

const RecipeDetail = () => {
  const [commentInput, setCommentInput] = useState("");
  const [post, setPost] = useState({});
  const [reviewList, setReviewList] = useState([]);
  const { user } = useAuth();
  const { posts, reviews } = useDb();
  const commentRef = useRef();
  const { id: postID } = useParams();

  // console.log(reviews);

  // useEffect(() =/
  // console.log(posts);

  const { img, cookingTime, steps, ingredients, title } = posts[postID] || {};
  const reviewDbRef = collection(db, "reviews");

  useEffect(() => {
    if (reviews && reviews.length > 0) {
      setReviewList(
        reviews.filter((review) => {
          console.log(review.postID, postID, review.userEmail, user.email);
          return review.postID === postID && review.userEmail === user.email;
        })
      );
    }
    console.log(reviewList);
  }, [reviews]);

  const handleReview = async () => {
    try {
      const comment = commentRef.current.value;
      const userEmail = user.email;

      setCommentInput("");

      await addDoc(reviewDbRef, {
        comment,
        userEmail,
        postID,
        createdAt: serverTimestamp(),
      });

      // setReviewList(
      //   reviews.filter(
      //     (review) =>
      //       review.postId === postID && review.userEmail === user.email
      //   )
      // );

      // reviews.forEach((review) => {
      //   console.log(review.postID, review.userEmail, user.email, postID);
      // });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <div className="w-[90%] mx-auto">
        <h1 className="mb-10 text-4xl font-bold mt-28">{title}</h1>
        <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] ">
          <img
            src={img}
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-5">
          <Rating className="pt-4 -z-1" name="read-only" value={3.5} readOnly />

          <p>{steps}</p>

          <p>
            <span className="font-bold">Cooking Time: </span> {cookingTime}
          </p>
          <p>
            <span className="font-bold">Ingredients </span> {ingredients}
          </p>
        </div>
        <div className="mt-10 z-[1] relative w-[90%] sm:w-[55%] pt-4 flex">
          <input
            ref={commentRef}
            className="w-full py-3 pl-5 border rounded-l-lg focus:outline-none text-md"
            type="text"
            placeholder="Comment"
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
          />
          <Button
            type="button"
            onClick={handleReview}
            classes="bg-black py-3 px-8 text-sm rounded-r-lg text-white "
          >
            Comment
          </Button>
        </div>
        <div className="mt-20 space-y-10">
          {reviewList.map((review) => (
            <Review key={review.id} review={review} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default RecipeDetail;
