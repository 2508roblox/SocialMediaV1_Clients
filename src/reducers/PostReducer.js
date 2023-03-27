export const PostReducer = (state = { posts: [], isLoading: false, isError: false, userPosts: [] }, action) => {
    switch (action.type) {
        case 'IS_POSTING':
            console.log("Helo");

            return { ...state, isLoading: true, isError: false }
        case 'POSTING_SUCCESSFULLY':
            console.log("Helo");
            return { ...state, isLoading: false, posts: [action.payload, ...state.posts], userPosts: [...state.userPosts, action.payload] }
        case 'TIMELINE_SUCCESSFULLY':
            console.log("Helo");
            return { ...state, isLoading: false, posts: action.payload }

        case 'POSTING_ERROR':

            return { ...state, isError: true }
        case 'ALL_USER_POSTS':

            return { ...state, userPosts: action.payload }
        default:
            return state;
    }
}