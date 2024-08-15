import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "./../Firebase/Firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [notLoading, setNotLoading] = useState(true);
  const [profileLoad, setProfileLoad] = useState(false);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      const logged = currentUser?.email || user?.email;

      if (currentUser) {
        axios
          .post(
            "http://localhost:4000/jwt",
            { logged },
            { withCredentials: true }
          )
          .then((res) => {});
      } else {
        axios
          .post(
            "http://localhost:4000/logout",
            { logged },
            { withCredentials: true }
          )
          .then((res) => {});
      }

      setNotLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, [profileLoad]);

  const createUser = (email, password) => {
    setNotLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  const userSignOut = () => {
    return signOut(auth);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userInfo = {
    user,
    setUser,
    notLoading,
    setNotLoading,
    setProfileLoad,
    createUser,
    updateUserProfile,
    userSignOut,
    loginUser,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
