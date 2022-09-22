import axios from 'axios'

const API = axios.create({ baseURL: "http://localhost:5000" })
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
})

export const getUser = (userId) => {
    API.get(`/user/${userId}`)
}

export const updateUser = (id, formData) => {
    return API.put(`/user/${id}`, formData);
}

export const getAllUser = (id) => {
    return API.get(`user/alluser/${id}`)
}

export const followUser = (id, data) => {
    return API.put(`/user/${id}/follow`, data)
}


export const unfollowUser = (id, data) => {
    return API.put(`/user/${id}/unfollow`, data)
}

export const getFollowers = (id) => {
    return API.get(`/user/followers/${id}`);
}

export const getFollowing = (id) => {
    return API.get(`/user/following/${id}`);
}

export const gerUserbyUsername = (username) => {
    return API.get(`/user/username/${username}`);
}