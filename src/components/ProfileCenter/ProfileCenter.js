import React from 'react'
import ProfileCard from './../ProfileCard/ProfileCard';
import Posts from './../Posts/Posts';
import './ProfileCenter.css'
import { TrendCard } from './../TrendCard/TrendCard';
export const ProfileCenter = () => {
    return (
        <div className="ProfileCenter">
            <ProfileCard></ProfileCard>
            <Posts></Posts>

        </div>
    )
}
