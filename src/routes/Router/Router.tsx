import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Error from "../../pages/Error/Error";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
]);

export default Router;
