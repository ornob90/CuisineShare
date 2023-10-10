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
import ProfileAbout from "../components/Profile/ProfileAbout";
import ProfileRecipes from "../components/Profile/ProfileRecipes";
import PostForm from "../components/Profile/PostForm";

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
        path: "/profile/:id",
        element: <Profile />,
        children: [
          {
            path: "/profile/:id/posts",
            element: <ProfileRecipes />,
          },
          {
            path: "/profile/:id/profile-about",
            element: <ProfileAbout />,
          },
        ],
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
        path: "/details/:id",
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
