import React, { Component } from 'react';
import Image from './components/Image';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image image="https://orig00.deviantart.net/8adf/f/2010/152/4/9/cthulhu_shirt_teefury_close_by_missmonster.jpg" />
      </div>
    );
  }
}

export default App;
