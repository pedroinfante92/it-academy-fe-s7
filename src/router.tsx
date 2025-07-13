import { createBrowserRouter } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import Layout from "./components/Layout";
import Welcome from "./components/Welcome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    element: <Layout />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/signup", element: <Signup /> },
      { path: "/login", element: <Login /> },
      {
        path: "/movie/:id",
        element: (
          <PrivateRoute>
            <MovieDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
