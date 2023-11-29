import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { NETFLIX_LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import {changesLanguage} from '../utils/configSlice';
import lang from "../utils/languageConstants";

const Header = () => {
  const navigate = useNavigate();
  const langKey = useSelector((store)=>store.config.lang);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
  const userDetails = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    //this will be called automagically whenever the user signIn or SignUP or signout
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
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
      } else {
        //user is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribed();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
const handleLanguageChange = (e) => {
  dispatch(changesLanguage(e.target.value))
}

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 top-0 flex justify-between flex flex-col md:flex-row">
      <img className="w-44 mx-auto md:mx-0" src={NETFLIX_LOGO} alt="Netflix logo" />
      {userDetails && (
        <div className="flex p-2 justify-between">
          <select className="p-2 bg-gray-900 text-white m-2" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang) => {
              return (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              );
            })}
          </select>
          <button
            onClick={handleGptSearchClick}
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
          >
           {showGptSearch ? lang[langKey].homePage : lang[langKey].GptSearchButton}
          </button>
          <img
            className="hidden md:block w-12 h-12"
            src={userDetails?.photoURL}
            alt="usericon"
          />
          <button onClick={handleSignOut} className="font-bold text-white">
            ({lang[langKey].signOut})
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
