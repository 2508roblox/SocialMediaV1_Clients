import * as AuthAPI from '../api/AuthAPi'
export const signUp = (payload) => async (dispatch) => {
    try {
        dispatch({ type: "IS_PROCESSING" })
        let response = await AuthAPI.signUp(payload)
        let data = response.data
        console.log(response);
        dispatch({ type: "IS_SUCCESSFULLY", payload: data })

    } catch (error) {
        dispatch({ type: "IS_ERROR" })
    }


}
export const login = (payload) => async (dispatch) => {
    try {
        dispatch({ type: "IS_PROCESSING" })
        let response = await AuthAPI.login(payload)
        console.log(response);

        let data = response.data
        dispatch({ type: "IS_SUCCESSFULLY", payload: data })

    } catch (error) {
        dispatch({ type: "IS_ERROR" })
    }


}
export const logout = () => async (dispatch) => {
    try {
      
      
        

        
        dispatch({ type: "LOGOUT" })

    } catch (error) {
        dispatch({ type: "IS_ERROR" })
    }


}
