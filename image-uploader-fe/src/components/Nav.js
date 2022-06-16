import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import {UserContext} from '../contexts/userContext';

import serverLogout  from '../utils/serverLogout';

function Nav () {
    const { setIsLoggedIn, setLocalId } = useContext(UserContext);
    const { push } = useHistory();

    const handleLogout = () => {
        serverLogout();
        setIsLoggedIn(false);
        setLocalId(false);
        push('/');
    }

    return(
        <div className="Nav">
            <h1>Welcome to the Internet!</h1>
            <nav>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/login">Login</Link>
                <Link className="link" to="/signup">Sign Up</Link>
                <Link className="link" to="/hikeUpload">hike</Link>
                <Link className="link" to="/login" onClick={handleLogout} >Log Out</Link>
            </nav>
        </div>
    )

}

export default Nav;