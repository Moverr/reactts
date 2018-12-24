
import React, { Component } from 'react';
// import { isString } from 'postcss-selector-parser';

import Utitlities from './Utitlities';

 class Hello extends Component {
      
  

  //todo: YOu initialize  in the state in the constructor: :: 
  

  constructor(props) {
    super(props)
    this.util = new  Utitlities();
  
    this.state =  {   
      
      name: "Muyinda Rogers",
      date : this.util.initDate()
    }
    
  }
  
  componentDidMount(){
    this.timeId =  setInterval(
      ()=>this.tick(),1000
    );
  }
  componentWillUnmount(){
    clearInterval(this.timeId);
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
      date : this.util.initDate()
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

