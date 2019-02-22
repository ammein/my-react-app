import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons : [
      {name : "Max",age : 28},
      {name : "Manu",age : 29},
      {name : "Stephanie",age : 30}
    ]
  }

  switchNameHandler = () =>{
    // DON'T DO THIS : this.state.persons[0].name = "Maximilian"
    this.setState({
      persons: [
        { name: "Maximillian", age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 20 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi , I am react App</h1>
        <p>Test Web App</p>
        <p>This is working too</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies is racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>
    );
  }
}

export default App;
