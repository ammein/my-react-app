import React, { useState , Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {

  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ],
    otherState: "some other value"
  }

  switchNameHandler = (newName) => {
    // DON'T DO THIS : personsState.persons[0].name = "Maximilian"
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 20 }
      ]
    })
  };

  nameChangeHandler = (event) =>{
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 20 }
      ]
    })
  }

  render () {
    const style = {
      backgroundColor: "white",
      font : "inherit",
      border : "1px solid blue",
      padding : "8px",
      cursor : "pointer"
    };

    return (
      <div className="App">
        <h1>Hi , I am react App</h1>
        <p>Test Web App</p>
        <p>This is working too</p>
        <button 
          style={style}
          onClick={this.switchNameHandler.bind(this, 'Maximillian')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangeHandler}>My Hobbies is racing</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}></Person>
      </div>
    );
  }
}

export default App;