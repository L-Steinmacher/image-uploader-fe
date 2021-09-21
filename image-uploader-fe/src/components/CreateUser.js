import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { TextField } from "@mui/material";


const initialFormValues = {
    username: '',
    email: '',
    password: ''
}

export default function CreateUser() {
    const { push } = useHistory();
    const [formValues, setFormValues] = useState(initialFormValues);

    const onSubmit = (e) => {
        e.preventDefault();
        submitRegister(formValues);
    }

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormValues({...formValues, [name]:value});
    }

    return(
        <div>
            <h1>Create User</h1>
            <form onSubmit={onSubmit}>


                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}