import React, { useRef, useState, useEffect } from 'react'
import './PostShare.css'
import { AiFillPicture } from "react-icons/ai";
import { BiVideoPlus } from "react-icons/bi";
import { BiLocationPlus } from "react-icons/bi";
import { BiCalendar } from "react-icons/bi";
import avatar from '../../img/profileImg.jpg'
import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { Modals } from './../Modal/Modals';

import { UploadFile } from '../../api/PostAPI';
import { getTimeLine, uploadPost, handleGetAllUserPosts } from './../../actions/PostAction';
import defaultAvatart from '../../img/defaultAvatar.jpg'
const PostShare = () => {
    let user = JSON.parse(localStorage.getItem('reduxState'))
    const imgInput = useRef();
    const [urlImg, setUrlImg] = useState(null);
    const [desc, setDesc] = useState('')
    const userInfo = useSelector(state => state.AuthReducer.user)
    const profilePost = useSelector(state => state.UserReducer.user._id)
    const currentUser = useSelector(state => state.UserReducer.user)

    const [postData, setPostData] = useState({ userId: user.AuthReducer.user._id, image: null, desc: null })
    console.log(user.AuthReducer.user._id);
    const handleImg = async () => {
        await imgInput.current.click()
        console.log(urlImg);

    }
    const dispatch = useDispatch()
    const [opened, { open, close }] = useDisclosure(false);
    const handleSubmit = () => {
        let randomName = ~~(Math.random() * 12314213)
        console.log(randomName);
        postData.image = randomName + '.png'
        dispatch(uploadPost(postData))
        // dispatch a thunk action
        let fileData = new FormData()
        fileData.append('fileName', randomName)
        fileData.append('image', imgInput.current.files[0])
        UploadFile(fileData)

        setDesc('')
        setUrlImg(null)

    }
    useEffect(() => {
        dispatch(handleGetAllUserPosts(profilePost))
        dispatch(getTimeLine(postData.userId))
    }, [])
    // get static image from server localhost
    return (

        <div className="PostShare">

            <img src={currentUser.profilePicture ? `https://social-media-server-1305.onrender.com/${currentUser.profilePicture}.png` : defaultAvatart} alt="" />

            <div className="postInput">
                <input type="text" placeholder='What happening?' value={desc} onChange={(e) => {
                    setPostData({ ...postData, desc: e.target.value })
                    setDesc(e.target.value)

                }} />
                <div className="postInputMore">
                    <div onClick={handleImg} className="inputType">
                        <AiFillPicture></AiFillPicture>
                        Photo
                    </div>
                    <div className="inputType">
                        <BiVideoPlus></BiVideoPlus>
                        Video
                    </div>
                    <div className="inputType">
                        <BiLocationPlus></BiLocationPlus>
                        Location
                    </div>
                    <div className="inputType">
                        <BiCalendar></BiCalendar>
                        Shedule
                    </div>
                    <div className="postButton">

                        <Button onClick={handleSubmit}>Share</Button>

                    </div>

                </div>
                <input style={{
                    display: 'none'
                }} type="file" ref={imgInput} onChange={e => {
                    setPostData({ ...postData, image: e.target.files[0].name })
                    setUrlImg(URL.createObjectURL(e.target.files[0]));
                }} />
                {urlImg && urlImg.length > 0 &&

                    <>
                        {console.log(urlImg)}

                        <img style={{
                            width: '400px'
                        }} src={urlImg} alt="" />
                        <span onClick={() => {
                            setUrlImg(null)
                        }}>x</span>
                    </>


                }

            </div>

            <Modals></Modals>


        </div>
    )
}

export default PostShare

