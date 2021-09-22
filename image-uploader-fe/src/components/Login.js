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

        </div>
    )
}