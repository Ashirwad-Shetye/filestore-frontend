import { Navigate, Outlet } from "react-router-dom";
import { getItemFromStorage } from "./localStorage";

function PrivateRoute() {
  const token = getItemFromStorage();
  return token ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;
