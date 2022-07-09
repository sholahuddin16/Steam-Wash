import axios from 'axios';

const API = axios.create({ baseURL: 'http://192.168.1.3:5000' });

//const url = 'http://localhost:5000/pegawai';

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }

    return req;
});

export const fetchPostsp = () => API.get('/pegawai');
export const createPostp = (newPostp) => API.post('/pegawai', newPostp);
export const deletePostp = (id) => API.delete(`/pegawai/${id}`);
export const updatePostp = (id, updatePostp) => API.patch(`/pegawai/${id}`, updatePostp);

export const fetchPosts = () => API.get('/pelanggan');
export const fetchPostsBySearch = (searchQuery) => API.get(`/pelanggan/search?searchQuery=${searchQuery.search  || 'none'}`);
export const fetchPost = (id) => API.get(`/pelanggan/${id}`);
export const createPost = (newPost) => API.post('/pelanggan', newPost);
export const deletePost = (id) => API.delete(`/pelanggan/${id}`);
export const updatePost = (id, updatePost) => API.patch(`/pelanggan/${id}`, updatePost);


export const signIn = (formData) => API.post('/users/signin', formData);
export const signUp = (formData) => API.post('/users/signup', formData);