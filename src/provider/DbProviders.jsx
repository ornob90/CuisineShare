import React, { useEffect, useState } from "react";
import DbContext from "../context/DbContext";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../FireStore/firestore.config";

const DbProviders = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [reviews, setReviews] = useState([]);

  const [dataLoading, setDataLoading] = useState(true);

  const usersRef = collection(db, "users");
  const postsRef = collection(db, "posts");
  const reviewsRef = collection(db, "reviews");

  useEffect(() => {
    const unsubscribe = handleSnaps(usersRef, setUsers);

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = handleSnaps(postsRef, setPosts);

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = handleSnaps(reviewsRef, setReviews);

    return () => unsubscribe();
  }, []);

  const handleSnaps = (collectionRef, setData) => {
    const unsubscribe = onSnapshot(collectionRef, (querySnapShot) => {
      const items = [];

      querySnapShot.forEach((doc) => {
        items.push(doc.data());
      });
      setData(items);
      setDataLoading(false);
    });

    return unsubscribe;
  };

  const dbInfo = { users, posts, reviews, dataLoading };
  return <DbContext.Provider value={dbInfo}>{children}</DbContext.Provider>;
};

export default DbProviders;
