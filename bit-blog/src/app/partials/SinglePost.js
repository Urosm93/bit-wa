import React from 'react';
import { Link } from 'react-router-dom';

export const SinglePost = (props) => {
    const {title, shortBody, postId} = props.postData;
    return (
        <div className="row">
            <div className="col s12">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                       <Link to={`/post/${postId}`}><span className="card-title">{title}</span></Link>
                        <p>{shortBody}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}