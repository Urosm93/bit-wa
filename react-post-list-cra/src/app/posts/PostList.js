import React from 'react';
import { PostItem } from './PostItem'

const PostList = (props) => {
    const postList = props.myPosts
    
    return (
        <div className="container">
            <div className="row">
                {postList.map((post, id) => {
                    return (<PostItem key={post.id} post={post} />)

                })}
            </div>
        </div>
    )
}

export { PostList };