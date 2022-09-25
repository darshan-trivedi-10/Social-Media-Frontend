import axios from 'axios'

const API = axios.create({ baseURL: "https://mysocialmedia10.herokuapp.com/" })

export const uploadImage = (data) => {
    return API.post('/upload', data)
}

export const uploadPost = (data) => {
    return API.post('/post', data);
}