import React from 'react'
import { PostsData } from './../../Data/PostsData';
import Post from './../Post/Post';
import { useEffect } from 'react'
import './Posts.css'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';


function Posts() {

    let posts = useSelector(state => state.PostReducer.posts)
    let postsUser = useSelector(state => state.PostReducer.userPosts)
    let location = useLocation()
    console.log(location.pathname.includes('home'));

    return (
        <div className="Posts">
            {location.pathname.includes('home') ? posts.map((post) => {
                return (
                    <Post data={post} />


                )
            }) : postsUser.map((post) => {
                return (
                    <Post data={post} />


                )
            })}

        </div>
    )
}

export default Posts