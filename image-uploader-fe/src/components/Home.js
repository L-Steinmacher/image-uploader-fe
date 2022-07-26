import React, { useEffect, useContext } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { ImageContext } from "../contexts/imageContext"
import { UserContext } from "../contexts/userContext";
import Card from "./Card";
import SearchBar from "./SearchBar";
import { connect } from "react-redux";
import { getUserData } from "../store";

function Home (props){
    const { images, setImages } = useContext(ImageContext);
    const { localId, setLocalId, setToken, setUserName, userName } = useContext(UserContext)
    const loggedIn = localStorage.getItem("userId"); 
    useEffect(() => {
        props.getUserData()
    },[props.isLoggedIn])

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
            <div className="hero-header ">
                <h1 className="hero-title"> {loggedIn ? `Welcome ${props.username}!` : "Let us find your path."} </h1>
                <SearchBar/>
            </div>
            {images.map(image => {
                return <Card key={image.id} image={image} />
            })}
        </div>
    )
}
const mapStateToProps = (state) =>{
    return {
        isLoggedIn: state.isLoggedIn,
        username: state.username,
    }
}
export default connect(mapStateToProps, { getUserData })(Home) ;