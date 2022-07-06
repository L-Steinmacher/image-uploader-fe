import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { UserContext } from "../contexts/userContext";

export default function PublicRoute ({ conponent: Component, restricted, ...rest }) {
    const { isLoggedin } = useContext(UserContext);
    return (
         // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            isLoggedin() && restricted ?
                <Redirect to="/" />
            : <Component {...props} />
        )} />
    );
};