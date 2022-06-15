import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";

import { UserContext } from "../contexts/userContext";

const PrivateRoute = ({component: Component, ...rest}) => {
    const { isLoggedin } = useContext(UserContext);

    return(
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /login page
        <Route {...rest} render={props => (
            isLoggedin ?
                <Component {...props} />
            : <Redirect to="/login" /> 
        )} />
    )
}

export default PrivateRoute;