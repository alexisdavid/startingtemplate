/**
 *  @version 1.0.0
 *  @author Alexis grupo hannan
 *  @description Manejo de todas las rutas privadas
*/
import React from 'react';
import { verifySession }    from '../http/sessions';
import { Route, Redirect }  from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        { ...rest }
        render = {
            props => {
                if (verifySession()) {
                    return <Component { ...props } />;
                } else {
                    return <Redirect to = "/" />;
                }
            }
        }
    />
);


export default PrivateRoute; 