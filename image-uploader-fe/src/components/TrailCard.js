import React from 'react';
import { connect } from 'react-redux';

import { getTrailData } from '../store/actions';

const TrailCard = (props) => {
    const {trailname, average, trailid } = props.props
    const handleClick = (e) => {
        e.preventDefault();
        props.getTrailData(trailid);
    }

    return (
        <div className="container trailCard" onClick={handleClick} >
            <h3>{ trailname }</h3>
            <span> { average } </span>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        TrailData: state.TrailData,
    }
}
export default connect(mapStateToProps, {getTrailData} )(TrailCard);
