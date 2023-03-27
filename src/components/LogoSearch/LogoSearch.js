import React from 'react'
import { UilSearch } from '@iconscout/react-unicons'
import Logo from '../../img/logo.png'
import './LogoSearch.css'
import { useDispatch } from 'react-redux'
import { logout } from '../../actions/AuthAction'
import { Navigate, Link } from 'react-router-dom'
const LogoSearch = () => {
    const dispatch = useDispatch()
    return (
        <div className="LogoSearch">
            <Link to="../home"><img src={Logo} alt="" /></Link>
            <div className="LogoInput">
                <input type="text" placeholder='#Explore' />
                <UilSearch></UilSearch>

            </div>

        </div>
    )
}

export default LogoSearch
