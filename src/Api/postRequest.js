import axios from 'axios'

const API = axios.create({ baseURL: "https://social-media-backend-2vez.onrender.com/" })

export const getTimelinePosts = (id) => {
    return API.get(`post/${id}/timeline`);
}

export const likeunlikePost = (postId, userId) => {
    API.put(`post/${postId}/like`, { userId: userId });
}