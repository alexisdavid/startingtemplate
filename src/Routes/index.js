import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from './private';
import index from '../pages/web';
import Home from "../pages/dashboard/pages/Home"
import { GlobalContext } from '../context';


const Routes = () => {
    return (
        <GlobalContext>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={index} />
                    <PrivateRoute path='/dashboard' exact component={Home} />
                </Switch>
            </BrowserRouter>
        </GlobalContext>
    )
};

export default Routes;