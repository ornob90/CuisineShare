import React, { useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth, { googleProvider } from "../FireStore/firestore.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (curUser) => {
      setUser(curUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const createUser = async (name, email, password) => {
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(result.user, {
        displayName: name,
      });
      setUser(result.user);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  const signInMethod = async (email, password) => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);

      setUser(result.user);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const googleSignInMethod = async () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signOutMethod = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  const passResetMethod = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      console.error(error);
    }
  };

  const authInfo = {
    user,

    loading,
    updateUser,

    createUser,
    signInMethod,
    googleSignInMethod,
    signOutMethod,
    passResetMethod,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
