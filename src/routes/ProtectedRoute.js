import {Navigate} from "react-router-dom";

export const ProtectedRoute = ({children}) => {
    const token = JOSN.parse(sessionStorage.getItem("token"));
    return token ? children : <Navigate to="/login"/>
}
