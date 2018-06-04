import React from 'react';
import PostItem from './PostItem'

const PostList = (props) => {
    const posts = props.myPosts
    return (
        <div className="container">
            <div className="row">
                {posts.map((id, post) => {
                    return (<PostItem key={id} myPosts={post} />)

                })}
            </div>
        </div>
    )
}

export { PostList };