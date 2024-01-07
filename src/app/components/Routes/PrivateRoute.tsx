import { useAppSelector } from "shared";
import { Navigate, Outlet } from "react-router-dom";

interface IPrivateRoute {
  redirectTo: string;
}

export default function PrivateRoute({ redirectTo = "/" }: IPrivateRoute) {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

  return <>{isLoggedIn ? <Outlet /> : <Navigate to={redirectTo} />}</>;
}
