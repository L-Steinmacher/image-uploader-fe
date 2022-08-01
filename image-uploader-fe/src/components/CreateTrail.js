import React, { useState } from 'react';
import { connect } from 'react-redux';
import { TextField, Button } from "@mui/material"

const CreateTrail = (props) => {
    const initialFormValues = {
        trailname: '',
        traildiscription: '',
        latitude: -1,
        longitude: -1,
    }

    const [ trailFormValues, setTrailFormValues ] = useState(initialFormValues);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTrailFormValues({...trailFormValues, [name]:value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit ", e)
    }

    return (
        <div className="container" >
            <h3>Lets get some info on your Trail</h3>
            <form onSubmit={handleSubmit} className="form-horizontal" >
                <TextField
                    margin='normal'
                    label='Trail Name'
                    placeholder='Trail Name'
                    name='trailname'
                    onChange={handleChange}
                    value={trailFormValues.trailname}
                    variant='outlined'
                />
                <TextField
                    margin='normal'
                    label='Trail Discription'
                    placeholder='Trail Discription'
                    name='traildiscription'
                    onChange={handleChange}
                    value={trailFormValues.traildiscription}
                    variant="outlined"
                />

            </form>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps)(CreateTrail); 