import { useRef, useState } from "react";
import Header from "./Header";
import { formValidate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  type User,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LOGIN_BG } from "../utils/constants";

interface ErrorMessage {
  code: string;
  message: string;
}
const Login = () => {
  const [isSignInNow, setIsSignInNow] = useState<boolean>(true);
  const email = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);
  const name = useRef<HTMLInputElement | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInNow(!isSignInNow);
  };
  const handleSubmit = () => {
    console.log(email.current?.value, password.current?.value);
    if (
      !email.current?.value ||
      !password.current?.value ||
      (!isSignInNow && !name.current?.value)
    ) {
      setErrorMessage("Please fill all the fields");
      return;
    }
    // form validation
    const errMesssage = formValidate(
      email.current.value,
      password.current.value,
      name.current?.value
    );
    if (errMesssage != null) return;
    setErrorMessage(errMesssage);

    //Sign In or Sign Up logic
    if (!isSignInNow) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current?.value,
          })
            .then(() => {
              // updated value in auth.currentUser
              if (auth.currentUser) {
                const { uid, email, displayName, photoURL }: User =
                  auth.currentUser;
                // Profile updated!
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                  })
                );
              }
            })
            .catch((error: ErrorMessage) => {
              // An error occurred
              // ...
              console.log(error);
              setErrorMessage(error.message);
            });
          console.log(user);
          setIsSignInNow(true);
          // ...
        })
        .catch((error: ErrorMessage) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error: ErrorMessage) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={LOGIN_BG} alt="bg-image" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black/80 my-36 mx-auto left-0 right-0 text-white rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInNow ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInNow && (
          <input
            ref={name}
            type="User name"
            placeholder="Enter User name"
            className="p-4 my-4 w-full border bg-black text-gray-300 placeholder:text-gray-50"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or mobile Number"
          className="p-4 my-4 w-full border bg-black text-gray-300 placeholder:text-gray-50"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full border bg-black text-gray-300 placeholder:text-gray-50"
        />
        <p className="text-red-600">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleSubmit}
        >
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
