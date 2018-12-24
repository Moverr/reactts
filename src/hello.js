
import React, { Component } from 'react';

 class Hello extends Component {
      

    player (name){
        return <h1>Play me a sound {name}</h1>;
    }


  render() {
    // const user = {
    //     "name":"movers",
    //     "age":23
    // }

    return (
      <div>
        {this.player(this.props.name)}
        <h2> New Date : {new Date().toLocaleTimeString() } </h2>
      </div>
    )
  }

     
     getH1(name) {
         return <h1> {name} </h1>;
     }
}

export default Hello;