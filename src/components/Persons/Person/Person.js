import React , { Component } from "react";
import PersonCSS from './Person.css';
import TEST from './test.less';
import Aux from '../../../HOC/Auxiliary';

class person extends Component {
    render(){
        console.log("[Person.js] rendering...");
        return(
            <Aux>
                <div className={PersonCSS.Person}>
                    <p className={TEST["bgYellow"]} onClick={this.props.click}>I'm a {this.props.name} and I'm a {this.props.age} years old!</p>
                    <p>{this.props.children}</p>
                    <input type="text" onChange={this.props.changed} value={this.props.name} />
                </div>
            </Aux>);
    }
}

export default person;