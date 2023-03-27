import { combineReducers } from "redux"
import { AuthReducer } from './AuthReducer';
import { PostReducer } from './PostReducer';
import { UserReducer } from './UserReducer';

export const rootReducer = combineReducers({
    AuthReducer, PostReducer, UserReducer
})