import React , { PureComponent } from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Person from './Person/Person.js';

// One line JS code -> const persons = (props) => ();
class Persons extends PureComponent { 

    // static getDerivedStateFromProps(props , state){
    //     console.log("[Persons.js] getDerivedStateFromProps");
    //     return state;
    // }

    // shouldComponentUpdate(nextProps , nextState){
    //     console.log("[Persons.js] shouldComponentUpdate");
    //     // it looks on nextProps that refers to a newPointer
    //     if(
    //         nextProps.persons !== this.props.persons || 
    //         nextProps.changed !== this.props.changed || 
    //         nextProps.clicked
    //     ){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }

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

    componentWillUnmount() {
        console.log("[Person.js] componentWillUnmount");
    }

    render(){
        console.log("[Persons.js] rendering ...");
            return (
                this.props.persons.map((person, index) => {
                // Return JSX Person
                return (<ErrorBoundary key={person.id}><Person
                    click={this.props.clicked.bind(this, index)}
                    name={person.name}
                    age={person.age}
                    key={index}
                    changed={(event) => this.props.changed(event, person.id)}/></ErrorBoundary>)
                })
        );
    }
}

export default Persons;