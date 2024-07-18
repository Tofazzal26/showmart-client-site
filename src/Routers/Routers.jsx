import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Service from "../Pages/Service/Service";
import Helpdesk from "../Pages/Helpdesk/Helpdesk";
import Business from "../Pages/Business/Business";
import Login from "../Pages/Login/Login";
import Register from "./../Pages/Register/Register";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/business",
        element: <Business />,
      },
      {
        path: "/helpdesk",
        element: <Helpdesk />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default Routers;
