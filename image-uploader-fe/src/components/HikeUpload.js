import React, { useEffect, useState } from "react";
import uploadWithAuth from "../utils/uploadWithAuth";

function HikeUpload() {
    const initialValues = {comment: '',
                            rating: 3};

    let [ formValue, setFormValue ] = useState(initialValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({...formValue, [name]:value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        uploadWithAuth();
    }

/**
 * Todo ensure file type is of of accepted type
 * todo create hike card to display hikes with optional image
 */
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Comments:
                    <input type="text" name="comment" onChange={handleChange} />
                </label>
                <label>
                    Rating:
                    <select value={formValue} onchange={handleChange}>
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select> 
                </label>
                <label>
                    Image:
                    <input type="file" />
                </label>
                <button >submit hike</button>
            </form>
        </div>
    )
}
export default HikeUpload;