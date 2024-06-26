import { checkValidData } from "../utils/validate";
import Header from "./Header";
import { useState, useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    //validate form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    //if(message) return  - another way
    //sign in sign up
    if (message === null) {
      //signin/signup
      if (!isSignInForm) {
        //signup logic
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            // ...
            navigate("/browse");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + " " + errorMessage);
            // ..
            navigate("/");
          });
      } else {
        //sign in
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            console.log("sign in", user);
            navigate("/browse");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + " " + errorMessage);
            navigate("/");
          });
      }
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="netflix-bg"
        />
      </div>
      <div
        onSubmit={(e) => e.preventDefault()}
        className="bg-opacity-80 bg-black p-12 absolute w-3/12 my-24 right-0 mx-auto left-0"
      >
        {/* <div className="flex-col justify-items-center"> */}
        <h1 className="my-4 font-bold text-3xl text-white py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {isSignInForm === false ? (
          <input
            className="p-4 my-2 text-white w-full bg-gray-700 rounded-md"
            type="test"
            placeholder="Full Name"
          />
        ) : null}

        <input
          ref={email}
          className="p-4 my-2 text-white w-full bg-gray-700 rounded-md"
          type="email"
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="p-4 my-2 text-white w-full bg-gray-700 rounded-md"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-600 font-semibold text-lg p-2 my-2">
          {errorMessage}
        </p>
        <button
          onClick={() => handleButtonClick()}
          className=" p-4 my-4 w-full bg-red-600 text-white rounded-md"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-white px-2 cursor-pointer"
          onClick={() => toggleSignUpForm()}
        >
          {" "}
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
        {/* </div> */}
      </div>
    </div>
  );
};
export default Login;
