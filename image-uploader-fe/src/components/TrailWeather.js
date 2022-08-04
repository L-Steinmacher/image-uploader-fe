import React , { useEffect }  from 'react';
import { connect } from 'react-redux';
import { getTrailWeather } from '../store';

const TrailWeather = (props) => {

useEffect(() => {
    getTrailWeather(props.trailData.trailid)
},[])

return (
        <div className="trail-weather-container container" >
            TrailWeather here.
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        trailData: state.trailData,
    }
}
export default connect(mapStateToProps,{getTrailWeather})(TrailWeather);
