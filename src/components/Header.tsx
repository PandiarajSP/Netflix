import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../utils/appStore";
import { useEffect } from "react";
import { APP_LOGO, PROFILE_LOGO } from "../utils/constants";
interface ErrorMessage {
  code: string;
  message: string;
}
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
          })
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
  return (
    // background gradient to bottom
    <div className="absolute w-screen px-8 py-2 bg-linear-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={APP_LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 ">
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
