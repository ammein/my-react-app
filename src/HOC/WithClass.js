import React from 'react';

// MUST Start with Capital letter because it will actually be a
// reference to a component.
// The second argument can be anything you want !
const withClass = (WrappedComponent , className) => {
    // return another function components
    return props => (
        <div className={className}>
            {
                // It pulls out all the properties 
                // and distributes them as new key-value pairs
                // you can do this but its not dynamic :
                // <WrappedComponent props={props}/>
            }
            <WrappedComponent {...props}/>
        </div>
    );
}

export default withClass;