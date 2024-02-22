import { Navigate } from "react-router-dom";

import Loader from "../components/Shared/Loader";
import useRole from "../hooks/userRole";


const AdminRoute = ({ children }) => {
    
    // dashboard role login search
    const [role, isLoading] = useRole()
    console.log(role)
    console.log(isLoading)

    if (isLoading) return <Loader></Loader>
    if (role === 'admin') return children
    return  <Navigate to='/dashboard'></Navigate>
};

export default AdminRoute;