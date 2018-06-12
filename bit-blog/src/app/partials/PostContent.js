import React from 'react';
import { Link } from 'react-router-dom';


export class PostContent extends React.Component {
    
    render(){
        const { title, fullBody, authorId } = this.props.postData;
        const { author } = this.props;
        return(
        <div className="row">
                <div className="col s12 ">
                    <div className="card">
                        <div className='post-title'>
                            <span className="card-title">{title}</span>
                            <div><Link to={`/post/author/${authorId}`}>{author.name}</Link></div>
                        </div>
                        <div className="card-content">
                            <p>{fullBody}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
