import React from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import { PrivateRoute, PublicRoute } from '../components';
import { Browser, Login } from '../scenes';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <PublicRoute exact path="/login" component={Login} />
                <PrivateRoute exact path="/browser" component={Browser} />
                <Redirect to="/login" />
            </Switch>
        </Router>
    )
}

export default Routes;
