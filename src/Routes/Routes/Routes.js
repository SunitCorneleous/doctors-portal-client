import { createBrowserRouter } from "react-router-dom";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Main from "../../Pages/Layout/Main";
import Login from "../../Pages/Login/Login";
import SignUp from "./../../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);
