import {
   createUserWithEmailAndPassword,
   getAuth,
   GoogleAuthProvider,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
   updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { initAuthentication } from "../Firebase/firebase.init";

initAuthentication();

const useFirebase = () => {
   const [user, setUser] = useState({});
   const [isLoading, setIsLoading] = useState(true);
   const [authError, setAuthError] = useState("");

   const auth = getAuth();
   const googleProvider = new GoogleAuthProvider();

   // google sign in
   const signInUsingGoogle = (history, redirect_uri) => {
      setIsLoading(true);
      signInWithPopup(auth, googleProvider)
         .then((result) => {
            console.log(result.user);
            history.push(redirect_uri);
            setAuthError("");
         })
         .catch((error) => {
            setAuthError(error.message);
         })
         .finally(() => setIsLoading(false));
   };

   // create user email
   const registerUserEmail = (name, email, password, history, redirect_uri) => {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
         .then((result) => {
            const newUser = { displayName: name, email };
            console.log(newUser);
            setUser(newUser);

            // send name to firebase
            updateProfile(auth.currentUser, {
               displayName: name,
            })
               .then(() => {
                  // Profile updated!
                  // ...
               })
               .catch((error) => {
                  // An error occurred
                  // ...
               });
            history.push(redirect_uri);
         })
         .catch((error) => {
            setAuthError(error.message);
         })
         .finally(() => setIsLoading(false));
   };
   // login user
   const loginUserEmail = (email, password, history, redirect_uri) => {
      setIsLoading(true);
      signInWithEmailAndPassword(auth, email, password)
         .then((result) => {
            setAuthError("");
            history.push(redirect_uri);
         })
         .catch((error) => {
            setAuthError(error.message);
         })
         .finally(() => setIsLoading(false));
   };

   // logout
   const logout = () => {
      setIsLoading(true);
      signOut(auth)
         .then(() => {
            // sign out successful
         })
         .catch((error) => {
            setAuthError(error.message);
         })
         .finally(() => setIsLoading(false));
   };

   // user observer
   const unsubscribed = useEffect(() => {
      onAuthStateChanged(auth, (user) => {
         if (user) {
            setUser(user);
         } else {
            setUser({});
         }
         setIsLoading(false);
      });
      return () => unsubscribed;
   }, [auth]);

   return {
      user,
      isLoading,
      setIsLoading,
      authError,
      setAuthError,
      signInUsingGoogle,
      registerUserEmail,
      loginUserEmail,
      logout,
   };
};

export default useFirebase;
