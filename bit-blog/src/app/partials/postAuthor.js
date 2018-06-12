import React from 'react';
import { fetchAuthor } from '../../services/fetchService';

export class PostAuthor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            author: null
        }

    }


    fetchAuthor = () => {
        fetchAuthor(this.props.match.params.authorId)
            .then((res) => {
                this.setState({ author: res });
                console.log(res)
            })
    }
    componentDidMount() {
        this.fetchAuthor();
    }

    render() {
        if (!this.state.author) {
            return <h1>Loading</h1>
        }
       
        const {name, username, email, address, phone, company} = this.state.author;
        console.log(this.state.author)

        return (
            <div className="col s12 container">
                <div className="card horizontal">
                    <div className="card-image">
                        <img src="http://dreamatico.com/data_images/face/face-1.jpg" />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content container">
                            <h3>{name}</h3>
                            <p>{`username : ${username}`}</p>
                            <p>{`email : ${email}`}</p>
                            <p>{`phone : ${phone}`}</p>
                        </div>
                       
                    </div>
                </div>
                <div className="card horizontal">
                    <div className="card-stacked">
                        <div className="card-content container">
                            <h3>Address</h3>
                            <p>{`street : ${address.street}`}</p>
                            <p>{`city : ${address.city}`}</p>
                            <p>{`zipcode : ${address.zipcode}`}</p>
                        </div>
                       
                    </div>
                </div>
                <div className="card horizontal">
                    <div className="card-stacked">
                        <div className="card-content container">
                            <h3>Company</h3>
                            <p>{`name : ${company.name}`}</p>
                            <p>{`slogan : ${company.catchPhrase}`}</p>
                        </div>
                       
                    </div>
                </div>
            </div>
        )
    }

    




}