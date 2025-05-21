import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Components/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading}=use(AuthContext)
    const location=useLocation()


    if(loading){
        return <Loading></Loading>
    }

    if(!user){
        return <Navigate state={location?.pathname
} to={'/logIn'}></Navigate>
    }
    return children
};

export default PrivateRoute;