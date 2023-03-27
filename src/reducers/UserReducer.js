
export const UserReducer = (state = { user: '', followings: 0, followers: 0 }, action) => {
    switch (action.type) {
        case "USER_SEEING":
            return { ...state, user: action.payload }
        // current user you see
        case "UNFOLLOWING":
            return { ...state, followings: state.followings - 1 }
        // current user you see
        case "FOLLOWING":
            return { ...state, followings: state.followings + 1 }

        // current user you see
        case "INIT_FOLLOWINGS":
            return { ...state, followings: action.payload }

        // current user you see



        default:
            return state
    }
}