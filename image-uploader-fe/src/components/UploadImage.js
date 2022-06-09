import React, { useCallback, useContext, useEffect } from 'react';
import { useDropzone} from 'react-dropzone';
import axiosWithAuth from '../utils/axiosWithAuth';
import uploadWithAuth from '../utils/uploadWithAuth';
import { UserContext } from '../contexts/userContext';
import { ImageContext } from '../contexts/imageContext';

function UploadImage () {
    const { images, setImages } = useContext(ImageContext)
    const { localId } = useContext(UserContext);
    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        const formData = new FormData();
        formData.append("file", file)
        uploadWithAuth()
            .post(`/users/user/${localId}/image/upload`, formData )
            .then(res => {
                setImages([...images, res.data])
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