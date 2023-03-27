import React from 'react'
import './Home.css'
import ProfileSide from './../components/ProfileSide.js/ProfileSide';
import PostSide from './../components/PostSide/PostSide';
import RightSide from './../components/RightSide/RightSide';
const Home = () => {
  return (
    <div className="Home">
      <ProfileSide></ProfileSide>
      <PostSide></PostSide>
      <RightSide></RightSide>


    </div>
  )
}

export default Home
