import React, { useCallback, useContext } from 'react';
import { useDropzone} from 'react-dropzone';
import axiosWithAuth from '../utils/axiosWithAuth';
import { UserContext } from '../contexts/userContext';

function UploadImage () {

    const { localId } = useContext(UserContext);
    const onDrop = useCallback(acceptedFiles => {
        axiosWithAuth()
            .post(`/user/${localId}/image/upload`)
            .then(res => {
                const file = acceptedFiles[0]
                console.log(`file: ${file}`)
            })
            .catch(err => {
                console.log(err.message);
            })
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    
    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
            isDragActive ?
                <p>Drop the image here ...</p> :
                <p>Drag 'n' drop an image here, or click to select image</p>
            }
        </div>
    )
};

export default UploadImage;