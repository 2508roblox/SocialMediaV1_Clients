import React, { useEffect, useState } from 'react'
import helo from '../../img/cover.jpg'
import avatar from '../../img/profileImg.jpg'
import './ProfileCard.css'
import { useSelector, useDispatch } from 'react-redux';
import { allUserPosts } from '../../api/PostAPI';
import { handleGetAllUserPosts } from './../../actions/PostAction';
import defaultAvatart from '../../img/defaultAvatar.jpg'

import { Link, useLocation, useParams } from 'react-router-dom'

import { getUser } from './../../actions/UserAction';
const ProfileCard = () => {

    const profilePage = true;
    const auth = useSelector(state => state.AuthReducer.user)
    const user = useSelector(state => state.UserReducer.user)

    const dispatch = useDispatch()
    const postLength = useSelector(state => state.PostReducer.userPosts)
    const postTimeLineLength = useSelector(state => state.PostReducer.posts)
    const followingsCount = useSelector(state => state.UserReducer.followings)
    let { userID } = useParams()
    console.log(userID)
    useEffect(() => {
        dispatch(getUser(userID || auth._id))
        // dispatch()
        // current uuser and post of user
        dispatch(handleGetAllUserPosts(userID || auth._id))
        // them default neu không tham số truyền vào là null
    }, [userID])

    const location = useLocation()
    console.log(user);
    return (

        <div className="ProfileCard">
            <div className="profileImg">
                <img style={location.pathname.includes('home') ? { "height": "150px" } : { "height": "250px" }} src={user.coverPicture ? `https://social-media-server-1305.onrender.com/${user.coverPicture}.png` : helo} alt="" />
                <img src={user.profilePicture ? ` https://social-media-server-1305.onrender.com/${user.profilePicture}.png` : defaultAvatart} alt="" />
            </div>
            <div className="profileName">

                <h1>{user.firstname} {user.lastname}</h1>
                <p>{user.about || "Edit your about..." || "Edit your about..."}</p>
            </div>
            <div className="profileStatus">
                <hr />
                <div className="followNumber">
                    {location.pathname.includes('home') && <>
                        <p>{user.followers.length}  <span>Follower</span></p>
                        <p>{followingsCount}  <span> followings</span></p>
                    </>}
                    {!location.pathname.includes('home') && userID === auth._id && <>
                        <p>{user.followers.length}  <span>Followerz</span></p>
                        <p>{followingsCount}  <span> followings</span></p>
                    </>}
                    {!location.pathname.includes('home') && userID !== auth._id && <>
                        <p>{user.followers.length}  <span>Followerz</span></p>
                        <p>{user.followings.length}  <span> followings</span></p>
                    </>}
                    {/* {<p>{user.followers.length}  <span>Follower</span></p>}
                    {<p>{location.pathname.includes('home') || userID === auth._id ? followingsCount : user.followings.length}  <span> followings</span></p>} */}
                    {profilePage &&
                        <>
                            <p>{postLength.length}  <span>Posts</span></p></>
                        // loi postLength.leng undefined vi khong co bai post nao nen ko co length
                        // toc do re-render nhanh nen ko phai lo khi chua co state tra ve
                        // cho lo khi state tra ve gia tri null, undefined,, []
                    }
                </div>
                <hr />
            </div>
            <h3><Link to={`../profile/${auth._id}`}>My Profile</Link></h3>

        </div >
    )
}

export default ProfileCard
