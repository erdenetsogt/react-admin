import React from 'react'

import { Route, Navigate } from 'react-router-dom'
import { shallowEqual, useSelector } from "react-redux";
var dateNow = new Date();    

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    const {isAuthorized} = useSelector(
        ({auth}) => ({
            isAuthorized: (auth.authToken!=null)?((auth.authToken.exp<dateNow.getTime()/1000)?null:auth.authToken):null,
        }),
        shallowEqual
    );
    return (
        <Route
            {...rest}
            render={(props) => {

                if (isAuthorized) {
                    return <Component {...props} />;
                }
                else {
                    return <Navigate to='/login' replace />
                }
            }
            }
        />
    );
};