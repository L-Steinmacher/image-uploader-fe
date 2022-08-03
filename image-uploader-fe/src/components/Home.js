import React, { useEffect, useContext } from "react";
/* import axiosWithAuth from "../utils/axiosWithAuth"; */
/* import { ImageContext } from "../contexts/imageContext" */
/* import { UserContext } from "../contexts/userContext"; */
import TrailCard from "./TrailCard";
import SearchBar from "./SearchBar";
import { connect } from "react-redux";
import { getUserData, getAllTrailRatings } from "../store";

function Home (props){
    /* const { images, setImages } = useContext(ImageContext); */
    // const loggedIn = localStorage.getItem("userId"); 
    const {  getAllTrailRatings, getUserData, trailRatingDatai } = props    

    let cookies = document.cookie.split(';') 
    useEffect(() => {
        getUserData()
        getAllTrailRatings()
        console.log("************************* isLoggedIn: ", props.isLoggedIn, "username: ", props.username)
    },[getUserData,getAllTrailRatings, props.username, props.isLoggedIn])
    

    return(
        <div>
            <div className="hero-header ">
                <h1 className="hero-title"> {props.isLoggedIn ? `Welcome ${ props.username }!` : "Let us find your path."} </h1>
                <SearchBar/>
            </div>
            {props.trailRatingData.map(rating => {
                return <div >{rating.trailname} {rating.average} </div>
            })}
        </div>
    )
}
const mapStateToProps = (state) =>{
    return {
        isLoggedIn: state.isLoggedIn,
        username: state.username,
        trailRatingData: state.trailRatingData,
    }
}
export default connect(mapStateToProps, { getUserData, getAllTrailRatings })(Home);