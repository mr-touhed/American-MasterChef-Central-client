import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../components/Pages/home";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import ChefDetails from "../components/Pages/ChefDetails";
import PrivetRouter from "../components/PrivetRouter/PrivetRouter";
import ErrorPage from "../components/Pages/ErrorPage";
import Blog from "../components/Pages/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://american-master-chef-central-server-mr-touhed.vercel.app/chef"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registation",
        element: <SignUp />,
      },
      {
        path: "/chef/:id",
        element: (
          <PrivetRouter>
            <ChefDetails />
          </PrivetRouter>
        ),
        loader: ({ params }) =>
          fetch(`https://american-master-chef-central-server-mr-touhed.vercel.app/chef/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
