import React, { useState, useContext } from "react";
import uploadWithAuth from "../utils/uploadWithAuth";

import { UserContext } from "../contexts/userContext";

function HikeUpload() {
    const { localId } = useContext(UserContext);

    const initialValues = {comment: '', rating: ''};

    const [ formValue, setFormValue ] = useState(initialValues);
    const [ selectedFile, setSelectedFile ] = useState();
    const [ isPickedFile, setIsPickedFile ] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "file") {
            setSelectedFile(e.target.files[0]);
            setIsPickedFile(true);
        }
        setFormValue({...formValue, [name]:value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const hike = {  "comments": formValue.comment,
                        "rating": parseFloat(formValue.rating),
                        "trailid": 9,
                        "userid": parseInt(localId)};

        const formData = new FormData();
        const json = JSON.stringify(hike)
        const blob = new Blob([json], {type : 'application/json'});
        formData.append("hike", blob);
        
        if (isPickedFile) {
            formData.append("file", (selectedFile));
        }

        uploadWithAuth()
            .put(`/trails/trail/hike`, formData)
            .then(res => {
                console.log("Success!", res)

            }).catch(err => {
                if (err.response) {
                    // Request made and server responded
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                  } else if (err.request) {
                    // The request was made but no response was received
                    console.log(err.request);
                  } else {
                    // Something happened in setting up the request that triggered an error
                    console.log('Error', err.message);
                  }
            })
    }

 /**
 * todo create hike card to display hikes with optional image
 */
    return(
        <div className="HikeForm">
            <form onSubmit={handleSubmit}>
                <label>
                    Comments:
                    <input  type="text" 
                            name="comment"
                            placeholder="Tell us about your experience..."
                            value={formValue.comment} 
                            onChange={handleChange} />
                </label>
                <label>
                    Rating:
                    <select name="rating" onChange={handleChange} >
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select> 
                </label>
                <label>
                    Image:
                    <input type="file" name="file" accept="image/png, image/jpeg, image/gif" onChange={handleChange} />
                </label>
                <button >submit hike</button>
            </form>
        </div>
    )
}
export default HikeUpload;