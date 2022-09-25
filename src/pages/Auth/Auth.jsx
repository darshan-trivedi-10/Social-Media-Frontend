import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logIn, signUp } from '../../Redux/actions/authActions.js';

const Auth = () => {

    const dispatch = useDispatch();
    const loading = useSelector((state) => state.authReducer.loading)
    const [isSignUp, setIsSignUp] = useState(true);
    const [userData, setUserData] = useState({
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        confirmPassword: ""
    })
    const [confirmPass, setConfirmPass] = useState(true);
    const [warningData, setWarningData] = useState('');
    // warningData


    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
        setConfirmPass(true);
        setWarningData('');
        console.log(checkDetails());
    }

    const checkDetails = () => {
        if (userData.firstname.length === 0 || userData.lastname.length === 0 || userData.username.length === 0 || userData.password.length === 0) {
            console.log(userData.password.length)
            return true;
        }
        console.log(userData.password.length)
        return false;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(warningData);

        console.log(checkDetails());
        if (isSignUp) {
            if (checkDetails()) {
                setWarningData("Please Fill all the details . . .");
                console.log(warningData);
            } else {
                userData.password === userData.confirmPassword ? dispatch(signUp(userData)) : setWarningData('Confirm Password ans Password is not Same ');
            }
        } else {
            dispatch(logIn(userData))
        }
    }


    const resetForm = () => {
        setUserData({
            firstname: "",
            lastname: "",
            username: "",
            password: "",
            confirmPassword: ""
        })
    }

    return (

        // Left Side
        <div className='Auth'>
            <div className='a-left'>
                <img src={Logo} alt='logo' />
                <div className='webName'>
                    <h1>NEW Media</h1>
                    <h6>Explore the impact of it and ites in various areas </h6>
                </div>
            </div>

            {/* Right Side */}
            <div className='a-right'>
                <form className='infoForm authForm' onSubmit={handleSubmit} >
                    <h3>{isSignUp ? "Sign up" : "Login"}</h3>
                    {
                        isSignUp &&
                        <div >
                            <input type='text' placeholder='First Name' className='infoInput' name='firstname' value={userData.firstname} onChange={handleChange} />
                            <input type='text' placeholder='Last Name' className='infoInput' name='lastname' value={userData.lastname} onChange={handleChange} />
                        </div>
                    }
                    <div>
                        <input type='text' placeholder='UserName' className='infoInput' name='username' value={userData.username} onChange={handleChange} />
                    </div>
                    <div>
                        <input type='text' placeholder='Password' className='infoInput' name='password' value={userData.password} onChange={handleChange} />
                        {
                            isSignUp && <input type='text' placeholder='Confirm Password' className='infoInput' value={userData.confirmPassword} name='confirmPassword' onChange={handleChange} />
                        }
                    </div>
                    {
                        isSignUp &&
                        < span className='passwordWarning'>
                            {
                                warningData
                            }
                        </span>
                    }
                    <div  >
                        <span className='signupLoginText' onClick={() => { setIsSignUp(!isSignUp); resetForm() }}>
                            {
                                isSignUp ? "Already have account. Login!" : "Don't have an account ? Sign Up"
                            }
                        </span>
                    </div>
                    <button className='button infobutton' type='submit' disabled={loading} >{loading ? "Loading..." : isSignUp ? "SignUp" : "Log In"}</button>

                </form>
            </div>
        </div >
    )
}

export default Auth;