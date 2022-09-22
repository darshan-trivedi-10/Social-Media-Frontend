import React, { useEffect } from 'react'
import './InfoCard.css'
import { UilPen } from '@iconscout/react-unicons'
import { useState } from 'react'
import ProfileModal from './ProfileModel/ProfileModel'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as userApi from '../../../../Api/userRequest.js'
import { logout } from '../../../../Redux/actions/authActions'

const InfoCard = () => {

    const dispatch = useDispatch();
    const params = useParams();
    const profileUserId = params.username;
    const [profileUser, setProfileUser] = useState({});
    const { user } = useSelector((state) => state.authReducer.authData);
    useEffect(() => {
        const fetchProfileUser = async () => {
            if (profileUserId === user._id) {
                setProfileUser(user);
            } else {
                const profileUser = await userApi.getUser(profileUserId);
                setProfileUser(profileUser);
            }
        }
        fetchProfileUser();
    }, [user])

    const handleLogout = () => {
        dispatch(logout())
    }

    const [modalOpened, setModalOpened] = useState(false);
    return (
        <div className='InfoCard'>
            <div className='infoHead'>
                <h4>Profile Info</h4>
                {user._id === profileUserId && <div>
                    <UilPen width='2rem' height='1.2rem' onClick={() => setModalOpened(true)} />

                    <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} data={user} />
                </div>}
            </div>

            <div className='info'>
                <span>
                    <b>Status </b>
                    <span>
                        {profileUser.relationship}
                    </span>
                </span>
            </div>

            <div className='info'>
                <span>
                    <b>Lives In </b>
                    <span>
                        {profileUser.livesIn}
                    </span>
                </span>
            </div>

            <div className='info'>
                <span>
                    <b>Works at </b>
                    <span>
                        {profileUser.worksAt}
                    </span>
                </span>
            </div>

            <button className='button logout-btn' onClick={handleLogout}>LogOut</button>
        </div>
    )
}

export default InfoCard