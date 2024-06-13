import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
      <div className="flex justify-between">
        <img
          src="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2023.ico"
          alt="netflix-logo"
        />
        <div className="flex">
          <img
            className="w-8 h-8 my-2 mx-2"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
            alt="user"
          />
          <button
            onClick={() => {
              handleSignOut();
            }}
            className="cursor-pointer text-white font-bold"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
