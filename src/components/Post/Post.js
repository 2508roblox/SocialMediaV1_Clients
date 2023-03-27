import React, { useState } from 'react'
import './Post.css'
import { BiHeart } from "react-icons/bi";
import { BiCommentDetail } from "react-icons/bi";
import Liked from '../../img/like.png'
import { useSelector, useDispatch } from 'react-redux';
import { getTimeLine, handleLikePost, handleUnLikePost } from './../../actions/PostAction';
function Post({ data }) {
    let dispatch = useDispatch()

    let currentUserID = useSelector(state => state.AuthReducer.user._id)
    const [isLiked, setIsLiked] = useState(data.likes.includes(currentUserID))
    const [likes, setLikes] = useState(data.likes.length)

    const handleLike = () => {
        setLikes(prev => prev + 1)
        console.log('like');
        setIsLiked(true) // set view
        dispatch(handleLikePost(data._id, { currentUserId: currentUserID })) // set server side and update to redux
        // khi nao refesh lai thi se lay timeline
        // nen khong can get Timeline khi like, unlike
        //chay theo tuan tu await
    }
    const handleUnLike = () => {
        setLikes(prev => prev - 1)


        setIsLiked(false)

        console.log("unlike");
        dispatch(handleUnLikePost(data._id, { currentUserId: currentUserID }))


    }
    return (
        <div className="Post">
            <img width='100%' src={`https://social-media-server-1305.onrender.com/${data.image}`} alt="" />
            <div className="iconReact">
                {!isLiked ? <BiHeart onClick={handleLike} ></BiHeart> : <img onClick={handleUnLike} src={Liked} alt="" />

                }

                <BiCommentDetail></BiCommentDetail>
                <BiHeart ></BiHeart>
            </div>
            <div className="likes">
                <p> Likes {likes}</p>
            </div>
            <div className="desc">
                <p> {data.desc}</p>
            </div>
        </div>

    )
}

export default Post
