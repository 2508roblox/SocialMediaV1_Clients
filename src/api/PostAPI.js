import axios from 'axios'

export const UploadPost = async (data) => {
    // return response de gan cho res
    return await axios.post('https://social-media-server-1305.onrender.com/post/create', data)

}
export const UploadFile = async (data) => {
    // return response de gan cho res
    return await axios.post('https://social-media-server-1305.onrender.com/file/upload', data)

}
export const TimeLine = async (id) => {
    // return response de gan cho res
    return await axios.get(`https://social-media-server-1305.onrender.com/post/${id}/timeline`)

}
export const likePost = async (id, body) => {
    // return response de gan cho res
    await axios.put(`https://social-media-server-1305.onrender.com/post/${id}/like`, body)

}
export const unlikePost = async (id, body) => {
    // return response de gan cho res
    await axios.put(`https://social-media-server-1305.onrender.com/post/${id}/unlike`, body)

}
export const allUserPosts = async (id) => {
    // return response de gan cho res
    return await axios.get(`https://social-media-server-1305.onrender.com/post/${id}/userPosts`)

}