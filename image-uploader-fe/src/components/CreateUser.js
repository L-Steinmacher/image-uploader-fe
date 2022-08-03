import React, { useState, useContext } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { TextField, Button } from "@mui/material";

import { UserContext } from "../contexts/userContext";
import { submitRegister } from "../store/actions";


const initialFormValues = {
    username: '',
    email: '',
    password: ''
}

const CreateUser = (props) => {
    // const { push } = useHistory();
    const [formValues, setFormValues] = useState(initialFormValues);
    const { setLocalId, setIsLoggedIn } = useContext(UserContext);

    // const submitRegister = (formValues) => {
        // const newUser = {
        //     "username": formValues.username.trim(),
        //     "password": formValues.password.trim(),
        //     "primaryemail": formValues.email.trim(),
        // }
        // axios.post(`http://localhost:2019/createnewuser`, newUser)
        // .then(res => {
        //     console.log(res)
        //     push('/login')
        // }).catch(err => {
        //     console.error("error", err);
        // })
    // }

    const onSubmit = (e) => {
        const newUser = {
            "username": formValues.username.trim(),
            "password": formValues.password.trim(),
            "primaryemail": formValues.email.trim(),
        }
         
        e.preventDefault();
        props.submitRegister(newUser);
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
                <Button type="submit" >Submit</Button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {submitRegister} )(CreateUser);