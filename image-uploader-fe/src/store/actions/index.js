import axios from 'axios';
import axiosWithAuth from "../../utils/axiosWithAuth";
import uploadWithAuth from "../../utils/uploadWithAuth";
import { history } from '../../utils/history';

export const USER_LOGIN_LOADING = "USER_LOGIN_LOADING";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";
export const GET_USER_DATA_SUCCESS = "GET_USER_DATA_SUCCESS";
export const GET_USER_DATA_FAILURE = "GET_USER_DATA_FAILURE";
export const GET_USER_DATA_LOADING = "GET_USER_DATA_LOADING";
export const GET_ALL_TRAILS_INFO_LOADING = "GET_ALL_TRAILS_INFO_LOADING";
export const GET_ALL_TRAILS_INFO_SUCCESS = "GET_ALL_TRAILS_INFO_SUCCESS";
export const GET_ALL_TRAILS_INFO_FAILURE = "GET_ALL_TRAILS_INFO_FAILURE";
export const UPLOAD_HIKE_LOADING = "UPLOAD_HIKE_LOADING";
export const UPLOAD_HIKE_SUCCESS = "UPLOAD_HIKE_SUCCESS";
export const UPLOAD_HIKE_FAILURE = "UPLOAD_HIKE_FAILURE";
export const GET_ALL_TRAILS_RATINGS_LOADING = "GET_ALL_TRAILS_RATINGS_LOADING";
export const GET_ALL_TRAILS_RATINGS_SUCCESS = "GET_ALL_TRAILS_RATINGS_SUCCESS";
export const GET_ALL_TRAILS_RATINGS_FAILURE = "GET_ALL_TRAILS_INFO_LOADING";
export const GET_TRAIL_DATA_LOADING = "GET_TRAIL_DATA_LOADING";
export const GET_TRAIL_DATA_SUCCESS = "GET_TRAIL_DATA_SUCCESS";
export const GET_TRAIL_DATA_FAILURE = "GET_TRAIL_DATA_FAILURE";

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
            localStorage.setItem("token", res.data.access_token);
            dispatch({ type: USER_LOGIN_SUCCESS });
            history.push("/")
        })
        .catch(err => {
          console.log(err)
          dispatch({ type: USER_LOGIN_FAILURE , payload: err })
        })
    }
};

export const getUserData = () => {
    return(dispatch) => {
        dispatch({type: GET_USER_DATA_LOADING });
        axiosWithAuth()
            .get(`/users/getuserinfo`)
            .then(res => {
                dispatch({ type: GET_USER_DATA_SUCCESS, payload: res.data});
                localStorage.setItem("userId", res.data.id);
                console.log(res.data)
            })
            .catch(err =>{
                dispatch({ type: GET_USER_DATA_FAILURE , payload: err.message})
            })

    } ;
}

export const getAllTrailInfo = () => {
    return(dispatch) => {
        dispatch({ type: GET_ALL_TRAILS_INFO_LOADING });
        axios.get("http://localhost:2019/trails/trails")
        .then(res => {
            dispatch({ type: GET_ALL_TRAILS_INFO_SUCCESS, payload: res.data})
            console.log(res.data)
        })
        .catch(err =>{
            dispatch({ type: GET_ALL_TRAILS_INFO_FAILURE, payload: err.message})
        })
    }
}

export const uploadHike = (formData) => {
    return(dispatch) => {
        dispatch({type: UPLOAD_HIKE_LOADING});
        uploadWithAuth()
        .put(`/trails/trail/hike`, formData)
        .then(res => {
            console.log("Success hike upload!", res)
            dispatch({ type: UPLOAD_HIKE_SUCCESS, payload: res.data })
        }).catch(err => {
              dispatch({ type: UPLOAD_HIKE_FAILURE, payload: err.message})
        })

    }
}

export const getAllTrailRatings = () => {
    return(dispatch) => {
        dispatch({type: GET_ALL_TRAILS_RATINGS_LOADING});
        axios.get("http://localhost:2019/trails/trails/ratings")
        .then(res => {
            console.log("Success getting ratings!", res)
            dispatch({ type: GET_ALL_TRAILS_RATINGS_SUCCESS,payload: res.data})
        })
        .catch(err => {
            dispatch({type: GET_ALL_TRAILS_RATINGS_FAILURE, payload: err.message})
        })
    }
}

export const submitRegister = (formValues) => {
   return(dispatch) => {
       dispatch({type: GET_USER_DATA_LOADING })
       axios.post(`http://localhost:2019/createnewuser`, formValues)
        .then(res => {
            console.log(res)
            history.push('/login')
        }).catch(err => {
            console.error("error", err);
        })
   }
}

export const getTrailData = (id) => {
    return(dispatch) => {
        dispatch({type: GET_TRAIL_DATA_LOADING})
        axios.get(`http://localhost:2019/trails/trail/${id}`)
        .then(res => {

            history.push(`/trail/${id}`)
            console.log(res.data)
            dispatch({type: GET_TRAIL_DATA_SUCCESS,payload: res.data})
        })
        .catch(err => {
            dispatch({type: GET_TRAIL_DATA_FAILURE, payload: err.message})
        })
    }
}

