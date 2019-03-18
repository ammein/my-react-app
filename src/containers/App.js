import React, { Component } from 'react';
import Classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props){
    super(props);
    console.log("[App.js] constructor");
    this.state = {
      persons: [
        { id: "adsa123", name: "Max", age: 28 },
        { id: "1eaegw", name: "Manu", age: 29 },
        { id: "asf1t", name: "Stephanie", age: 26 }
      ],
      otherState: "some other value",
      showPersons: false
    }
  }

  static getDerivedStateFromProps(props ,state){
    console.log("[App.js] getDerivedStateFromProps" , props);
    return state;
  }

  componentDidMount(){
    console.log("[App.js] ComponentDidMount");
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

    console.log("[App.js] render");
    // Dynamic Content
    let persons = null;


    if(this.state.showPersons){
      // JSX Dynamic
      persons = (
        <div>
          <Persons 
          persons={this.state.persons} 
          clicked={this.deletePersonHandler} 
          changed={this.nameChangeHandler} />
        </div>
      );
    }

    return (
      <div className={Classes.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}/>
        {persons}        
      </div>
    );
  }
}

export default App;