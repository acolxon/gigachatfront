import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
    const token = localStorage.getItem("token"); // JWT токен из login
    return token ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
