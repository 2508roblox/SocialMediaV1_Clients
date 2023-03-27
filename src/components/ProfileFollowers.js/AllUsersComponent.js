import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { FollowUser } from '../../api/UserAPI'
import defaultAvatart from '../../img/defaultAvatar.jpg'
import { UnFollowUser } from './../../api/UserAPI';
import { getUser } from './../../actions/UserAction';
import { UserReducer } from './../../reducers/UserReducer';

const AllUsersComponent = ({ data }) => {
    const dispatch = useDispatch()
    let { userID } = useParams()
    let currentUserID = useSelector(state => state.AuthReducer.user._id)
    let currentUserIDIs = useSelector(state => state.UserReducer.user)

    console.log(data);
    const [isFollowed, setIsFollowed] = useState(data.followers.includes(currentUserID))

    const handleFollow = () => {
        console.log("helo")
        if (!isFollowed) {
            //dang follow thi unfollow
            dispatch({ type: "FOLLOWING" })
            FollowUser(data._id, currentUserID)
            setIsFollowed(prev => !prev)
            // dispatch(getUser(userID || currentUserID))

        } else {
            dispatch({ type: "UNFOLLOWING" })

            UnFollowUser(data._id, currentUserID)

            setIsFollowed(prev => !prev)
            // dispatch(getUser(userID || currentUserID))
        }


    }

    return (
        <div className="flUsers">
            <div className="userInfo">
                <img src={data.profilePicture ? `https://social-media-server-1305.onrender.com/${data.profilePicture}.png` : defaultAvatart} alt="" />
                <div className="userName">
                    <h3><Link to={`../profile/${data._id}`}>{data.firstname} {data.lastname}</Link></h3>
                    <p>@{data.username}</p>
                </div>
            </div>
            <div style={isFollowed ? { "background": "none", "border": "2px solid orange", "cursor": "pointer", "color": "black" } : { "color": "white" }} onClick={() => { handleFollow() }} className="followerButton">
                <p style={isFollowed ? { "background": "none", "color": "black" } : { "color": "white" }}>{isFollowed ? "UnFollow" : "Follow"}</p>
            </div>
            {console.log('ehheehe')}
        </div>
    )
}

export default AllUsersComponent