import React from 'react';
import { Link } from 'react-router-dom';


export const MorePosts = (props) => {

    return (
        <div>
            <h5 className='center'>{props.posts.length} more post from same author</h5>
            <ul className="collection">
                {props.posts.map((post,key) => {
                    return  <li className="collection-item" key={key}><Link to={`/post/${post.id}`}>{post.title}</Link></li>
                })}
            </ul>
        </div>
    )
}