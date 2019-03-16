import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {

  state = {
    persons: [
      { id:"adsa123", name: "Max", age: 28 },
      { id : "1eaegw", name: "Manu", age: 29 },
      { id : "asf1t", name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons : false
  }

  deletePersonHandler = (index) =>{
    const persons = this.state.persons.slice();

    // Remove one element from array
    // First param is the chooser index of array
    // Second param is the number of needed to remove from array. In this case , just one
    persons.splice(index , 1);

    // Update it
    this.setState({persons : persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    // Toggle True False
    this.setState({showPersons : !doesShow});
  }

  nameChangeHandler = (event , id) =>{
    // Return Person Index by detecting true or false
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    })

    // Using new Object Property ES6 method to create new object
    // Shortcut from Object.assign({} , this.state.persons[personIndex])
    const person = {
      ...this.state.persons[personIndex]
    }

    // Update Person Name
    person.name = event.target.value;

    // Copy to new array (Immutable method)
    const persons = [...this.state.persons];

    // Update person into new array copy
    persons[personIndex] = person;

    // Use Set State normally
    this.setState({persons : persons});
  }

  render () {
    const style = {
      backgroundColor: "green",
      color : "white",
      font : "inherit",
      border : "1px solid blue",
      padding : "8px",
      cursor : "pointer"
    };

    // Dynamic Content

    let persons = null;

    if(this.state.showPersons){
      // JSX Dynamic
      persons = (
        <div>
          {
            // Convert to array using .map()
            this.state.persons.map((person , index) => {
              // Return JSX Person
              return <Person 
                click={this.deletePersonHandler.bind(this , index)}
                name={person.name} 
                age={person.age}
                key={index}
                changed={(event)=>this.nameChangeHandler(event, person.id)} />
            })
          }
        </div>
      );

      style.backgroundColor = "red";
    }

    const classes = []; // "red bold"

    if(this.state.persons.length <= 2){
      classes.push("red");
    }

    if(this.state.persons.length <=1){
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Hi , I am react App</h1>
        <p>Test Web App</p>
        <p className={classes.join(" ")}>This is working too</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
      </div>
    );
  }
}

export default App;