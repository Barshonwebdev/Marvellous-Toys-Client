import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import Blogs from "../Pages/Blogs";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllFigurines from "../Pages/AllFigurines";
import MyFigurines from "../Pages/MyFigurines";
import AddFigurine from "../Pages/AddFigurine";
import PrivateRoute from "./PrivateRoute";
import Details from "../Pages/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/all",
        element: <AllFigurines></AllFigurines>,
      },
      {
        path: "/my",
        element: (
          <PrivateRoute>
            <MyFigurines></MyFigurines>
          </PrivateRoute>
        ),
      },
      {
        path: "/add",
        element: (
          <PrivateRoute>
            <AddFigurine></AddFigurine>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/details/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default router;
