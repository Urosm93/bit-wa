import React from 'react';
import './App.css';

import { Header } from './partials/Header'
import { Footer } from './partials/Footer'
import { Main } from './partials/Main'

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listView: true,
    };
  }

  viewLayout = (layout) => {
    if (layout === true) {
      this.setState({listView: false})
    } else {
      this.setState({listView:true})
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header title='Bit Users' state={this.state.listView} stateSetting={this.viewLayout} />
        <Main state={this.state.listView} />
        <Footer />
      </React.Fragment>

    )
  }

}

