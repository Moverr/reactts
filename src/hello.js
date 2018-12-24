
import React, { Component } from 'react';
// import { isString } from 'postcss-selector-parser';

 class Hello extends Component {
      
  

  constructor(props) {
    super(props)
    this.state =  {
    
      name: "Muyinda Rogers"
    }
    
  }
  
  componentDidMount(){

  }
  componentWillUnmount(){

  }
  /*
  componentDidCatch(){

  }
  componentWillReceiveProps(){

  }

  componentDidUpdate(){

  }
  componentWillMount(){

  }
  componentWillUpdate(){

  }
   */

  tick(){
    this.setState({
      date : new Date()
    })
  }
    player (name){
             
        return <h1>Play me a sound {name}</h1>;
       
      // return "N/A";
    }


  render() {
    // const user = {
    //     "name":"movers",
    //     "age":23
    // }

    return (
      <div>
        {this.player(this.props.name)}
        <h2> New Date : {this.state.date.toLocaleTimeString() } </h2>
      </div>
    )
  }

     
     getH1(name) {
         return <h1> {name} </h1>;
     }
}

export default Hello;