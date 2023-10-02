import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import RecipeFeed from "../pages/RecipeFeed/RecipeFeed";
import Favorites from "../pages/Favorites/Favorites";

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
        path: "/news-feed",
        element: <RecipeFeed />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);

export default router;
