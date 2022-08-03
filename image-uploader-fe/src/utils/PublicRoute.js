import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { UserContext } from "../contexts/userContext";

export default function PublicRoute ({ component: Component, restricted, ...rest }) {
    const isLoggedin  = localStorage.getItem("isLoggedin");
    return (
         // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} component={props => (
            isLoggedin && restricted ?
                <Redirect to="/" />
            : <Component {...props} />
        )} />
    );
};