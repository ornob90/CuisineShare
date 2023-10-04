import React, { useState } from "react";
import AuthContext from "../context/AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../FireStore/firestore.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = async (email, password) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return result.user;
    } catch (error) {
      console.error(error);
    }
  };

  const signInMethod = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);

      console.log(result.user);
      setUser(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  const signOutMethod = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  onAuthStateChanged(auth, (curUser) => {
    setUser(curUser);
  });

  const authInfo = { user, createUser, signInMethod, signOutMethod };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
