import { ERROR, GET_SEARCH_ITEMS, SET_LOADING,GET_ALL_SEARCH } from "../constants/types"
import SearchService from "../service/SearchService";

export const getSearhItems = query => async dispatch => {
    try {
        const {data} = await SearchService.getSearchbyQuery(query);

        dispatch({
            type:GET_SEARCH_ITEMS,
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

export const setLoading = status => dispatch=> {
    
    dispatch({
        type: SET_LOADING,
        payload:status
    });

}

export const getAllSearch = () => dispatch=> {
    
    dispatch({
        type: GET_ALL_SEARCH,
    });

}
