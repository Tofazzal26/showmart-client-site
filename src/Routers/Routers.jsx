import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Service from "../Pages/Service/Service";
import Helpdesk from "../Pages/Helpdesk/Helpdesk";
import Business from "../Pages/Business/Business";
import Login from "../Pages/Login/Login";
import Register from "./../Pages/Register/Register";
import NotFound from "../Components/Not_Found_Page/NotFound";
import About from "../Components/About/About";
import ShowCase from "../Components/ShowCase/ShowCase";

const Routers = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/showCase",
        element: <ShowCase />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default Routers;
