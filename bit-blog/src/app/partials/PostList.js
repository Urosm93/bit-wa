import React from 'react';
import { SinglePost } from './SinglePost';
import { fetchHomePosts } from '../../services/fetchService';

export class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    getPosts = () => {
        fetchHomePosts()
            .then((posts) => {
                this.setState({ posts })

            })

    }

    componentDidMount() {
        this.getPosts()
    }

    render() {
        return (
            <div className='container'>
                {this.state.posts.map((post, key) => <SinglePost key={key} postData={post} />)}
            </div>
        )
    }
}