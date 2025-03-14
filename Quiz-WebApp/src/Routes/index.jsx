// import React from "react";
import { useRoutes } from "react-router-dom";
import ROUTES from "../Constant/routes.jsx";
import Login from "../Component/Form-component/Login.Component";
import SignUp from "../Component/Form-component/Signup.Component";
// import Quiz from '../Component/Quiz-Component/Quiz.Component'
import HomePage from '../Component/HomePage-Component/Home.Component'
import Quiz from '../Component/QuizPage/Quiz.component.jsx'
import WinnerPage from '../Component/WinnerPage/Winner.component'
function AppRoutes() {
  return useRoutes([
    {
      path: ROUTES.LOGIN,
      element: <Login />,
    },
    {
      path: ROUTES.SIGNUP,
      element: <SignUp />,
    },
    {
      path: ROUTES.QUIZ,
      element: <Quiz />,
    },
    {
      path: ROUTES.WINNER,
      element: <WinnerPage />,
    },
    {
      path: ROUTES.HOME,
      element: <HomePage />,
    },
  ]);
}

export default AppRoutes;
