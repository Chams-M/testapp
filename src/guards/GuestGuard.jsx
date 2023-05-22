import { Navigate } from "react-router-dom";
import { AuthorizedPaths } from "../navigation/paths";

export default function GuestGuard(props) {
  const { children } = props;

  const isAuthorized = localStorage.getItem("token");

  if (isAuthorized) {
    return <Navigate to={AuthorizedPaths.home} replace />;
  }

  return <>{children}</>;
}
