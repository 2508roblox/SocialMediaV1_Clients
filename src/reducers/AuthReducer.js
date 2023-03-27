export const AuthReducer = (state = { user: "", loading: false, error: false, }, action) => {
    switch (action.type) {
        case "IS_PROCESSING":
            return { ...state, loading: true, error: false }

        case "IS_SUCCESSFULLY":
            return { ...state, user: action.payload, loading: false }

        case "IS_ERROR":
            return { ...state, error: true, loading: false }
        case "LOGOUT":
            return { ...state, user: null, loading: false, error: false }




        default:
            return state
    }
}