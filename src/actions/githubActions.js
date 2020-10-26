import {GET_USER, GET_USER_FOLLOWING} from './types';
import axios from 'axios';

export const getUser = (userName) => dispatch => {
    axios.get(`https://api.github.com/users/${userName}`, {
        
    })
    .then((res) => {
        console.log(res.data);
        dispatch({
            type: GET_USER,
            payload: res.data
        })
    }) 
    .catch(err => console.log(err));
};

export const getUserFollowing = (userName, pageIndex, pageSize) => dispatch => {
    axios(`https://api.github.com/users/${userName}/following?page=${pageIndex}&per_page=${pageSize}`, {
        
    })
    .then((res) => {
        console.log(res.data)
        dispatch({
            type: GET_USER_FOLLOWING,
            payload: res.data
        })
    })
    .catch(err => console.log(err));
};

