import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import RecipeFeed from "../pages/RecipeFeed/RecipeFeed";
import Favorites from "../pages/Favorites/Favorites";
import RecipeDetail from "../pages/RecipeDetail/RecipeDetail";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Profile from "../pages/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },

      {
        path: "/news-feed",
        element: <RecipeFeed />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/details",
        element: <RecipeDetail />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
