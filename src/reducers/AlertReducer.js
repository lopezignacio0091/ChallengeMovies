import {  SET_MENSAJE } from "../constants/types";

const initialState = {
    mensaje: '',
    severity: 'info',
    status: false
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_MENSAJE:
            return {
                ...state,
                mensaje: payload.mensaje,
                severity: payload.severity,
                status: payload.status
            }
        default:
            return state;
    }
}