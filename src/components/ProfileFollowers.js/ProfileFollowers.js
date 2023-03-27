import React, { useEffect, useState } from 'react'
import { allUser } from '../../api/AuthAPi';
import { followers } from './../../Data/FollowersData';
import './ProfileFollower.css'
import { useSelector } from 'react-redux';
import defaultAvatart from '../../img/defaultAvatar.jpg'
import { Link } from 'react-router-dom';
import AllUsersComponent from './AllUsersComponent';
const ProfileFollowers = () => {
    const [allUsers, setAllUsers] = useState(null)
    let currentUserID = useSelector(state => state.AuthReducer.user._id)

    useEffect(() => {
        const getUser = async () => {

            let data = await allUser(currentUserID)
            let userss = data.data.filter(e => e._id !== currentUserID)
            console.log("CheckFo", userss);

            setAllUsers(userss)
        }
        getUser()
    }, [])
    return (
        <div className="ProfileFollowers">
            <h1 style={{
                fontSize: '1.2rem',
                margin: '.5rem 0'
            }}>Who is following you?</h1>
            <div className="user-ct">
                {/* {allUsers && allUsers.map((follower, index) => {
                    console.log("Helopp");
                    return <div className="flUsers">
                        <div className="userInfo">
                            <img src={follower.avatar || defaultAvatart} alt="" />
                            <div className="userName">
                                <h3><Link to={`../profile/${follower._id}`}>{follower.firstname} {follower.lastname}</Link></h3>
                                <p>@{follower.username}</p>
                            </div>
                        </div>
                        <div className="followerButton">
                            <p  >{follower.followers.includes(currentUserID) ? "UnFollow" : "Follow"}</p>
                        </div>
                    </div>
                })} */}
                {allUsers && allUsers.map(user => {
                    return <AllUsersComponent data={user} />
                })}
            </div>
        </div>
    )
}

export default ProfileFollowers
