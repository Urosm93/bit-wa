import React from 'react';
import { Link } from 'react-router-dom';

export const Header = (props) =>{
    return(
        <nav>
        <div className="nav-wrapper #1565c0 blue darken-3">
        <div className='container'>
          <a  className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/authors'>Authors</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/posts/new'>Create New Post</Link></li>
          </ul>
        </div>
        </div>
      </nav>
            
    )
}