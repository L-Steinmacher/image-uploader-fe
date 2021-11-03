import React, { useState, useContext } from "react";
import { TextField, Button } from "@mui/material";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";

import {UserContext} from "../contexts/userContext";


export default function Login(){
    const initialValues = { username: '', 
                            password: ''};
    const { push } = useHistory();
    let [ userValue, setUserValue ] = useState(initialValues);
    const { setIsLoggedIn, setLocalId } = useContext(UserContext);

    const onChange = (e) => {
        const { name, value } = e.target;
        setUserValue({...userValue, [name]:value});
    }

    const submitLogin = () => {
        // const userlogin = { "grant_type" : "password",
        //                     "username" : userValue.username,
        //                     "password" : userValue.password
        // }
        axios.post(`http://localhost:2019/login`,
        `grant_type=password&username=${userValue.username}&password=${userValue.password}`,
        )
        .then(res => {
            setLocalId(true);
            setIsLoggedIn(true);
            push('/')
        })
        .catch(err => {
            console.log(err.message)
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        submitLogin(userValue);
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