import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext/AuthContext';
import Loader from '../../Pages/Loader/Loader';

const PrivateRoute = ({children}) => {
    
    const {user, loading} = useContext(UserAuth);


    const location = useLocation();

    if(loading) {
        return <Loader></Loader>
    }


    if(!user){
        return <Navigate to='/login' state={{form:location}}></Navigate>
    }

    return children;
};

export default PrivateRoute;