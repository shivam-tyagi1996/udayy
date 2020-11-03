import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = (props) => {
    const { userName, password } = JSON.parse(localStorage.getItem('cred')) || {};
    if (userName === 'test' && password === 'test') {
        return (
            <Route {...props}/>
        )
    }
    localStorage.clear();
    return <Redirect to="/login" />
}

export default PrivateRoute;
