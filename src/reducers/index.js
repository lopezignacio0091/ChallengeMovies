import { combineReducers } from "redux";
import AlertReducer from './AlertReducer';
import MoviesReducer from "./MovieReducer";
import DetailReducer from "./DetailReducer";

export default combineReducers({
    AlertReducer,
    MoviesReducer,
    DetailReducer
});