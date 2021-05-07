import { FETCH_USERS, FETCH_USER, NEW_USER, UPDATE_USER, LOGIN, LOGOUT } from '../actions/types';

const initialState = {
    users: [],
    user: {},
    profile: {userName: ""}
}

export default function(state = initialState, action) {
    switch(action.type){
        case FETCH_USERS:
            return {
                ...state,
                users: action.payload
            };
        case FETCH_USER:
            return {
                ...state,
                user: action.payload
            };
        case NEW_USER:
            return {
                ...state,
                profile: action.payload
            }
        case UPDATE_USER:
            return {
                ...state,
                profile: action.payload
            }
        case LOGIN:
            return {
                ...state,
                profile: action.payload
            };
        case LOGOUT:
            alert("You have successfully logged out");
            return {
                ...state,
                profile: action.payload
            };
        default:
            return state;
    }
}