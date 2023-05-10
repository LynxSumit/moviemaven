import React, { useState } from "react";
import "./SignIn.css";
import { SignInWithGooglePopup , createUserDocumentfromAuth } from "../../utils/firebase";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const googleLogger = async () => {
    const {user} = await SignInWithGooglePopup();
    createUserDocumentfromAuth(user)
    setCurrentuser(user)
    setTimeout(() => {
      navigate("/")
}, 900);
  };
  const [ currentuser, setCurrentuser ] = useState("");
 
  const [ password, setPassword ] = useState("");
  const [ email, setEmail ] = useState("");
  const navigate = useNavigate()
    const SubmitHandler = (e) => {
      e.preventDefault();
      if (!email || !password) {
        alert("User crentials can't be empty");
        return;
      }
      setEmail("")
      setPassword("")
      setTimeout(() => {
              navigate("/")
      }, 900);
    };
  return (
    <div className="signin">
      <div className="logo_container">
        <img
          className="google_logo"
          onClick={googleLogger}
          
          src="https://www.drupal.org/files/issues/2020-01-19/google_logo.png"
          alt="google_logo"
        />
      </div>

      <Form onSubmit={SubmitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email here"
            style={{ width: "300px" }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="warning" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default SignIn;
