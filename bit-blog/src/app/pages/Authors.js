import React from 'react';
import { fetchAllAuthors, fetchAuthorPosts } from '../../services/fetchService';
import { NumberOfPosts } from '../partials/numberOfPosts';

export class Authors extends React.Component{
    constructor(props){
        super(props),

        this.state= {
            authors: [],
        }
    }
    
    getFetchedAuthors = () => {
        fetchAllAuthors()
            .then((authors) => {
                this.setState({ authors: authors })
      
            })
    }

    componentDidMount(){
        this.getFetchedAuthors()
    }


    render(){
        console.log(this.state.authors)
        return (
        <div className="collection container">
            {this.state.authors.map((author, key) => {     
                return <a href="#!" className="collection-item" key={key}><NumberOfPosts id={author.id}/>{author.name}</a>
            })}
            
            
        </div>
        )
    } 
}