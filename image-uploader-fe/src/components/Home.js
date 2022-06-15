import React, { useEffect, useContext } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { ImageContext } from "../contexts/imageContext"
import { UserContext } from "../contexts/userContext";
import Card from "./Card";

function Home (){
    const { images, setImages } = useContext(ImageContext);
    const { localId, setLocalId } = useContext(UserContext)

    useEffect(() => {
        axiosWithAuth()
            .get(`/users/getuserinfo`)
            .then(res => {
                setLocalId(res.data.id)
            })
            .catch(err =>{
                console.log(err.message)
            })
        
    },[])

    useEffect(() => {
        axiosWithAuth()
        .get(`/users/images/`)
        .then(res => {
            console.log(res.data)
            setImages(res.data)
        }).catch(err => {
            console.log(err.message)
        })
    },[])

    return(
        <div>

            {images.map(image => {
                return <Card key={image.id} image={image} />
            })}
        </div>
    )
}
export default Home;