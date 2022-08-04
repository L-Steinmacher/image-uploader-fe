import React , { useEffect }  from 'react';
import { connect } from 'react-redux';
import { getTrailWeather } from '../store';

const TrailWeather = (props) => {

useEffect(() => {
    props.getTrailWeather(props.trailData.trailid)
    console.log(props, props.trailData.trailid)
},[props.trailData.trailid])

return (
        <div className="trail-weather-container container" >
            TrailWeather here.
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        trailData: state.trailData,
        trailWeather: state.trailWeather,
    }
}
export default connect(mapStateToProps, { getTrailWeather })(TrailWeather);
