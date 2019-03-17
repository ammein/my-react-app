import React from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Person from './Person/Person.js';


// One line JS code -> const persons = (props) => ();
const persons = (props) => (
    props.persons.map((person, index) => {
        // Return JSX Person
        return <ErrorBoundary key={person.id}><Person
            click={props.clicked.bind(this, index)}
            name={person.name}
            age={person.age}
            key={index}
            changed={(event) => props.changed(event, person.id)} /></ErrorBoundary>
    })
);

export default persons;