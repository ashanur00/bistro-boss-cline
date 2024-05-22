import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Menu from "../pages/Menu/Menu";
import OurShop from "../pages/OurShop/OurShop";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
          path: '/meno',
          element: <Menu/>
        },
        {
          path: '/shop/:category',
          element: <OurShop/>
        }
      ]
    },
  ]);

  export default router;