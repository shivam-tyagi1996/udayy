import React from 'react';
import { Redirect } from 'react-router-dom';
import { Login } from '../scenes';

const PublicRoute = (props) => {
    const cred = localStorage.getItem('cred');
    if (cred && cred.length) {
        console.log('-----------')
        return <Redirect to="/browser" />
    }
    return <Login {...props} />
};

export default PublicRoute;
