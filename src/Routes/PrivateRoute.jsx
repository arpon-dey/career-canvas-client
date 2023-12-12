    import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

    const PrivateRoute = ({ children }) => {
        const { user, loading } = useContext(AuthContext)
        const location = useLocation()
        if (loading) {
            return <p className="text-2xl mx-96 my-80">
                <span className="loading loading-infinity loading-lg mx-48"></span>
            </p>

        }
        if (user) {
            return children
        }
        return <Navigate state={location.pathname} to='/login'></Navigate>
    };

    export default PrivateRoute;