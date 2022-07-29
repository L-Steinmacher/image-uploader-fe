import React from 'react';
import { connect } from 'react-redux';

const TrailCard = (props) => {
    return (
        <div className="container TrailCard">
            Trail name and info goes here.
            
        </div>
    )
}
const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps)(TrailCard);