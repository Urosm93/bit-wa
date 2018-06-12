import React from 'react';
import { fetchSinglePost, fetchAuthorPosts } from '../../services/fetchService'
import { fetchAuthor } from '../../services/fetchService'
import { PostContent } from '../partials/PostContent';
import { MorePosts } from '../partials/MorePosts';



export class PostDetailsPage extends React.Component{
    constructor(props) {
        super(props),

            this.state = {
                postData: {},
                author: {},
                authorPosts: []
            }
    }


    getFetchedPost = () => {
        return fetchSinglePost(this.props.match.params.postId)
            .then((post) => {
                this.setState({ postData: post })
                return post;
            })
    }

    fetchAuthor = (authorId) => {
        fetchAuthor(authorId)
            .then((author) => {
                this.setState({ author: author })
                console.log(author)
            })
    }

    fetchAuthorPosts = (authorId) => {
        fetchAuthorPosts(authorId)
            .then((authorPosts) => {
                this.setState({authorPosts: authorPosts})
                console.log(authorPosts)
            })
    }


    componentDidMount() {
        this.getFetchedPost()
            .then(({authorId}) => {
                this.fetchAuthor(authorId);
                this.fetchAuthorPosts(authorId);
            })

    }

    render() {
        if (!this.state.postData) {
            return <h1>Loading</h1>
        }

        

        return (
            <div className="container">
            <PostContent postData={this.state.postData} author={this.state.author}/>
            <MorePosts posts={this.state.authorPosts}/>
            </div>
        )
    }
}