import { Navigate } from "react-router-dom";

import Loader from "../components/Shared/Loader";
import useRole from "../hooks/userRole";


const HostRoutes = ({ children }) => {
    
    // dashboard role login search
    const [role, isLoading] = useRole()
    // console.log(role)
    // console.log(loading)

    if (isLoading) return <Loader></Loader>
    if (role === 'host') return children
    return  <Navigate to='/dashboard'></Navigate>
};

export default HostRoutes;

// return (
//     <div>
//         <Navigate to='/dashboard'></Navigate>
//     </div>
// );