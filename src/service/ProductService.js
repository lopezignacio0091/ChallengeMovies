import http from '../helpers/AxiosInstance';

const getSelectedProductById = (id) => {
    return http.get(`items/${id}`);
};

const getSelectedProductDescription = (id) => {
    return http.get(`items/${id}/description`);
};

const ProductService = {
    getSelectedProductById,
    getSelectedProductDescription
};

export default ProductService;