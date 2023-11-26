import React, { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Login from "./Login";
import Browse from "./Browse";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    const auth = getAuth();
    //this will be called automagically whenever the user signIn or SignUP or signout
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL:photoURL }));
      } else {
        //user is signed out
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
