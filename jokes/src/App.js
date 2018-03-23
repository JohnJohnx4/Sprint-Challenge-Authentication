import React, { Component } from 'react';
import './styles/App.css';
import Frontpage from './components/Front';
import Front from './components/Front';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Frontpage />
      </div>
    );
  }
}

export default App;
