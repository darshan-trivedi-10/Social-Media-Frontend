import axios from 'axios'

const API = axios.create(
    {
        baseURL: "https://mysocialmedia10.herokuapp.com",
    }
)

export const logIn = async (userData) => {
    return API.post('/auth/login', userData);
}
   
export const signUp = (userData) => {
    return API.post('/auth/register', userData);
}    