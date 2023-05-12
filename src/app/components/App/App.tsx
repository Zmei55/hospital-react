import { Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";
import { Layout, PrivateRoute, PublicRoute } from "app";
import { LoginForm, StaffUnit } from "entities/Auth";
import { Loading } from "shared";

import { Container } from "./App.styled";

const AuthPage = loadable(() => import("pages/views/AuthView"), {
  fallback: <Loading />,
});
const DesktopPage = loadable(() => import("pages/views/DesktopView"), {
  fallback: <Loading />,
});
const RequestView = loadable(() => import("pages/views/RequestView"), {
  fallback: <Loading />,
});
const NotFoundPage = loadable(() => import("pages/views/NotFoundView"), {
  fallback: <Loading />,
});

export const App: React.FC = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<AuthPage />}>
            <Route
              index
              element={
                <PublicRoute restricted redirectTo="/desktop">
                  <LoginForm />
                </PublicRoute>
              }
            />
            <Route
              path="station"
              element={
                <PublicRoute restricted redirectTo="/desktop">
                  <StaffUnit />
                </PublicRoute>
              }
            />
          </Route>
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
