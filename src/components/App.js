import React, { Component } from 'react';
import '../css/style.css';
import Header from './Header';
import Intro from './Intro'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
        <Footer />
      </div>
    );
  }
}

export default App;
