import {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_LOADING,
    USER_LOGIN_FAILURE,
    GET_USER_DATA_LOADING,
    GET_USER_DATA_SUCCESS,
    GET_USER_DATA_FAILURE,
    GET_ALL_TRAILS_INFO_LOADING,
    GET_ALL_TRAILS_INFO_SUCCESS,
    GET_ALL_TRAILS_INFO_FAILURE,
    UPLOAD_HIKE_LOADING,
    UPLOAD_HIKE_SUCCESS,
    UPLOAD_HIKE_FAILURE,
    GET_ALL_TRAILS_RATINGS_LOADING,
    GET_ALL_TRAILS_RATINGS_SUCCESS,
    GET_ALL_TRAILS_RATINGS_FAILURE,
} from '../actions';

const initialState = {
    error:"",
    isLoading:false,
    localId: false,
    isLoggedin: false,
    username: "",
    trailsData: [],
    trailRatingData: [],
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedin: true,
                isLoading: false,
            };

        case USER_LOGIN_LOADING:
            return {
                ...state,
                isLoading: true,
            };

        case USER_LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            };

        case GET_USER_DATA_LOADING:
            return {
                ...state,
            };

        case GET_USER_DATA_SUCCESS:
            return {
                ...state,
                username: action.payload.username,
                localId: action.payload.id,
                isLoading: false,
            };

        case GET_USER_DATA_FAILURE:
            return {
                ...state,
               error: action.payload,
               isLoading: false,
            }

        case GET_ALL_TRAILS_INFO_LOADING:
            return {
                ...state,
                isLoading: true,
            }

        case GET_ALL_TRAILS_INFO_SUCCESS:
            return {
                ...state,
                trailsData: action.payload,
                isLoading: false,
            }

        case GET_ALL_TRAILS_INFO_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            }

        case GET_ALL_TRAILS_RATINGS_LOADING:
            return {
                ...state,
                isLoading: true,
            }  

        case GET_ALL_TRAILS_RATINGS_SUCCESS:
            return {
                trailRatingData: action.payload,
                isLoading: false,
            }

        case GET_ALL_TRAILS_RATINGS_FAILURE:
            return {
                ...state,
                error: action.payload, 
                isLoading: false,
            }
          default:
            return state;
    }
}