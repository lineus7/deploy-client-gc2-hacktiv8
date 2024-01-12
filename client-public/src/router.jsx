import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./views/landing-page";
import DetailPage from "./views/detail-page";
import { RootLayout } from "./layout/root-layout";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/detail/:id",
        element: <DetailPage />,
      },
    ],
  },
]);
