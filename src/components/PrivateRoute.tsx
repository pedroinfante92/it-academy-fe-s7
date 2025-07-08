import { type ReactNode } from "react";
import { UserAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { session } = UserAuth();

  if (session === undefined) {
    return <div>Loading...</div>;
  }

  return <>{session ? children : <Navigate to="/signup" />}</>;
};

export default PrivateRoute;
