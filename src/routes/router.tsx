import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import { ErrorPage } from "@/pages/errorPage/errorPage";
import { Root } from "@/pages/root/root";
import { Experience } from "@/pages/experience/experience";
import { Skills } from "@/pages/skills/skills";
import { Qualifications } from "@/pages/qualifications/qualifications";

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
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/qualifications",
        element: <Qualifications />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
