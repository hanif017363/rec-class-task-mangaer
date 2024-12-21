import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import RootLayout from "../pages/RootLayout";
import App from "../App";
import Home from "../pages/Home";
import Post from "../pages/Post";
import PostDetails from "../pages/PostDetails";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/TaskMangaer",
        element: <App />,
      },
      {
        path: "/all-post",
        element: <Post />,
        loader: () =>
          fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`),
      },
      {
        path: "/post/:id",
        element: <PostDetails />,
      },
    ],
  },
]);
