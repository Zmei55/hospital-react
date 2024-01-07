import { createBrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";

import LayoutPage from "pages/LayoutPage";
import PublicPage from "pages/PublicPage";
import PrivatePage from "pages/PrivatePage";
import AuthPage from "pages/AuthPage";
import { Loading } from "shared";

const DesktopPage = loadable(() => import("pages/DesktopPage"), {
  fallback: <Loading />,
});
const RequestPage = loadable(() => import("pages/RequestPage"), {
  fallback: <Loading />,
});
const FindRequestPage = loadable(() => import("pages/FindRequestPage"), {
  fallback: <Loading />,
});
const UnknownPartPage = loadable(() => import("pages/UnknownPartPage"), {
  fallback: <Loading />,
});
const NotFoundPage = loadable(() => import("pages/NotFoundPage"), {
  fallback: <Loading />,
});

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <LayoutPage />,
      errorElement: <NotFoundPage />,
      children: [
        {
          element: <PublicPage />,
          children: [
            {
              index: true,
              element: <AuthPage />,
            },
          ],
        },
        {
          element: <PrivatePage />,
          children: [
            {
              path: "desktop",
              element: <DesktopPage />,
              children: [
                {
                  path: "request",
                  element: <RequestPage />,
                },
                {
                  path: "find-request",
                  element: <FindRequestPage />,
                },
                {
                  path: "unknown-part",
                  element: <UnknownPartPage />,
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
