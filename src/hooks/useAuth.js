import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase";
import { signOut } from "firebase/auth";

const useAuth = () => {

  const navigate = useNavigate()
    
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

  // Logout

  const logout = async () => {
    try {
      if(firebaseUser){
        await signOut(auth)
      }

      localStorage.removeItem(
        'smarthaven_dummy_user'
      )

      window.dispatchEvent(
        new Event('smarthaven-dummy-logout')
      )

      navigate('/auth/login', {
        replace: true
      })

    } catch (error) {
      console.error('Logout Error:', error)
    }
  }

  return {
    firebaseUser,
    isDummyUser,
    isLoggedIn,
    authLoading,
    logout,
  };
};

export default useAuth;
