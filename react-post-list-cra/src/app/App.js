import React, { Component } from 'react';
import './App.css';
import { posts } from '../data/Data'
import { Header } from './entities/Header'
import { Footer } from './entities/Footer'

const App = (props) => {

return(
  <React.Fragment>
    <Header />
    <PostList myPosts={posts}/>
    <Footer />
  </React.Fragment>
)
}

export { App };
