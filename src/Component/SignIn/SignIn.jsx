import React, { useState } from "react";
import "./SignIn.css";
import {
  SignInWithGooglePopup,
 auth
} from "../../utils/firebase";
// import { useNavigate } from "react-router-dom";
import SignUp from "./SignUp";
import { signInWithEmailAndPassword } from "firebase/auth";
import AuthStatus from "./AuthStatus";

const SignIn = () => {
  const googleLogger = async () => {
 await SignInWithGooglePopup();   
  };
const [email , setEmail] = useState("")
const [password , setPassword] = useState("")
  // const navigate = useNavigate();
  const SubmitHandler = async (e) => {
    e.preventDefault();
    
     await signInWithEmailAndPassword(auth,email,password).then((userCred)=> {console.log(userCred)}).catch((err)=>console.log(err.message))
    setEmail("")
       setPassword("")
    
    if (!email || !password) {
      alert("User crentials can't be empty");
      return;
    }
   

    // setTimeout(() => {
    //   navigate("/");
    // }, 900);
  };

  // let inp = document.getElementById("inp")
  // let check = document.getElementById("check")
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-center">I already have an account</h3>
          <form onSubmit={SubmitHandler}>
  <div className="mb-3">
    <label htmlFor="inp1" className="form-label">Email address</label>
    <input  onChange={(e)=> setEmail(e.target.value)} value={email}  type="email"  className="form-control" id="inp1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="inp" className="form-label">Password</label>
    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}   className="form-control" id="inp"/>
  </div>
  <div className="mb-3 form-check"  >
    <input type="checkbox" className="form-check-input"   id="check"/>
    <label className="form-check-label" htmlFor="check">Check me out</label>
  </div>
<div className="btn-container">
<button type="submit" className="btn btn-light"  >Submit</button>
  <button type="button" className="btn btn-light" onClick={googleLogger}>
    <i className="fa-brands fa-google "></i>  Sign in with Google
  </button>
</div>
</form>

         
          
        </div>
        <div className="col-md-6">
          <h3>I don't have an account</h3>
          <SignUp/>
        </div>
      </div>
      <AuthStatus/>
    </div>
  );
};

export default SignIn;
