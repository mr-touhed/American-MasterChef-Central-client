import { useContext } from "react";
import { AuthContext } from "../../context/UserContext";
import { ThreeDots } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
const PrivetRouter = ({children}) => {
    const location = useLocation()
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return <ThreeDots 
        height="500" 
        width="500" 
        radius="9"
        color=" #FFFF00" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{marginLeft: "25%"}}
        wrapperClassName=""
        
        visible={true}
         />
    }
    if (!user){
        return <Navigate to="/login" state={{ from: location }} replace/>
    }
    return (
        
        children
        
    );
};

export default PrivetRouter;