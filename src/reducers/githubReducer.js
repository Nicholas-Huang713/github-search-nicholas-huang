import {GET_USER, GET_USER_FOLLOWING, GET_MORE_FOLLOWING} from '../actions/types';

const initialState = {
    user: {},
    following: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_USER: 
            return {
                ...state,
                user: action.payload
            };
        case GET_USER_FOLLOWING:
            return {
                ...state,
                following: action.payload
            }; 
        default:
            return state;
    }
}