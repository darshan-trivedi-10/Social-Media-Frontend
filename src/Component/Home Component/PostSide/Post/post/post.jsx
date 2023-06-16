import React from 'react'
import './post.css'
import Comment from '../../../../../img/comment.png'
import Share from '../../../../../img/share.png'
import Heart from '../../../../../img/like.png'
import NotLike from '../../../../../img/notlike.png'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { likeunlikePost } from '../../../../../Api/postRequest'

const Post = ({ data }) => {
    const { user } = useSelector((state) => state.authReducer.authData);
    const [liked, setLiked] = useState(data.likes.includes(user._id));
    const [likes, setLikes] = useState(data.likes.length);


    const handleLike = () => {
        setLiked((prev) => !prev);
        likeunlikePost(data._id, user._id);
        liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
    }

    return (
        <div className='post'>
            <img src={data.image ? "https://social-media-backend-2vez.onrender.com/images/" + data.image : ""} alt='userImage' />
            <div className='postReact'>
                <img className={liked ? "redLike" : "aa"} src={liked ? Heart : NotLike} alt='likeOrDislike' style={{ cursor: "pointer" }} onClick={handleLike} />
                {/* <img src={Comment} alt='Comment' /> */}
                {/* <img src={Share} alt='Share' /> */}
            </div>
            <span style={{ color: 'var(--gray)', fontSize: '12px' }}> {likes} likes</span>
            <div className='detail'>
                <span><b>{data.username}</b></span>
                <span> {data.description}</span>
            </div>
        </div>
    )
}

export default Post
