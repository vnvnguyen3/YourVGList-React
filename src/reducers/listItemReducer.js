import { FETCH_LISTITEMS, NEW_LISTITEM } from '../actions/types';

const initialState = {
    listItems: [],
    listItem: {}
}

export default function(state = initialState, action) {
    switch(action.type){
        case FETCH_LISTITEMS:
            return {
                ...state,
                listItems: action.payload
            };
        case NEW_LISTITEM:
            return {
                ...state,
                listItem: action.payload
            }
        default:
            return state;
    }
}