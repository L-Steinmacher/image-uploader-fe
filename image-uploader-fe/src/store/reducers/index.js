import {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_LOADING,
    USER_LOGIN_FAILURE,
} from '../actions';

const initialState = {
    error:"",
    isLoading:false,
    localId: false,
    isLoggedin: false,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false
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

          default:
            return state;
    }
}