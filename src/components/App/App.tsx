import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import { PublicRoute } from 'components/PublicRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { Layout } from 'components/Layout';
import { LoginForm } from 'components/LoginForm';
import { StaffUnit } from 'components/StaffUnit';
import { Loading } from 'components/Loading';
import { Container } from './App.styled';

const AuthPage = loadable(() => import('components/views/AuthView'), {
  fallback: <Loading />,
});
const DesktopPage = loadable(() => import('components/views/DesktopView'), {
  fallback: <Loading />,
});
const PatientPage = loadable(() => import('components/views/PatientView'), {
  fallback: <Loading />,
});
const NotFoundPage = loadable(() => import('components/views/NotFoundView'), {
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
            path="patient"
            element={
              <PrivateRoute redirectTo="/">
                <PatientPage />
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
