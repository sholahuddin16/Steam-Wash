import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

//const url = 'http://localhost:5000/pegawai';

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
})

export const fetchPostsp = () => API.get('/pegawai');
export const createPostp = (newPostp) => API.post('/pegawai', newPostp);
export const updatePostp = (id, updatePostp) => API.patch(`/pegawai/${id}`, updatePostp);
export const deletePostp = (id) => API.delete(`/pegawai/${id}`);

export const signIn = (formData) => API.post('/users/signin', formData);
export const signUp = (formData) => API.post('/users/signup', formData);