import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi , I am react App</h1>
        <p>Test Web App</p>
        <p>This is working too</p>
        <Person /> {/* You could also use <Person></Person> */}
      </div>
    );
  }
}

export default App;
