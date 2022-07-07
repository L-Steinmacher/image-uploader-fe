import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import {UserContext} from '../contexts/userContext';

import serverLogout  from '../utils/serverLogout';

function Nav () {
    const { isLoggedIn, localId, setIsLoggedIn, setLocalId } = useContext(UserContext);
    const { push } = useHistory();

    const handleLogout = () => {
        serverLogout();
        setIsLoggedIn(false);
        setLocalId(false);
        push('/');
    }

    return(
        <div className="nav">
            <h1>Welcome USERNAME GOES HERE!</h1>
            <div classname="navbar has-text-centered container" >
                <nav className='container '>
                    <Link className="link" to="/">Home</Link>
                    {!isLoggedIn && !localId && <Link className="link" to="/login">Login</Link>}
                    {!isLoggedIn && !localId && <Link className="link" to="/signup">Sign Up</Link>}
                    <Link className="link" to="/hikeUpload">Upload A Hike</Link>
                    {isLoggedIn && localId && <Link className="link" to="/login" onClick={handleLogout} >Log Out</Link>}
                </nav>
            </div>
       </div>
    )
}

export default Nav;