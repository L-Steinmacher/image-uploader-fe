import axios from 'axios';
import axiosWithAuth from "../../utils/axiosWithAuth";
import uploadWithAuth from "../../utils/uploadWithAuth";
import useLocalStorage from "../../hooks/useLocalStorage";

export const USER_LOGIN_LOADING = "USER_LOGIN_LOADING";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";

export const userLogin = (user) => {
    return (dispatch) => {
        dispatch({ type: USER_LOGIN_LOADING,});
        axios.post(`http://localhost:2019/login`,
        `grant_type=password&username=${user.username}&password=${user.password}`,
        {
            headers: {
            Authorization: `Basic ${process.env.REACT_APP_CLIENT_ID}`,
            "Content-Type": "application/x-www-form-urlencoded"
        }})
        .then(res => {
            useLocalStorage(res.data.token)
            dispatch({ type: USER_LOGIN_SUCCESS });
        })
        .catch(err => {
          console.log(err)
          dispatch({ type: USER_LOGIN_FAILURE , payload: err }) 
        }) 
    }
};

export const getUserData = () => {
    return(dispatch) => {
        
    } ;
}
