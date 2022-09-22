import axios from 'axios'

const API = axios.create({ baseURL: "http://localhost:5000" })

export const logIn = (userData) => {
    return API.post('/auth/login', userData);
}
    
export const signUp = (userData) => {
    return API.post('/auth/register', userData);
}