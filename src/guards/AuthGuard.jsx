import { Navigate } from "react-router-dom";

import { UnauthorizedPaths } from "../navigation/paths";

export default function AuthGuard(props) {
  const { children } = props;

  const isAuthorized = localStorage.getItem("token");
  if (!isAuthorized) {
    return <Navigate to={UnauthorizedPaths.authPrefix} replace />;
  }

  return <>{children}</>;
}
