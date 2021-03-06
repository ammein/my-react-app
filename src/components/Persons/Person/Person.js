import React , { Component } from "react";
import PersonCSS from './Person.css';
import TEST from './test.less';
import Aux from '../../../HOC/Auxiliary';
import withClass from '../../../HOC/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class person extends Component {

    constructor(props) {
        super(props)
        // It given whatever ref gave to this.inputElement
        this.inputElement = React.createRef();
    }

    // Add contextType for usable in componentDidMount
    static contextType = AuthContext;

    componentDidMount(){
        this.inputElement.current.focus();
        console.log("Login : ",this.context.login);
        console.log("Authenticated : ",this.context.authenticated);
    }

    render(){
        console.log("[Person.js] rendering...");
        return(
            <Aux>
            {this.context.authenticated ? <p>Authenticated !</p> : <p>Please Log In</p> }
                <p className={TEST["bgYellow"]} onClick={this.props.click}>I'm a {this.props.name} and I'm a {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                    ref={this.inputElement}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} />
            </Aux>);
    }
}

person.propTypes = {
    click : PropTypes.func, // For a function
    name : PropTypes.string, // String
    age : PropTypes.number, // Number
    changed : PropTypes.func
};

export default withClass(person , PersonCSS.Person);