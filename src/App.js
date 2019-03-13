import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js';

const App = props => {
  // ES6 Destructuring
  const [ personsState , setPersonsState ] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ],
    otherState : "some other value"
  });

  const [otherState , setOtherState] = useState({otherState : "some other value"});

  // Console log here
  console.log(personsState , otherState);

  const switchNameHandler = (newName) => {
    // DON'T DO THIS : personsState.persons[0].name = "Maximilian"
    debugger;
    setPersonsState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 20 }
      ]
    })
  };

  return (
    <div className="App">
      <h1>Hi , I am react App</h1>
      <p>Test Web App</p>
      <p>This is working too</p>
      <button onClick={switchNameHandler.bind(this , 'Maximillian')}>Switch Name</button>
      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age} />
      <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age}
        click={switchNameHandler.bind(this, 'Max!')}>My Hobbies is racing</Person>
      <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age}></Person>
    </div>
  );
}

export default App;