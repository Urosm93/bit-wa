import React from 'react';

const PostItem = (props) =>{
    const posts = props.myPosts;
    return(
        <div class="col s12 m7">
    
    <div class="card horizontal">
      <div class="card-stacked">
        <div class="card-content">
          <p>{posts.title}</p>
          <p>{posts.body}</p>
        </div>
      </div>
    </div>
  </div>
    )
}






export { PostItem };