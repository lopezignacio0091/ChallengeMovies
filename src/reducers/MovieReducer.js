import { ERROR, 
    GET_ALL_MOVIES, 
    SET_LOADING, 
    GET_SEARCH_ITEMS, 
    SET_RAITING, 
    GET_ALL_SEARCH,
    CLEAN_FILTER,
 } from "../constants/types";
const initialState = {
    movies: [],
    moviesCopy: [],
    error: null,
    loading: true,
    valueRaiting: 0,
    movieDetail:{}
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_ALL_MOVIES:
            return {
                ...state,
                movies: payload.results,
                moviesCopy: payload.results,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: payload
            }
        case GET_SEARCH_ITEMS:
            return {
                ...state,
                movies: payload.results,
                loading: false
            }
            case CLEAN_FILTER:
                return {
                    ...state,
                    movies: state.moviesCopy,
                }
        case GET_ALL_SEARCH:
            return {
                ...state,
                movies: state.moviesCopy,
                loading: false
            }
        case SET_RAITING:
            return {
                ...state,
                valueRaiting: payload.valueRaiting,
                movies: payload.data.results,
                loading:false
            }
        case ERROR:
            return {
                ...state,
                error: true,
                loading:false
            }
        default:
            return state;
    }
}