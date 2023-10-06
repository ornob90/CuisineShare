import React, { useEffect, useState } from "react";
import DbContext from "../context/DbContext";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../FireStore/firestore.config";

const DbProviders = ({ children }) => {
  const [users, setUsers] = useState({});
  const [posts, setPosts] = useState({});
  const [reviews, setReviews] = useState({});
  const [favorites, setFavorites] = useState({});

  const [dataLoading, setDataLoading] = useState(true);

  const usersRef = collection(db, "users");
  const postsRef = collection(db, "posts");
  const reviewsRef = collection(db, "reviews");
  const favoriteRef = collection(db, "favorites");

  useEffect(() => {
    const unsubscribe = handleSnaps("users", usersRef, setUsers);

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = handleSnaps("posts", postsRef, setPosts);

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = handleSnaps("reviews", reviewsRef, setReviews);

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = handleSnaps("favorites", favoriteRef, setFavorites);

    return () => unsubscribe();
  }, []);

  const handleSnaps = (name, collectionRef, setData) => {
    const unsubscribe = onSnapshot(collectionRef, (querySnapShot) => {
      const objects = {};
      const arrays = [];

      if (name === "favorites" || name === "reviews") {
        querySnapShot.forEach((doc) => {
          // items.push(doc.data());
          arrays.push({ ...doc.data(), id: doc.id });
        });
        setData(arrays);
        setDataLoading(false);
      } else {
        querySnapShot.forEach((doc) => {
          // items.push(doc.data());
          objects[doc.id] = { ...doc.data(), id: doc.id };
        });
        setData(objects);
        setDataLoading(false);
      }
      console.log(posts);
    });

    return unsubscribe;
  };

  const dbInfo = { users, posts, reviews, favorites, dataLoading };
  return <DbContext.Provider value={dbInfo}>{children}</DbContext.Provider>;
};

export default DbProviders;
