import React, { useEffect, useState } from 'react'
import './InfoCard.css'
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group } from '@mantine/core';
import { useSelector, useDispatch } from 'react-redux';
import { getUser, upDateUser } from './../../actions/UserAction';
import { UserReducer } from './../../reducers/UserReducer';
import { logout } from '../../actions/AuthAction';
import { UploadFile } from '../../api/PostAPI';


export const InfoCard = ({ userID }) => {
    //userID is params
    const dispatch = useDispatch()

    const [opened, { open, close }] = useDisclosure(false);
    const auth = useSelector(state => state.AuthReducer.user)
    console.log(userID.userID);
    const [userId, setUserID] = useState(userID.userID)
    const currentUser = useSelector(state => state.UserReducer.user)
    const [updateData, setUpdateData] = useState({
        profilePicture: null, coverPicture: null, worksAt: currentUser.worksAt, relationship: currentUser.relationship, about: currentUser.about,
        livesin: currentUser.livesin, firstname: currentUser.firstname, lastname: currentUser.lastname
    })
    const handleUpdateInfo = (e) => {
        setUpdateData({ ...updateData, [e.target.name]: e.target.value })
    }
    const handleUpdateFile = (e) => {
        let fileName = ~~(Math.random() * 10000000 + 100000)
        console.log(e.target.files[0]);
        let fileForm = new FormData()
        fileForm.append("fileName", fileName)
        fileForm.append("image", e.target.files[0])
        setUpdateData({ ...updateData, [e.target.name]: fileName })
        UploadFile(fileForm)

    }
    const handleUpdateAction = (e) => {
        e.preventDefault()
        console.log("updated");
        let reqForm = {}
        reqForm["currentUserId"] = auth._id
        reqForm["currentUserAdminStatus"] = false
        reqForm["worksAt"] = updateData.worksAt
        reqForm["relationship"] = updateData.relationship
        reqForm["about"] = updateData.about
        reqForm["livesin"] = updateData.livesin
        reqForm["coverPicture"] = updateData.coverPicture
        reqForm["profilePicture"] = updateData.profilePicture
        reqForm["firstname"] = updateData.firstname
        reqForm["lastname"] = updateData.lastname
        console.log("check", reqForm);
        console.log(userID.userID);
        dispatch(upDateUser(userID.userID, reqForm))
        // dispatch(getUser(userID.userID))

    }

    console.log(updateData);
    useEffect(() => {
        setUserID(userID.userID)
        // dispatch(getUser(userID.userID))
    }, [userID.userID])
    return (
        <div className="InfoCard">
            <div className="infoContent">
                <h1>Your Info          <button onClick={open}>edit</button></h1>
                <p>Status {currentUser.relationship || "None"}</p>
                <p>Lives {currentUser.livesin || "None"}</p>
                <p>Works {currentUser.worksAt || "None"} </p>
            </div>
            <button onClick={() => { dispatch(logout()) }}>Logout</button>
            <Modal opened={opened} withCloseButton={false} onClose={close} centered title="Your Infomation">
                <form className='editProfile'>
                    <input onChange={(e) => { handleUpdateInfo(e) }} value={updateData.firstname} type="text" name='firstname' placeholder='firstname' />
                    <input onChange={(e) => { handleUpdateInfo(e) }} value={updateData.lastname} type="text" name='lastname' placeholder='lastname' />
                    <input onChange={(e) => { handleUpdateInfo(e) }} value={updateData.worksAt} type="text" name='worksAt' placeholder='worksat' />
                    <input onChange={(e) => { handleUpdateInfo(e) }} value={updateData.relationship} type="text" name='relationship' placeholder='relationship' />
                    <label htmlFor="profilePicture">Avatar Image</label>
                    <label htmlFor="coverPicture">Cover Image</label>

                    <input type="file" onChange={(e) => { handleUpdateFile(e) }} name='profilePicture' placeholder='avatar' />

                    <input type="file" onChange={(e) => { handleUpdateFile(e) }} name='coverPicture' placeholder='cover' />
                </form>
                <br />
                <button onClick={(e) => { handleUpdateAction(e) }}>Update</button>
                <a onClick={close}>Close</a>
            </Modal>

        </div>

    )
}
