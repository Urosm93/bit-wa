import React from 'react';
import { Link } from 'react-router-dom';


export class NewPost extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            titleValue: '',
            bodyValue: ''
        }
    }

    writePost(title, body) {
        fetch('http://localhost:3000/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            

    }

    render() {
        return (
            <div className="container">
                <h3>New Post</h3>

                <label for='postTitle' >Title</label>
                <input id='postTitle' type="text" placeholder="Post title" value={this.state.titleValue} onChange={(event)=>{this.setState({titleValue: event.target.value})}}/>

                <label for='content' >Content</label>
                <textarea id='content'  data-length="120" className="materialize-textarea" value={this.state.bodyValue} onChange={(event)=>{this.setState({bodyValue: event.target.value})}}></textarea>
                <div>
                    <button className="waves-effect waves-light btn-small right red" ><Link to='/'>Cancel</Link></button>
                    <button className="waves-effect waves-light btn-small" onClick={()=> this.writePost(this.state.titleValue, this.state.bodyValue)}><Link to='/'>Save</Link></button>
                </div>
            </div>
        )
    }

}