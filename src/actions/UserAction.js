import * as AuthAPI from '../api/AuthAPi'

export const getUser = (payload) => async (dispatch) => {
    try {
        let response = await AuthAPI.getUser(payload)
        console.log("getUser: ", response.data);

        let data = response.data

        dispatch({ type: "USER_SEEING", payload: data })
        dispatch({ type: "INIT_FOLLOWINGS", payload: data.followings.length })
    } catch (error) {

    }


}
export const upDateUser = (id, payload) => async (dispatch) => {
    try {
        await AuthAPI.updateUser(id, payload)
        let response = await AuthAPI.getUser(id)
        console.log("getUser: ", response.data);

        let data = response.data

        dispatch({ type: "USER_SEEING", payload: data })
        // thay doi => re-render

    } catch (error) {

    }


}