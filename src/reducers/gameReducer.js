import { FETCH_GAMES, NEW_GAME } from '../actions/types';

const initialState = {
    games: [],
    game: {}
}

export default function(state = initialState, action) {
    switch(action.type){
        case FETCH_GAMES:
            return {
                ...state,
                games: action.payload
            };
        case NEW_GAME:
            return {
                ...state,
                game: action.payload
            }
        default:
            return state;
    }
}