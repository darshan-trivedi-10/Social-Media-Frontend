import React from 'react'
import './Profilecard.css'
import Cover from '../../../../img/cover.jpg'
import Profile from '../../../../img/defaultProfile.png'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Profilecard = ({ location }) => {

    const { user } = useSelector((state) => state.authReducer.authData);
    const posts = useSelector((state) => state.postReducer.posts)
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className='ProfileCard'>
            <div className='ProfileImages'>
                <img src={user?.coverPicture ? serverPublic + user.coverPicture : Cover} alt='Cover-Images' />
                <img src={user?.profilePicture ? serverPublic + user.profilePicture : Profile} alt='Profile-Images' />
            </div>
            <div className='ProfileName'>
                <span>{user?.firstname} {user?.lastname}</span>
                <span>{user?.worksAt}</span>
            </div>
            <div className='followStatus'>
                <hr />
                <div>
                    <div className='follow'>
                        <span>{user?.following.length}</span>
                        <span>Following</span>
                    </div>
                    <div className='vl'></div>
                    <div className='follow'>
                        <span>{user?.followers.length}</span>
                        <span>Followers</span>
                    </div>
                    {location === 'profilePage' && (
                        <>
                            <div className='vl'>

                            </div>
                            <div className='follow'>
                                <span>{posts.filter((post) => post.userId === user._id).length}</span>
                                <span>Posts</span>
                            </div>
                        </>
                    )}

                </div>
                <hr />
            </div>
            {location === 'profilePage' ? '' :
                <span style={{ marginBottom: '12px' }}>
                    <Link style={{ textDecoration: "none" }} to={`/profile/${user?._id}`}>
                        My Profile
                    </Link>
                </span>
            }
        </div >
    )
}

export default Profilecard