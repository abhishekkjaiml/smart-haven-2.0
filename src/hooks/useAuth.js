import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase";

const useAuth = () => {
    
  const myDummyUser = localStorage.getItem("smarthaven_dummy_user");

  const [firebaseUser, setFirebaseUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  const [isDummyUser, setIsDummyUser] = useState(myDummyUser === "true");

  // Firebase Auth State

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setFirebaseUser(currentUser);
      setAuthLoading(false);
    });

    return unsubscribe;
  }, []);

  // Dummy Auth State

  useEffect(() => {
    const handleDummyLogin = () => {
      setIsDummyUser(localStorage.getItem("smarthaven_dummy_user") === "true");
    };

    const handleDummyLogout = () => {
      setIsDummyUser(false);
    };

    window.addEventListener("smarthaven_dummy_user", handleDummyLogin);

    window.addEventListener("smarthaven_dummy_logout", handleDummyLogout);

    return () => {
      window.removeEventListener("smarthaven_dummy_user", handleDummyLogin);

      window.removeEventListener("smarthaven_dummy_logout", handleDummyLogout);
    };
  }, []);

  // Login State

  const isLoggedIn = Boolean(firebaseUser) || isDummyUser;

  return {
    firebaseUser,
    isDummyUser,
    isLoggedIn,
    authLoading,
  };
};

export default useAuth;
