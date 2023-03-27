import axios from 'axios'

export const UploadPost = async (id) => {
    // return response de gan cho res
    return await axios.get(`https://social-media-server-1305.onrender.com/users/${id}`)

}
export const FollowUser = async (id, userId) => {
    // return response de gan cho res
    await axios.put(`https://social-media-server-1305.onrender.com/users/${id}/follow`, { currentUserId: userId })

}
export const UnFollowUser = async (id, userId) => {
    // return response de gan cho res
    await axios.put(`https://social-media-server-1305.onrender.com/users/${id}/unfollow`, { currentUserId: userId })

}