import React, { useState, useContext } from "react";
import { TextField, Button } from "@mui/material";
import { useHistory, Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import axios from "axios";

import { userLogin } from "../store";
import {UserContext} from "../contexts/userContext";

const Login = (props) => {
    const initialValues = { username: '',
                            password: ''};
    const { push } = useHistory();
    const [ userValue, setUserValue ] = useState(initialValues);
    const { setIsLoggedIn, setToken, token } = useContext(UserContext);

    const onChange = (e) => {
        const { name, value } = e.target;
        setUserValue({...userValue, [name]:value});
    }

    
    const onSubmit = (e) => {
        e.preventDefault();
        const user = {username: userValue.username.trim(),
                      password: userValue.password.trim()}
        props.userLogin(user)
     }

    return(
        <div>
            <h2> Please Log in to Continue</h2>
            <form onSubmit={onSubmit} className="form" >
                <TextField
                    placeholder="Username..."
                    value={userValue.username}
                    onChange={onChange}
                    name="username"
                    className="textForm"
                    variant="outlined"
                    type="text"
                    />
                <TextField
                    placeholder="Password..."
                    value={userValue.password}
                    onChange={onChange}
                    name="password"
                    className="textForm"
                    variant="outlined"
                    type="text"
                    />
                <Button className="button" type="submit" >Log In</Button>

            </form >
            <div className="register" >
                <h3> Still not account? Register here!</h3>
                <Link to = "/Register">
                    <Button className="button" >Sign Up</Button>
                </Link>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}
export default connect(mapStateToProps, {userLogin})(Login)