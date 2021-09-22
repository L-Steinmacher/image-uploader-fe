import React, { useState, useContext } from "react";
import { TextField, Button } from "@mui/material";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";

import UserContext from "../contexts/userContext";


export default function Login(){
    const initialValues = { username: '', 
                            password: ''};
    const { push } = useHistory();
    const [ userValue, setUserValue ] = useState(initialValues);
    const { setIsLoggedIn, setLocalId } = useContext(UserContext);

    const onChange = (e) => {
        const { name, value } = e.target;
        setUserValue = ({... userValue, [name]: value})
    }

    const submitLogin = (value) => {
        axios.post(`https://localhost/login`, value)
        .then(res => {
            setLocalId();
            setIsLoggedIn();
            push('/')
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    return(
        <div>
            <h2> Please Log in to Continue</h2>
            <form onSubmit={submitLogin} className="form" >
                <TextField 
                    placeholder = "username..."
                    value = {userValue.username}
                    name = "username"
                    className = "textForm"
                    variant = "outlined"
                    type = "text"
                    />
                <TextField 
                    placeholder = "password..."
                    value = {userValue.password}
                    name = "password"
                    className = "textForm"
                    variant = "outlined"
                    type = "text"
                    />
                <Button className = "button" type = "submit" variant = "contained">Log In</Button>
                
            </form >
            <div className="register" >
                <h3> Still not account? Register here!</h3>
                <Link to = "/Register">
                    <Button className = "button" >Register</Button>
                </Link>
            </div>
        </div>
    )
}