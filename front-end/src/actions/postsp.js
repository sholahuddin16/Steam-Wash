import * as api from '../api/index.js';
import { CREATE, UPDATE, DELETE, FETCH_ALL } from '../constants/actionTypes.js';

export const getPostsp = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPostsp();

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message)
    }
};

export const createPostp = (postp) => async (dispatch) => {
    try {
        const { data } = await api.createPostp(postp);

        dispatch({ type: CREATE, payload: data });
        console.log("berhasil menambahkan")
    } catch (error) {
        console.log(error.message);
    }
};

export const updatePostp = (id, postp) => async (dispatch) => {
    try {
        const { data } = await api.updatePostp(id, postp);

        dispatch({ type: UPDATE, payload: data });
        console.log("berhasil edit data")
    } catch (error) {
        console.log(error.message)
    }
};

export const deletePostp = (id) => async (dispatch) => {
    try {
        await api.deletePostp(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error)
    }
};