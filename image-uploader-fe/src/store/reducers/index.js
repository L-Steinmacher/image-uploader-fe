import {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_LOADING,
    USER_LOGIN_FAILURE,
    GET_USER_DATA_LOADING,
    GET_USER_DATA_SUCCESS,
    GET_USER_DATA_FAILURE,
} from '../actions';

const initialState = {
    error:"",
    isLoading:false,
    localId: false,
    isLoggedin: false,
    username: "",
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
            };

        case USER_LOGIN_LOADING:
            return {
                ...state,
                isLoggedin: true,
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

          default:
            return state;
    }
}