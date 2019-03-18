import React , { useEffect } from 'react';
import Classes from './Cockpit.less';

const cockpit = (props) => {
    // useEffect here
    useEffect(() => {
      console.log("[Cockpit.js] useEffect");
      // Http request...
      const timer = setTimeout(() => {
          alert('Saved data to cloud !');
      }, 1000);

      // Clean up work
      return () =>{
          clearTimeout(timer);
          console.log("[Cockpit.js] cleanup work in useEffect");
      }
    }, []);

    const classes = []; // "red bold"
    let btnClass = '';

    // Do checking
    if(props.showPersons){
        btnClass = Classes.Red;
    }

    if (props.persons.length <= 2) {
        classes.push("red");
    }

    if (props.persons.length <= 1) {
        classes.push("bold");
    }

    return (
        <div className={Classes.Cockpit}>
            <h1>{props.title}</h1>
            <p>Test Web App</p>
            <p className={classes.join(" ")}>This is working too</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
}

export default cockpit;