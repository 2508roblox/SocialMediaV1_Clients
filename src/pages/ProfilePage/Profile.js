import React from 'react'
import ProfileSide from './../../components/ProfileSide.js/ProfileSide';
import './Profile.css'
import { ProfileLeft } from './../../components/ProfileLeft/ProfileLeft';
import { ProfileCenter } from './../../components/ProfileCenter/ProfileCenter';
import { ProfileRight } from './../../components/ProfileRIght/ProfileRight';
import { Routes, Route, useParams } from 'react-router-dom';
export const Profile = () => {
    let { userID } = useParams()
    return (
        <div className="Profile">
            <ProfileLeft userID={userID}>

            </ProfileLeft>
            <ProfileCenter userID={userID}>

            </ProfileCenter>
            <ProfileRight></ProfileRight>
        </div>
    )
}
