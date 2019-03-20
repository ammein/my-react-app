import React , { useEffect , useRef } from 'react';
import Classes from './Cockpit.less';

const cockpit = (props) => {

    const toggleBtnRef = useRef();

    // useEffect here
    useEffect(() => {
      console.log("[Cockpit.js] useEffect");
      // Http request...
      const timer = setTimeout(() => {
          alert('Saved data to cloud !');
      }, 1000);

      // After all DOM mount just like `componentDidMount`
        toggleBtnRef.current.click();

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

    if (props.personsLength <= 2) {
        classes.push("red");
    }

    if (props.personsLength <= 1) {
        classes.push("bold");
    }


    return (
        <div className={Classes.Cockpit}>
            <h1>{props.title}</h1>
            <p>Test Web App</p>
            <p className={classes.join(" ")}>This is working too</p>
            <button
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
}

export default React.memo(cockpit);