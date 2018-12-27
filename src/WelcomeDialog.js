import React, { Component } from 'react';
import FancyBorder from './FancyBorder';

class WelcomeDialog extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
          };
    }
    
    componentDidMount(){
        
        fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(res => res.json())
      .then(

        

        (result) => {
            console.log(result);
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }
    render() {

        const items = this.state.items;
        // const listItems = items.map((message)=><li key={message.id}>{message.id}</li>);


        return (
            <div>
        <FancyBorder color="blue" >
                {items.title}
                {items.id}
                
                <p className="Dialog-message">
                  Plain
                </p>
 

                </FancyBorder>

<FancyBorder  color="white" poki = {
                    <h1> LORD HAS BEEN VERY SUCCESFULL </h1>
                }
                />
               </div> 
                
        );
    }
}

export default WelcomeDialog;