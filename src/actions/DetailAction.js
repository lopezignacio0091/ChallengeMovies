import { GET_DETAIL,ERROR,CLEAN_MOVIE_INFO,SET_LOADING } from "../constants/types";
import MovieService from '../service/MovieService';
export const viewDetail = value => async dispatch => {
    try {
        const { data } = await MovieService.getDetail(value);
        dispatch({
            type: GET_DETAIL,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: ERROR,
            payload: `Error ${error}`
        });
    }
}

export const cleanMovie = () => dispatch => {
    dispatch({
        type: CLEAN_MOVIE_INFO,
    });
}


export const setLoading = status => dispatch => {

    dispatch({
        type: SET_LOADING,
        payload: status
    });

}
