import Header from "./Header";
import { useState } from "react";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
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
      <form className="bg-opacity-80 bg-black p-12 absolute w-3/12 my-24 right-0 mx-auto left-0">
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
          className="p-4 my-2 text-white w-full bg-gray-700 rounded-md"
          type="email"
          placeholder="Email Address"
        />
        <input
          className="p-4 my-2 text-white w-full bg-gray-700 rounded-md"
          type="password"
          placeholder="Password"
        />
        <button className=" p-4 my-4 w-full bg-red-600 text-white rounded-md">
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
      </form>
    </div>
  );
};
export default Login;
