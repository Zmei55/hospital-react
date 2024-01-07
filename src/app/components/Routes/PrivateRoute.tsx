// import { ReactNode } from "react";
import { useAppSelector } from "shared";
// import { Navigate } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";

interface IPrivateRoute {
  // children: ReactNode;
  redirectTo: string;
}

// export function PrivateRoute({ children, redirectTo = "/" }: IPrivateRoute) {
export function PrivateRoute({ redirectTo = "/" }: IPrivateRoute) {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

  return <>{isLoggedIn ? <Outlet /> : <Navigate to={redirectTo} />}</>;
  // return <>{isLoggedIn ? children : <Navigate to={redirectTo} />}</>;
}
