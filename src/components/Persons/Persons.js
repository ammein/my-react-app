import React , { Component } from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Person from './Person/Person.js';

// One line JS code -> const persons = (props) => ();
class Persons extends Component { 

    // static getDerivedStateFromProps(props , state){
    //     console.log("[Persons.js] getDerivedStateFromProps");
    //     return state;
    // }

    shouldComponentUpdate(nextProps , nextState){
        console.log("[Persons.js] shouldComponentUpdate");
        // Only can return boolean
        return true;
    }

    getSnapshotBeforeUpdate(prevProps , prevState){
        console.log("[Persons.js] getSnapshotBeforeUpdate");
        return {
            message : "Snapshot !"
        };
    }

    componentDidUpdate(prevProps , prevState , snapshot){
        console.log("[Persons.js] componentDidUpdate");
        console.log(snapshot);
    }

    render(){
        console.log("[Persons.js] rendering ...");
        return (this.props.persons.map((person, index) => {
            // Return JSX Person
            return <ErrorBoundary key={person.id}><Person
                click={this.props.clicked.bind(this, index)}
                name={person.name}
                age={person.age}
                key={index}
                changed={(event) => this.props.changed(event, person.id)} /></ErrorBoundary>
        })
        );
    }
}

export default Persons;