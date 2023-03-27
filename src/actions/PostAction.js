import * as PostAPI from '../api/PostAPI.js'
import { useSelector } from 'react-redux';



export const uploadPost = (payload) => async (dispatch) => {
    try {
        // khong dat ten tham so trung ten bien trong ham
        dispatch({ type: 'IS_POSTING' })
        let res = await PostAPI.UploadPost(payload) // return response
        let data = res.data
        dispatch({ type: 'POSTING_SUCCESSFULLY', payload: data })
    } catch (error) {
        dispatch({ type: 'POSTING_ERROR' })
    }
}
export const getTimeLine = (id) => async (dispatch) => {
    try {
        // khong dat ten tham so trung ten bien trong ham

        let res = await PostAPI.TimeLine(id) // return response
        let data = res.data
        console.log(data);
        dispatch({ type: 'TIMELINE_SUCCESSFULLY', payload: data })
    } catch (error) {

    }
}
export const handleLikePost = (id, body) => async (dispatch) => {

    try {
        // khong dat ten tham so trung ten bien trong ham

        await PostAPI.likePost(id, body) // return response
        // let res = await PostAPI.TimeLine(id) // return response
        // let data = res.data
        // console.log(data);
        // dispatch({ type: 'TIMELINE_SUCCESSFULLY', payload: data })
    } catch (error) {

    }
}
export const handleUnLikePost = (id, body) => async (dispatch) => {

    try {
        // khong dat ten tham so trung ten bien trong ham

        await PostAPI.unlikePost(id, body) // return response
        // let res = await PostAPI.TimeLine(id) // return response
        // let data = res.data
        // console.log(data);
        // dispatch({ type: 'TIMELINE_SUCCESSFULLY', payload: data })
    } catch (error) {

    }
}
export const handleGetAllUserPosts = (id) => async (dispatch) => {

    try {
        console.log("fawef");
        let res = await PostAPI.allUserPosts(id)
        console.log(res);
        dispatch({ type: "ALL_USER_POSTS", payload: res.data })
        console.log("usersss");
    } catch (error) {

    }
}
