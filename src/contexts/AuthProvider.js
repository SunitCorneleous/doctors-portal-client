import React, { createContext, useEffect } from "react";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { app } from "./../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  // create new user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // username
  const updateUser = profile => {
    return updateProfile(auth.currentUser, profile);
  };

  // auth state observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  // logout user
  const logOutUser = () => {
    return signOut(auth);
  };

  // auth info
  const authInfo = { user, createUser, loginUser, updateUser, logOutUser };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
