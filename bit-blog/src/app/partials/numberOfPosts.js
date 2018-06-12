import React from 'react';
import { fetchAllAuthors, fetchAuthorPosts } from '../../services/fetchService';



export class NumberOfPosts extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            NumberOfPosts: 0
        }
    }

    getNumberOfPosts = (id) => {
        fetchAuthorPosts(id)
        .then((authorPosts) => {
            this.setState({NumberOfPosts: authorPosts.length})
        })
    }

    componentDidMount(){
        this.getNumberOfPosts(this.props.id)
    }

    render(){
        if(!this.state.NumberOfPosts){
            return <span className="badge">...</span>
        }

        return (
            <span className="badge">{`number of posts:${this.state.NumberOfPosts}`}</span>
        ) 
    }
    
}