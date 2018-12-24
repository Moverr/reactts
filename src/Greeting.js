import React, { Component } from 'react';
// import LoginButton from './LoginButton';

class Greeting extends Component {
 
    constructor(props) {
        super(props);
        this.userGreeting = this.userGreeting.bind(this);
        this.guestGreeting = this.guestGreeting.bind(this);
        this.greet = this.greet.bind(this);

        this.state= {
            "isLoggedin":this.props.isLoggedin
        }
        
    }
    
    
    render() {
        
        return (
            <div>
               {this.greet(this.state.isLoggedin)}
               {/* <LoginButton name="Hay Mover"   /> */}
               <button  onClick={(e)=>this.handleClicker()} >{this.state.isLoggedin ? "LOGOUT" : "LOGIN" }</button>
        
            </div>
        );
    }
 
    handleClicker(){
        // alert('Did You know');
        this.setState({
            "isLoggedin" : !this.state.isLoggedin
        });
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