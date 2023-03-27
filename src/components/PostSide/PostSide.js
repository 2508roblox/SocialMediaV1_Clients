import React from 'react'
import './PostSide.css'
import PostShare from './../PostShare/PostShare';
import Posts from './../Posts/Posts';

const PostSide = () => {
    return (
        <div className="PostSide">
            <PostShare></PostShare>
            <Posts></Posts>

        </div>
    )
}

export default PostSide
