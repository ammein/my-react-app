import React from "react";
import PersonCSS from './Person.css';
import TEST from './test.less';

const person = (props) => {
    return(
        <div className={PersonCSS.Person}>
            <p className={TEST["bgYellow"]} onClick={props.click}>I'm a {props.name} and I'm a {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default person;