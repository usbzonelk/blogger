import { Outlet, Navigate } from "react-router-dom";
import { Location } from "react-router-dom";

const RequireAuth = () => {
  const token = true;
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default RequireAuth;
