import http from '../helpers/AxiosInstance';
import {KEY} from '../constants/types';


const getSearchbyQuery = (query) => {
    return http.get(`search/movie?api_key=${KEY}&query=${query}`);
};



const SearchService = {
    getSearchbyQuery,
   
};

export default SearchService;