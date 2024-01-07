import { useAppSelector } from "shared";
import { Navigate, Outlet } from "react-router-dom";
// import { Navigate } from "react-router-dom";
// import { ReactNode } from "react";

interface IPublicRoute {
  // children: ReactNode;
  restricted?: boolean;
  redirectTo?: string;
}

export const PublicRoute = ({
  // children,
  restricted = false,
  redirectTo = "/",
}: IPublicRoute) => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return <>{!shouldRedirect ? <Outlet /> : <Navigate to={redirectTo} />}</>;
  // return <>{!shouldRedirect ? children : <Navigate to={redirectTo} />}</>;
};
