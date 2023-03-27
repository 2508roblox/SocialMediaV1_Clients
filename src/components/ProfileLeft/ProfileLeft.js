import React from 'react'
import LogoSearch from './../LogoSearch/LogoSearch';
import ProfileFollowers from './../ProfileFollowers.js/ProfileFollowers';
import './ProfileLeft.css'
import { InfoCard } from './../InfoCard/InfoCard';
export const ProfileLeft = ({ userID }) => {
    return (
        <div className="ProfileLeft">
            <LogoSearch></LogoSearch>
            <InfoCard userID={{ userID }}></InfoCard>
            <ProfileFollowers></ProfileFollowers>
        </div>
    )
}
