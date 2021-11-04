import http from '../helpers/AxiosInstance';
import {KEY} from '../constants/types';
const getAll = () => {
    return http.get(`discover/movie?api_key=${KEY}`);
};

const getRaiting = (menor,mayor) =>{
    return http.get(`discover/movie?api_key=${KEY}&vote_average.gte=${menor}&vote_average.lte=${mayor}`)
}

const getDetail = value =>{
    return http.get(`/movie/${value}?api_key=${KEY}`);
}

const MovieService = {
    getAll,
    getRaiting,
    getDetail
};

export default MovieService;