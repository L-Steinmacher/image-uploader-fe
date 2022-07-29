import React from 'react';
import { connect } from 'react-redux';

const CreateTrail = (props) => {

    return (
        <div className="container" >
            create trail form goes here.
        </div>
    )
}
const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps)(CreateTrail); 