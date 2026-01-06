import { useState } from "react";
import "../css/Login.css";
import Header from "./Header";

const Login = () => {
  const [isSignInNow, setIsSignInNow] = useState<boolean>(true);

  const toggleSignInForm = () => {
    setIsSignInNow(!isSignInNow);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e8136cfe-c5b7-464f-8c26-d68d676e0916/web/IN-en-20251229-TRIFECTA-perspective_c50c689c-0d42-413b-bd09-f4fc62fbec13_small.jpg"
          alt="bg-image"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black/80 my-36 mx-auto left-0 right-0 text-white rounded-lg">
        <h1 className="font-bold text-3xl py-4">
          {isSignInNow ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInNow && (
          <input
            type="User name"
            placeholder="Enter User name"
            className="p-4 my-4 w-full border bg-black text-gray-300 placeholder:tex t-gray-50"
          />
        )}
        <input
          type="text"
          placeholder="Email or mobile Number"
          className="p-4 my-4 w-full border bg-black text-gray-300 placeholder:text-gray-50"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full border bg-black text-gray-300 placeholder:text-gray-50"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInNow ? "Sign In" : "Sign Up"}
        </button>
        {isSignInNow ? (
          <p className="text-gray-200">
            New to Netflix?
            <a className="font-bold cursor-pointer" onClick={toggleSignInForm}>
              Sign up now.
            </a>
          </p>
        ) : (
          <p className="text-gray-200">
            Already a user?
            <a className="font-bold cursor-pointer" onClick={toggleSignInForm}>
              Sign In now.
            </a>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
