import { TextField } from "@mui/material";
import React, { useState, useContext } from "react";

const SearchBar = () => {
    const [ searchValue, setSearchValue ] = useState("")
    const onChange = (e) => {    
        const {name, value} = e.target;
        setSearchValue({...searchValue, [name]: value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("onSubmit", e);
    };

    return (
        <div className="search-bar">
            <form onSubmit={onSubmit} className="form">
                <TextField 
                    className="search-field" 
                    placeholder="Search for hikes..."
                    value={searchValue}
                    variant="outlined"
                    type="text"
                    onChange={onChange}
                    name="searchValue" />
            </form>
        </div>
    )
}

export default SearchBar;