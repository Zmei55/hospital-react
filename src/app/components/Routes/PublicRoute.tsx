import { useAppSelector } from "shared";
import { Navigate, Outlet } from "react-router-dom";

interface IPublicRoute {
  restricted?: boolean;
  redirectTo?: string;
}

export default function PublicRoute({
  restricted = false,
  redirectTo = "/",
}: IPublicRoute) {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return <>{!shouldRedirect ? <Outlet /> : <Navigate to={redirectTo} />}</>;
}
