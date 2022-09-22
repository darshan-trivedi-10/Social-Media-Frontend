import React from 'react'
import PostShare from './PostShare/PostShare'
import Posts from './Post/Posts'
import './PostSide.css'

const PostSide = () => {
    return (
        <div className='postSide'>
            <PostShare />
            <Posts />
        </div>
    )
}

export default PostSide
