import React, { useEffect, useState } from 'react'
import logoImg from '../../img/logo.png'
import './Auth.css'
import { useSelector, useDispatch } from 'react-redux'

import { login, signUp } from './../../actions/AuthAction';


const SignUp = (setIsSignUp, handleChange, isEqual, setIsEqual, handleSignUpSubmit, loading, isError) => {
    return (
        <div className="SignUp">
            <h1>Signn Up</h1>
            <form action="" className='signUp'>
                <div className="first-group">
                    <input onChange={(e) => handleChange(e)} type="text" name='firstname' placeholder='First Name' />
                    <input onChange={(e) => handleChange(e)} type="text" name='lastname' placeholder='Last Name' />
                </div>
                <div className="second-group">
                    <input onChange={(e) => handleChange(e)} type="text" name='username' placeholder='UserName' />
                </div>
                <div className="Last-group">
                    <input onChange={(e) => handleChange(e)} type="password" name='password' placeholder='Password' />
                    <input onChange={(e) => handleChange(e)} type="password" name='confirmpassword' placeholder='Cofirm Password' />
                </div>
                {isError ? <p style={{ "color": "red" }}>*Username have been taken</p> : <></>}
                {!isEqual && <p style={{ "color": "red" }}>Confirm password is not same</p>}
                <p style={{
                    "cursor": "pointer"
                }} onClick={() => {
                    setIsSignUp(false)
                }} >Already have an account?</p>
                <button onClick={(e) => { handleSignUpSubmit(e) }} >{!loading ? 'SignUp' : 'loading'}</button>
            </form>
        </div>
    )
}


const Login = (setIsSignUp, handleChange, handleLoginSubmit) => {

    return (
        <div className="Login">
            <h1>Login</h1>
            <form action="" className='login'>
                <input onChange={(e) => handleChange(e)} type="text" name='username' placeholder='Username' />
                <br />
                <input onChange={(e) => handleChange(e)} type="text" name='password' placeholder='Password' />
            </form>
            <p style={{
                "cursor": "pointer"
            }} onClick={() => {
                setIsSignUp((prev) => !prev)
            }} >Don't have an account? <span >Sign Up</span></p>
            <button onClick={(e) => { handleLoginSubmit(e) }}>Login</button>
        </div>
    )
}



export const Auth = () => {
    const isError = useSelector(state => state.AuthReducer.error)

    const [isSignUp, setIsSignUp] = useState(true)
    const [data, setDate] = useState({ firstname: '', lastname: "", username: "", password: "", confirmpassword: "" })
    const handleChange = (event) => {
        setDate({ ...data, [event.target.name]: event.target.value })
        //ghi de
    }
    const loading = useSelector((state) => state.AuthReducer.loading)
    const dispatch = useDispatch()
    const [isEqual, setIsEqual] = useState(true)
    const handleSignUpSubmit = (e) => {
        e.preventDefault()
        if (data.password === data.confirmpassword) {
            dispatch(signUp(data))
        } else {
            setIsEqual((prev) => !prev)
        }
    }
    const handleLoginSubmit = (e) => {
        e.preventDefault()
        dispatch(login(data))
    }
    useEffect(() => {
        setDate({
            firstname: '', lastname: "", username: "", password: "", confirmpassword: ""
        })
    }, [isSignUp])
    return (
        <div className="Auth">
            {console.log(isSignUp)}
            <div className="left-side">
                <img onClick={
                    () => {
                        setIsSignUp(!isSignUp)
                    }} src={logoImg} alt="" />
                <div className="left-ct">
                    <h1>HGT Media</h1>
                    <p>Explore the faf throughout the world</p>
                </div>

            </div>
            {isSignUp ? SignUp(setIsSignUp, handleChange, isEqual, setIsEqual, handleSignUpSubmit, loading, isError) : Login(setIsSignUp, handleChange, handleLoginSubmit)}

        </div>
    )
}
