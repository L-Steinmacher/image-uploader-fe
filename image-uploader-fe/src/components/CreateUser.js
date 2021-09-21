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

    const submitRegister = (value) => {
        axios.post(`https://http://localhost:2019/user`, value)
        .then(res => {
            console.log(res)
            push('/login')
        }).catch(err => {
            console.log(err);
        })
    }

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
                <TextField
                margin="normal"
                label="Username"
                placeholder="Username"
                name="username"
                onChange={onChange}
                value={formValues.username}
                variant="outlined"
                />

                <TextField
                margin="normal"
                label="Email"
                variant="outlined"
                placeholder="Email"
                onChange={onChange}
                value= {formValues.email}
                name= "email"
                />

                <TextField
                margin="normal"
                type= "password"
                onChange={onChange}
                value= {formValues.password}
                name= "password"
                variant="outlined"
                placeholder="Password"
                label="Password"
                />
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}