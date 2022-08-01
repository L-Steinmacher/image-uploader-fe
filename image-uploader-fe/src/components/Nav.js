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
        localStorage.removeItem('id');
        localStorage.removeItem('token');
        console.log(isLoggedIn, localId);
    }

    return(
        <div className="nav">
            <div className="navbar has-text-centered " >
                <nav className=' '>
                    <Link className="link" to="/">Home</Link>
                    {!isLoggedIn &&  <Link className="link" to="/login">Login</Link>}
                    {!isLoggedIn && !localId && <Link className="link" to="/signup">Sign Up</Link>}
                    <Link className="link" to="/hikeUpload">Upload A Hike</Link>
                    {isLoggedIn &&  <Link className="link" to="/login" onClick={handleLogout} >Log Out</Link>}
                </nav>
            </div>
       </div>
    )
}

export default Nav;