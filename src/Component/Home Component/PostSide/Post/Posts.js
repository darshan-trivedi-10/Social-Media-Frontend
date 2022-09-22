import React, { useEffect } from 'react'
import Post from './post/post.jsx'
import './Posts.css'
import { useDispatch, useSelector } from 'react-redux'
import { getTimelinePosts } from '../../../../Redux/actions/postActions.js'
import { useParams } from 'react-router-dom'


const Posts = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.authReducer.authData);
    let { posts, loading } = useSelector((state) => state.postReducer)
    const params = useParams();

    useEffect(() => {
        dispatch(getTimelinePosts(user?._id));
    }, [])

    if (!posts) {
        return "No Posts"
    }

    if (params.username) {
        posts = posts.filter((post) => post.userId === params.username);
    }

    return (
        <div className='Posts'>
            {
                loading ? "Fetching Post . . ." :
                    posts?.map((post, id) => {
                        return <Post data={post} id={post._id} />
                    })
            }
        </div>
    )
}

export default Posts
