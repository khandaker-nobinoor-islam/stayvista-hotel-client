/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Shared/Loader";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()
    console.log(loading)

    if (loading) return <Loader></Loader>
    if (user) return children
    return (
        <div>
            <Navigate to='/login' state={{ from: location }} replace='true'></Navigate>
        </div>
    );
};

export default PrivateRoute;