import { initializeApp } from "firebase/app";
import {
  getAuth,
  
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyABeyrn2f16SmN2mVt53uhCq7AmICsMjLo",
  authDomain: "movie-maven-db.firebaseapp.com",
  projectId: "movie-maven-db",
  storageBucket: "movie-maven-db.appspot.com",
  messagingSenderId: "271471864517",
  appId: "1:271471864517:web:69a54d12a04ca91ba79eac",
};

const FirebaseApp = initializeApp(firebaseConfig);
const Googleprovider = new GoogleAuthProvider()


Googleprovider.setCustomParameters({
    prompt : "select_account"
})
 export  const auth = getAuth()
 export const SignInWithGooglePopup = () => signInWithPopup(auth, Googleprovider)
//  export const SignInWithFacebookPopup = () => signInWithPopup(auth, FacebookAuthProvider)
