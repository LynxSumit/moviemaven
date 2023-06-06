import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyABeyrn2f16SmN2mVt53uhCq7AmICsMjLo",
  authDomain: "movie-maven-db.firebaseapp.com",
  projectId: "movie-maven-db",
  storageBucket: "movie-maven-db.appspot.com",
  messagingSenderId: "271471864517",
  appId: "1:271471864517:web:69a54d12a04ca91ba79eac",
};

 initializeApp(firebaseConfig);
const Googleprovider = new GoogleAuthProvider();

Googleprovider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const SignInWithGooglePopup = () =>
  signInWithPopup(auth, Googleprovider);
  //  export const SignInWithFacebookPopup = () => signInWithPopup(auth, FacebookAuthProvider)
  export const db = getFirestore();
  export const createUserDocumentfromAuth = async (userAuth) => {
    if (!userAuth) return;
    const UserDocref = doc(db, "users", userAuth.uid);
    const userSnapshot = await getDoc(UserDocref);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());
    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await setDoc(UserDocref, {
          displayName,
          email,
          createdAt,
        });
      } catch (error) {
        console.log(error.message);
      }
    }
  };

//   export const createUserAuthFromEmailAndPassword = async (email, password) => {
//   if (!email || !password) return;

//   return await createUserWithEmailAndPassword(auth, email, password);
// };
// export const SignInAuthUserWithEmailAndPAssword = async (email, password) => {
//   if (!email || !password) return;
//   return await signInWithEmailAndPassword(auth, email, password);
// };
