// This is where all the routes are initiated from the backend to the front end
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' })

// const url = 'http://localhost:5000/posts';

API.interceptors.request.use((req) => {  //this will send our token to the backend midddleware to verify that we are logged in
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`; // this will get our token 
    }

    return req;
})


export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);


//once we have the api requests here, we move on to Actions