import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TrailWeather from './TrailWeather';

const TrailPage = (props) => {
    useEffect(() => {
        console.log("props", props)
    }, [])
    return (
        <div>
            <h1>{props.trailData.trailname}</h1>
            <p>{props.trailData.traildiscription} </p>
            <TrailWeather />
        </div>)
}

const mapStateToProps = (state) => {
    return {
        trailData: state.trailData,
        trailRatingData: state.trailRatingData,
    }
}
export default connect(mapStateToProps)(TrailPage);
