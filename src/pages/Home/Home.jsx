import React from 'react'
import PostSide from '../../Component/Home Component/PostSide/PostSide'
import ProfileSide from '../../Component/Home Component/ProfileSide/ProfileSide'
import RightSide from '../../Component/Home Component/RightSide/RightSide'
import './Home.css'

const Home = () => {
    return (
        <div className='Home'>
            <ProfileSide className='profileSide' />
            <PostSide />
            <RightSide />
        </div>
    )
}

export default Home