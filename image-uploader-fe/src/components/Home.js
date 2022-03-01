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
        
        const userid = localStorage.getItem("id");

        axiosWithAuth()
            .get(`/users/images/`)
            .then(res => {
                setImages(res.data)
                // console.log(res.data)
            }).catch(err => {
                console.log(err.message)
            })
        
    },[])

    return(
        <div>
            <h3>Welcome </h3>
            {images.map(image => {
                return <Card key={image.id} image={image} />
            })}
        </div>
    )
}
export default Home;