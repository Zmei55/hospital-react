import { Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";
import { Layout, PrivateRoute, PublicRoute } from "app";
import { Loading } from "shared";

import { Container } from "./App.styled";

const AuthPage = loadable(() => import("pages/AuthView"), {
  fallback: <Loading />,
});
const DesktopPage = loadable(() => import("pages/DesktopView"), {
  fallback: <Loading />,
});
const RequestView = loadable(() => import("pages/RequestView"), {
  fallback: <Loading />,
});
const FindRequestView = loadable(() => import("pages/FindRequestView"), {
  fallback: <Loading />,
});
const UnknownPartView = loadable(() => import("pages/UnknownPartView"), {
  fallback: <Loading />,
});
const NotFoundPage = loadable(() => import("pages/NotFoundView"), {
  fallback: <Loading />,
});

export const App: React.FC = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute restricted redirectTo="/desktop">
                <AuthPage />
              </PublicRoute>
            }
          />
          <Route
            path="desktop"
            element={
              <PrivateRoute redirectTo="/">
                <DesktopPage />
              </PrivateRoute>
            }
          />
          <Route
            path="request"
            element={
              <PrivateRoute redirectTo="/">
                <RequestView />
              </PrivateRoute>
            }
          />
          <Route
            path="find-request"
            element={
              <PrivateRoute redirectTo="/">
                <FindRequestView />
              </PrivateRoute>
            }
          />
          <Route
            path="unknown-part"
            element={
              <PrivateRoute redirectTo="/">
                <UnknownPartView />
              </PrivateRoute>
            }
          />
          <Route
            path="*"
            element={
              <PublicRoute>
                <NotFoundPage />
              </PublicRoute>
            }
          />
        </Route>
      </Routes>
    </Container>
  );
};
