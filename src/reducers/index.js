import {combineReducers} from "redux";
import gameReducer from './gameReducer';
import userReducer from './userReducer';
import listItemReducer from './listItemReducer';

export default combineReducers({
    users: userReducer,
    games: gameReducer,
    listItems: listItemReducer
});