import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import {UserContext} from '../contexts/userContext';
import axiosWithAuth from '../utils/axiosWithAuth';

function Nav () {
    const { isLoggedIn, setIsLoggedIn, localId, setLocalId } = useContext(UserContext);
    const { push } = useHistory();

    const serverLogout = () => {
        axiosWithAuth()
            .get(`/logout`)
            .then(res => {

            })
            .catch(err => {
                console.log(err.message)
            })
    }

    const handleLogout = () => {
        serverLogout();
        setIsLoggedIn(false);
        setLocalId(false);
        localStorage.removeItem('id');
        localStorage.removeItem('token')
        push('/login');
    }

    return(
        <div className="Nav">
            <h1>Welcome to the Internet!</h1>
            <nav>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/login">Login</Link>
                <Link className="link" to="/signup">Sign Up</Link>
                <Link className="link" to="/uploadimage">Upload Image</Link>
                <Link className="link" to="/logout" onClick={handleLogout} >Log Out</Link>
            </nav>
        </div>
    )

}

export default Nav;