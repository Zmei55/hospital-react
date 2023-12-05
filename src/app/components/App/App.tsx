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
const RequestPage = loadable(() => import("pages/RequestView"), {
  fallback: <Loading />,
});
const FindRequestPage = loadable(() => import("pages/FindRequestView"), {
  fallback: <Loading />,
});
const UnknownPartPage = loadable(() => import("pages/UnknownPartView"), {
  fallback: <Loading />,
});
const NotFoundPage = loadable(() => import("pages/NotFoundView"), {
  fallback: <Loading />,
});

export const App: React.FC = () => {
  return (
    <Container className="app" data-testid="app-container">
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
                <RequestPage />
              </PrivateRoute>
            }
          />
          <Route
            path="find-request"
            element={
              <PrivateRoute redirectTo="/">
                <FindRequestPage />
              </PrivateRoute>
            }
          />
          <Route
            path="unknown-part"
            element={
              <PrivateRoute redirectTo="/">
                <UnknownPartPage />
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
