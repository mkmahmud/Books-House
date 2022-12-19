import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext/AuthContext';

const PrivateRoute = ({children}) => {
    
    const {user, loading} = useContext(UserAuth);


    const location = useLocation();

    if(loading) {
        return <button className='btn btn-primary my-10 loading'></button>
    }


    if(!user){
        return <Navigate to='/login' state={{form:location}}></Navigate>
    }

    return children;
};

export default PrivateRoute;