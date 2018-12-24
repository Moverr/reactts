
import React, { Component } from 'react';

 class Hello extends Component {
      

  render() {
    const user = {
        "name":"movers",
        "age":23
    }

    return (
      <div>
        <h1>Play me a sound {user.name}</h1>
        <h2> New Date : {new Date().toLocaleTimeString() } </h2>
      </div>
    )
  }

     getH1(name) {
         return <h1> {name} </h1>;
     }
}

export default Hello;