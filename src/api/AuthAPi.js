import axios from 'axios'
export const signUp = async (data) => {
    return await axios.post('https://social-media-server-1305.onrender.com/auth/register', data)
}
export const login = async (payload) => {
    return await axios.post('https://social-media-server-1305.onrender.com/auth/login', payload)
}
export const allUser = async (id) => {
    return await axios.get(`https://social-media-server-1305.onrender.com/auth/allUser/${id}`)
}
export const getUser = async (id) => {
    return await axios.get(`https://social-media-server-1305.onrender.com/users/${id}`)
}
export const updateUser = async (id, payload) => {
    return await axios.post(`https://social-media-server-1305.onrender.com/users/${id}`, payload)
}