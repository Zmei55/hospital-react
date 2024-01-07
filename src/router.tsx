import { createBrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";

import Layout from "app/components/Layout";
import PublicRoute from "app/components/Routes/PublicRoute";
import PrivateRoute from "app/components/Routes/PrivateRoute";
import Auth from "entities/Auth/components/AuthMenu";
import { Loading } from "shared";

const Desktop = loadable(() => import("entities/Desktop/components/Desktop"), {
  fallback: <Loading />,
});
const Request = loadable(
  () => import("entities/Request/components/RequestEl"),
  { fallback: <Loading /> }
);
const FindRequest = loadable(
  () => import("entities/Request/components/FindRequestEl"),
  { fallback: <Loading /> }
);
const UnknownPart = loadable(() => import("shared/ui/UnknownPart"), {
  fallback: <Loading />,
});
const NotFound = loadable(() => import("shared/ui/NotFound"), {
  fallback: <Loading />,
});

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound text="404 Page not found" />,
      children: [
        {
          element: <PublicRoute restricted redirectTo="/desktop" />,
          children: [
            {
              index: true,
              element: <Auth />,
            },
          ],
        },
        {
          element: <PrivateRoute redirectTo="/" />,
          children: [
            {
              path: "desktop",
              element: <Desktop />,
              children: [
                {
                  path: "request",
                  element: <Request />,
                },
                {
                  path: "find-request",
                  element: <FindRequest />,
                },
                {
                  path: "unknown-part",
                  element: <UnknownPart />,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  {
    basename: "/hospital_react_ts",
  }
);
