
import { GET_ALL_MOVIES, SET_LOADING, ERROR, SET_RAITING,CLEAN_FILTER } from '../constants/types';
import MovieService from '../service/MovieService';

export const getAllMovies = () => async dispatch => {
    try {
        const { data } = await MovieService.getAll();
        dispatch({
            type: GET_ALL_MOVIES,
            payload: data
        });
    }
    catch (error) {
        dispatch({
            type: ERROR,
            payload: `Error ${error}`
        });
    }
}

export const setLoading = status => dispatch => {

    dispatch({
        type: SET_LOADING,
        payload: status
    });

}

export const setRaiting = value => async dispatch => {

    try {
        const { data } = await MovieService.getRaiting((value * 2) - 1, value * 2);
        dispatch({
            type: SET_RAITING,
            payload: { 'valueRaiting': value, 'data': data }
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: `Error ${error}`
        });
    }
}


export const removeFilter =()=>dispatch=>{
    dispatch({
        type: CLEAN_FILTER,
    });
}