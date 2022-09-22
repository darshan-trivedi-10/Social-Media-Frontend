import React from 'react'
import './TrendCard.css'
import User from '../../ProfileSide/FollowersCard/user/User'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { getFollowers, getFollowing } from '../../../../Api/userRequest'

const TrendCard = () => {
    const { user } = useSelector((state) => state.authReducer.authData);
    const [followers, setFollowers] = useState([]);
    const [following, setFollowing] = useState([]);
    const [showFollowers, setShowFollowers] = useState(true);

    useEffect(() => {
        const findData = async () => {
            const follower = await getFollowers(user._id);
            const followings = await getFollowing(user._id);
            setFollowers(follower.data);
            setFollowing(followings.data);
        }

        findData();
    }, [user])

    return (
        <div className='TrendCard'>
            <div className='r-card-btn'>
                <button className='button' onClick={() => setShowFollowers(true)}>Followers</button>
                <button className='button' onClick={() => setShowFollowers(false)}>Following</button>
            </div>
            {
                (showFollowers ? followers : following).map((users, id) => {
                    return (
                        <User userData={users} key={id} />
                    )
                })
            }
        </div>
    )
}

export default TrendCard