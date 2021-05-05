import { FETCH_USERS, FETCH_USER, NEW_USER, UPDATE_USER, LOGIN, LOGOUT } from './types';

export const fetchUsers = () => dispatch => {
    fetch("http://localhost:8080/users")
        .then(res => res.json())
        .then(users => dispatch({
            type: FETCH_USERS,
            payload: users
        }));
};

export const fetchUser = (userName) => dispatch => {
    fetch(`http://localhost:8080/users/userName/${userName}`)
        .then(res => res.json())
        .then(user => dispatch({
            type: FETCH_USER,
            payload: user
        }));
} 

export const createUser = (userData) => dispatch => {
    fetch('http://localhost:8080/add/user', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(res => res.json())
        .then(user => dispatch({
            type: NEW_USER,
            payload: user
        }))
}

export const updateUser = (user) => dispatch => {
    fetch(`http://localhost:8080/update/user/${user.id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(dispatch({
            type: UPDATE_USER,
            payload: user
        }))
}

export const login = (user) => dispatch => dispatch({ type: LOGIN, payload: user});

export const logout = () => ({ type: LOGOUT, payload: {userName: ""}});