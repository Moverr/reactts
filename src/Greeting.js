import React, { Component } from 'react';

class Greeting extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }

    //todo: if User logged in 
    userGreeting(props){
        return <h1>Welcome back!</h1>;
    }
    //todo: if guest
    guestGreeting(props){
        return <h1>Please sign up !</h1>;
    }

}

export default Greeting;