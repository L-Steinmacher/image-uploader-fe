import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const TrailPage = (props) => {
    useEffect(() => {
        console.log(props)
    }, [])
    return (
        <div>
            <h1>name here </h1>
            {props.trailData.trailName}
        </div>)
}

const mapStateToProps = (state) => {
    return {
        trailData: state.trailData,
        trailRatingData: state.trailRatingData,
    }
}
export default connect(mapStateToProps)(TrailPage);
