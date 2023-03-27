import React from 'react'
import { UilSetting } from '@iconscout/react-unicons'
import home from '../../img/home.png'
import noti from '../../img/noti.png'
import cmt from '../../img/comment.png'
import './RightSide.css'
import { TrendCard } from './../TrendCard/TrendCard';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/AuthAction'
function RightSide() {
    const dispatch = useDispatch()
    const handleLogOut = () => {
        dispatch(logout())
        // truyen1 function()
    }
    return (
        <div className="RightSide">
            {/* react-unicons */}
            <div className="navIcons">
                <img onClick={handleLogOut} src={home} alt="" />
                <UilSetting ></UilSetting>
                <img src={noti} alt="" />
                <img src={cmt} alt="" />
            </div>
            <TrendCard></TrendCard>
            <button className='button'>Share</button>

        </div>
    )
}

export default RightSide