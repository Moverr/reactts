import React, { Component } from 'react';

class Greeting extends Component {
 
    constructor(props) {
        super(props);
        this.userGreeting = this.userGreeting.bind(this);
        this.guestGreeting = this.guestGreeting.bind(this);
        this.greet = this.greet.bind(this);
        
    }
    
    
    render() {
        return (
            <div>
               {this.greet(this.props.isLoggedin)}
            </div>
        );
    }
 
    greet(isLoggedIn){
        
        if(isLoggedIn){
            return this.userGreeting();
        }
        
            return  this.guestGreeting();
        
    }
    
    

    userGreeting(){
        return <h1>Welcome back!</h1>;
    }
    //todo: if guest
    guestGreeting(){
        return <h1>Please sign up !</h1>;
    }

}

export default Greeting;