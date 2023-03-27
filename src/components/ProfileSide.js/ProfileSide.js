import React from 'react'
import LogoSearch from './../LogoSearch/LogoSearch';
import './ProfileSide.css'
import ProfileCard from './../ProfileCard/ProfileCard';
import ProfileFollowers from './../ProfileFollowers.js/ProfileFollowers';

const ProfileSide = () => {
    return (
        <div className="ProfileSide">
            <LogoSearch></LogoSearch>
            <ProfileCard></ProfileCard>
            <ProfileFollowers></ProfileFollowers>
        </div>
    )
}

export default ProfileSide
