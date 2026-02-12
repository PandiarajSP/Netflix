import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../utils/appStore";
import { useEffect } from "react";
import {
  APP_LOGO,
  PROFILE_LOGO,
  SUPPORTED_LANGUAGES,
} from "../utils/constants";
import { toggleSearchButton } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
interface ErrorMessage {
  code: string;
  message: string;
}
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showGptSearch = useSelector(
    (state: RootState) => state.gpt.isSearchOpen,
  );
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);
  const user = useSelector((store: RootState) => {
    return store.user;
  });
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error: ErrorMessage) => {
        // An error happened.
        console.log(error);
      });
  };
  const gptSearchClick = () => {
    dispatch(toggleSearchButton());
    console.log("clicked");
  };
  const handleLanguagechange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    // background gradient to bottom
    <div className="absolute w-screen px-8 py-2 bg-linear-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={APP_LOGO} alt="logo" />

      {user && (
        <div className="flex p-2 ">
          {showGptSearch && (
            <select
              className="w-40 bg-gray-500 text-white p-4 rounded-lg"
              onChange={handleLanguagechange}
            >
              {SUPPORTED_LANGUAGES.map((item) => (
                <option value={item.identifier}>{item.name}</option>
              ))}
            </select>
          )}
          <button
            className="bg-purple-500 text-white font-bold px-4 py-2 mx-4 rounded-lg"
            onClick={gptSearchClick}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img className="w-12 h-12" src={PROFILE_LOGO} alt="profile-icon" />
          <button
            className="font-bold text-black bg-amber-100 p-2 ml-5"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
