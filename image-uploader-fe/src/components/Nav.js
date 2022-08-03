import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import {UserContext} from '../contexts/userContext';

import serverLogout  from '../utils/serverLogout';

function Nav (props) {
    // const { isLoggedIn, localId, setIsLoggedIn, setLocalId } = useContext(UserContext);
    const { push } = useHistory();
    const { isLoggedIn } = props;
    const handleLogout = () => {
        serverLogout();
        /* setIsLoggedIn(false); */
        /* setLocalId(false); */
        push('/');
        localStorage.clear('id');
        localStorage.clear('token');
        // console.log(isLoggedIn, localId);
    }

    return(
        <div className="nav">
            <div className="navbar has-text-centered " >
                <nav className=' '>
                    <Link className="link" to="/">Home</Link>
                    {!isLoggedIn &&  <Link className="link" to="/login">Login</Link>}
                    {!isLoggedIn  && <Link className="link" to="/signup">Sign Up</Link>}
                    <Link className="link" to="/hikeUpload">Upload A Hike</Link>
                    <Link className="link" to="/login" onClick={handleLogout} >Log Out</Link>
                </nav>
            </div>
       </div>
    )
}
const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps) (Nav);