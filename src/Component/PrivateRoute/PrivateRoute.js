import React from 'react';
import { useContext } from 'react';
import {Redirect, Route, useLocation} from 'react-router-dom'
import { UserContext } from '../../App';

const PrivateRoute = ({children,...rest}) => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    const location=useLocation()
    return (
        <Route
            {...rest}
            render={
                ()=>loggedInUser.user?(children)
                :(
                    <Redirect to={{pathname:'/login', location}}/>
                )
            }
        >
            
        </Route>
    );
};

export default PrivateRoute;