import React from 'react';

const PostItem = (props) =>{
    const {title, body} = props.post;
    
    return(
      <div className="col12">
  <div className="card blue-grey darken-1">
      <div className="card-content white-text">
          <span className="card-title">{title}</span>
          <p className="card-content white-text">{body}</p>
      </div>
  </div>
</div>
);

    
  }
  export { PostItem };
