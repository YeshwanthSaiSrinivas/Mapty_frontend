import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ children }) {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
}

export default PrivateRoute;
