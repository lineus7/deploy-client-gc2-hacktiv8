import { createBrowserRouter, redirect } from "react-router-dom";
import { RootLayout } from "./layout/root-layout";
import Login from "./views/login";
import ReadProducts from "./views/read-products";
import CreateProducts from "./views/create-products";
import UpdateProducts from "./views/update-products";
import ImageForm from "./views/patch-image";
import ReadCategory from "./views/read-category";
import Register from "./views/register";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        loader: () => {
          if (localStorage.token) throw redirect("/");
          return null;
        },
        path: "/login",
        element: <Login />,
      },
      {
        loader: () => {
          if (!localStorage.token) throw redirect("/login");
          return null;
        },
        children: [
          {
            path: "/",
            element: <ReadProducts />,
          },
          {
            path: "/create",
            element: <CreateProducts />,
          },
          {
            path: "/update/:id",
            element: <UpdateProducts />,
          },
          {
            path: "/patch/:id",
            element: <ImageForm />,
          },
          {
            path: "/categories",
            element: <ReadCategory />,
          },
          {
            path: "/add-user",
            element: <Register />,
          },
        ],
      },
    ],
  },
]);
