import {  GET_DETAIL,SET_LOADING,CLEAN_MOVIE_INFO} from "../constants/types";

const initialState = {
   loading:false,
    movieDetail:{}
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_DETAIL:
            return {
                ...state,
                movieDetail: payload,
                loading:false,
            }
            case SET_LOADING:
            return {
                ...state,
                loading: payload
            }
            case CLEAN_MOVIE_INFO:
                return {
                    ...state,
                    movieDetail: {},
                    loading:false,
                }
        default:
            return state;
    }
}