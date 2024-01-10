import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import { ErrorPage } from "@/pages/errorPage/errorPage";
import { Root } from "@/pages/root/root";
import { Experience } from "@/pages/experience/experience";
import { Technology } from "@/pages/technology/technology";

export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
      {
        path: "/technology",
        element: <Technology />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
