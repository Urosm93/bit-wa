import React, { Component, Fragment } from 'react';
import './App.css';

import { Header } from './partials/Header';
import { Footer } from './partials/Footer';
import { PostList } from './partials/PostList';
import { About } from './pages/About';
import { Authors } from './pages/Authors'
import { Switch, Route } from 'react-router-dom';


import { PostDetailsPage } from './pages/PostDetailsPage'
import { NewPost } from './pages/NewPost'
import { PostContent } from './partials/PostContent';
import { PostAuthor } from './partials/postAuthor';


class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route path='/posts/new' component={NewPost} />
          <Route path='/post/author/:authorId' component={PostAuthor} />
          <Route path='/post/:postId' component={PostDetailsPage} />
          <Route path='/authors' component={Authors} />
          <Route path='/about' component={About} />
          <Route path='/' component={PostList} />
        </Switch>
        <Footer />
      </Fragment>
    )
  }
}

export default App;
